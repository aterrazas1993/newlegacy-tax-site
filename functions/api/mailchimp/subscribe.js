function json(data, init) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init && init.headers ? init.headers : {}),
    },
  });
}

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const normalizedEmail = body?.email?.trim().toLowerCase();

    if (!normalizedEmail) {
      return json({ error: "Email is required." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(normalizedEmail)) {
      return json({ error: "Enter a valid email address." }, { status: 400 });
    }

    if (!env.MAILCHIMP_API_KEY || !env.MAILCHIMP_AUDIENCE_ID || !env.MAILCHIMP_SERVER_PREFIX) {
      return json(
        { error: "Mailchimp environment variables are missing in Cloudflare." },
        { status: 500 },
      );
    }

    const response = await fetch(
      `https://${env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${env.MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`anystring:${env.MAILCHIMP_API_KEY}`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: normalizedEmail,
          status: "subscribed",
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
