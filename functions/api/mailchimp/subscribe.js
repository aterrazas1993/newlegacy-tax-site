function json(data, init) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init && init.headers ? init.headers : {}),
    },
  });
}

function splitFullName(fullName) {
  const trimmed = fullName?.trim();
  if (!trimmed) {
    return {};
  }

  const parts = trimmed.split(/\s+/);
  return {
    FNAME: parts[0] || "",
    LNAME: parts.slice(1).join(" "),
  };
}

function normalizeBirthday(birthday) {
  const trimmed = birthday?.trim();
  if (!trimmed) {
    return undefined;
  }

  return /^\d{2}\/\d{2}$/.test(trimmed) ? trimmed : null;
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const normalizedEmail = body?.email?.trim().toLowerCase();
    const normalizedBirthday = normalizeBirthday(body?.birthday);

    if (!normalizedEmail) {
      return json({ error: "Email is required." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(normalizedEmail)) {
      return json({ error: "Enter a valid email address." }, { status: 400 });
    }

    if (normalizedBirthday === null) {
      return json({ error: "Enter birthday in MM/DD format." }, { status: 400 });
    }

    if (!env.MAILCHIMP_API_KEY || !env.MAILCHIMP_AUDIENCE_ID || !env.MAILCHIMP_SERVER_PREFIX) {
      return json(
        { error: "Mailchimp environment variables are missing in Cloudflare." },
        { status: 500 },
      );
    }

    const apiKey = env.MAILCHIMP_API_KEY.trim();
    const audienceId = env.MAILCHIMP_AUDIENCE_ID.trim();
    const serverPrefix = env.MAILCHIMP_SERVER_PREFIX.trim();
    const mergeFields = {
      ...splitFullName(body?.fullName),
      ...(body?.phone?.trim() ? { PHONE: body.phone.trim() } : {}),
      ...(normalizedBirthday ? { BIRTHDAY: normalizedBirthday } : {}),
    };

    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`anystring:${apiKey}`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: normalizedEmail,
          status: "subscribed",
          ...(Object.keys(mergeFields).length ? { merge_fields: mergeFields } : {}),
        }),
      },
    );

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      const detail = data?.detail || "Mailchimp could not process this signup right now.";

      if (typeof detail === "string" && detail.includes("is already a list member")) {
        return json({
          message: "This email is already subscribed to updates.",
        });
      }

      if (typeof detail === "string" && detail.includes("merge fields")) {
        return json(
          {
            error:
              "Mailchimp needs matching audience fields for name, phone, or birthday before these extra details can be saved.",
          },
          { status: response.status },
        );
      }

      return json({ error: detail }, { status: response.status });
    }

    return json({
      message: "You’re subscribed. Check your inbox for future updates.",
    });
  } catch (error) {
    return json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while subscribing.",
      },
      { status: 500 },
    );
  }
}
