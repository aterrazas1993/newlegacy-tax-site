import { createHash } from "node:crypto";

function splitFullName(fullName?: string) {
  const trimmed = fullName?.trim();
  if (!trimmed) {
    return {};
  }

  const parts = trimmed.split(/\s+/);
  return {
    FNAME: parts[0] ?? "",
    LNAME: parts.slice(1).join(" "),
  };
}

function normalizeBirthday(birthday?: string) {
  const trimmed = birthday?.trim();
  if (!trimmed) {
    return undefined;
  }

  return /^\d{2}\/\d{2}$/.test(trimmed) ? trimmed : null;
}

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: Request) {
  try {
    const { email, fullName, phone, birthday } = (await request.json()) as {
      email?: string;
      fullName?: string;
      phone?: string;
      birthday?: string;
    };
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail) {
      return Response.json({ error: "Email is required." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(normalizedEmail)) {
      return Response.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const normalizedBirthday = normalizeBirthday(birthday);
    if (normalizedBirthday === null) {
      return Response.json({ error: "Enter birthday in MM/DD format." }, { status: 400 });
    }

    const apiKey = requiredEnv("MAILCHIMP_API_KEY");
    const audienceId = requiredEnv("MAILCHIMP_AUDIENCE_ID");
    const serverPrefix = requiredEnv("MAILCHIMP_SERVER_PREFIX");
    const subscriberHash = createHash("md5").update(normalizedEmail).digest("hex");
    const mergeFields = {
      ...splitFullName(fullName),
      ...(phone?.trim() ? { PHONE: phone.trim() } : {}),
      ...(normalizedBirthday ? { BIRTHDAY: normalizedBirthday } : {}),
    };

    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: normalizedEmail,
          status_if_new: "subscribed",
          status: "subscribed",
          ...(Object.keys(mergeFields).length ? { merge_fields: mergeFields } : {}),
          tags: ["newlegacy-tax-site", "website-signup"],
        }),
      },
    );

    const data = (await response.json()) as {
      detail?: string;
      status?: string;
      title?: string;
    };

    if (!response.ok) {
      return Response.json(
        {
          error: data.detail ?? "Mailchimp could not process this signup right now.",
        },
        { status: response.status },
      );
    }

    const message =
      data.status === "subscribed"
        ? "You’re subscribed. Check your inbox for future updates."
        : "Your email has been updated in our mailing list.";

    return Response.json({ message });
  } catch (error) {
    return Response.json(
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
