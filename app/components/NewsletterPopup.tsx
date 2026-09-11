"use client";

import { FormEvent, useEffect, useState } from "react";

const DISMISSAL_KEY = "nlt_newsletter_popup_dismissed";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      if (window.localStorage.getItem(DISMISSAL_KEY)) return;

      const timer = window.setTimeout(() => setIsOpen(true), 20000);
      return () => window.clearTimeout(timer);
    } catch {
      const timer = window.setTimeout(() => setIsOpen(true), 20000);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function closePopup() {
    try {
      window.localStorage.setItem(DISMISSAL_KEY, "true");
    } catch {
      // Showing the popup again is an acceptable fallback if storage is unavailable.
    }
    setIsOpen(false);
  }

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setStatus("error");
      setMessage("Enter your email address to receive updates.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/mailchimp/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      });
      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) throw new Error(data.error ?? "Unable to subscribe right now.");

      setStatus("success");
      setMessage(data.message ?? "You are subscribed. Thank you!");
      setEmail("");
      try {
        window.localStorage.setItem(DISMISSAL_KEY, "true");
      } catch {
        // The confirmation is still shown even when browser storage is unavailable.
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to subscribe right now.");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
    >
      <section className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-[#d7a936]/70 bg-[#090909] px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.7),0_0_42px_rgba(215,169,54,0.16)] sm:px-9">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,#b87d1c,#fff078,#b87d1c)]" />
        <div aria-hidden className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#d7a936]/10 blur-3xl" />

        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-xl leading-none text-zinc-300 transition hover:border-[#d7a936]/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#fff078]/50"
          aria-label="Close signup form"
        >
          &times;
        </button>

        <div className="relative text-center">
          <img
            src="/newlegacy-logo.png"
            alt="New Legacy Tax Services"
            className="mx-auto h-28 w-auto max-w-[240px] object-contain drop-shadow-[0_0_18px_rgba(255,240,120,0.2)]"
          />
          <h2 id="newsletter-title" className="mt-4 text-3xl font-semibold text-white">
            Stay Informed
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-300">
            Receive tax reminders, Open Enrollment updates, and practical financial tips.
          </p>

          {status === "success" ? (
            <div className="mt-7 rounded-2xl border border-[#d7a936]/40 bg-[#d7a936]/10 px-4 py-5 text-sm leading-6 text-[#fff5c7]" role="status">
              {message}
            </div>
          ) : (
            <form onSubmit={subscribe} className="mt-7">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
                className="h-12 w-full rounded-xl border border-white/15 bg-black px-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#fff078] focus:ring-2 focus:ring-[#d7a936]/30"
                disabled={status === "submitting"}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-3 h-12 w-full rounded-xl bg-[linear-gradient(90deg,#b87d1c_0%,#d7a936_24%,#fff078_50%,#d7a936_76%,#b87d1c_100%)] px-4 text-sm font-bold tracking-[0.14em] text-black shadow-[0_10px_28px_rgba(184,125,28,0.25)] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "submitting" ? "SUBSCRIBING..." : "GET UPDATES"}
              </button>
              {status === "error" ? (
                <p className="mt-3 text-sm text-red-300" role="alert">{message}</p>
              ) : null}
            </form>
          )}

          <p className="mt-5 text-xs text-zinc-500">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
