"use client";

import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { useEffect, useState } from "react";

/**
 * Canvas-preview version (pure React)
 * - No Next.js imports (no next/image)
 * - No shadcn imports (Card/Button/Badge/Input are implemented locally)
 * - No path aliases (@/...) needed
 * - Keeps the same layout + black/gold aesthetic
 * - Intro animations run only once per session
 *
 * NOTE: Your real Next.js/Vercel project can keep the proper shadcn + next/image version.
 */

// ---------- tiny UI primitives (shadcn-like) ----------
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("rounded-2xl border", className)}>{children}</div>;
}

function CardHeader({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("p-5", className)}>{children}</div>;
}

function CardContent({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("p-5", className)}>{children}</div>;
}

function CardTitle({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("font-semibold", className)}>{children}</div>;
}

function Button({
  className,
  variant,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 h-11 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]";
  const solid = "nlt-gold-btn";
  const outline =
    "border border-amber-200/20 bg-zinc-950/30 text-zinc-100 hover:bg-zinc-900/40";
  return (
    <button
      className={cx(base, variant === "outline" ? outline : solid, className)}
      {...props}
    >
      {children}
      <span aria-hidden className="nlt-btn-shine" />
    </button>
  );
}

function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs",
        className
      )}
    >
      {children}
    </span>
  );
}

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cx(
        "h-11 w-full rounded-2xl border px-4 text-sm outline-none focus:ring-2 focus:ring-amber-200/20",
        className
      )}
      {...props}
    />
  );
}

// ---------- simple icons (no external deps) ----------
function Icon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex h-5 w-5 items-center justify-center text-amber-200",
        className
      )}
      aria-hidden
    >
      {children}
    </span>
  );
}

const PhoneI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
    </svg>
  </Icon>
);

const MailI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  </Icon>
);

const PinI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-4.35 7-11a7 7 0 0 0-14 0c0 6.65 7 11 7 11z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  </Icon>
);

const ArrowI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  </Icon>
);

const SparkleI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l1.2 4.3L18 8l-4.8 1.7L12 14l-1.2-4.3L6 8l4.8-1.7L12 2z" />
      <path d="M5 12l.7 2.4L8 15l-2.3.6L5 18l-.7-2.4L2 15l2.3-.6L5 12z" />
    </svg>
  </Icon>
);

const LockI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  </Icon>
);

const FileI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
    </svg>
  </Icon>
);

const ShieldI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  </Icon>
);

const TrendI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  </Icon>
);

const CalI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-5" />
    </svg>
  </Icon>
);

const BadgeCheckI = (p: { className?: string }) => (
  <Icon className={p.className}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.5 2.5L18 5l1 3 3 1-1 3 1 3-3 1-1 3-3.5.5L12 22l-2.5-2.5L6 19l-1-3-3-1 1-3-1-3 3-1 1-3 3.5-.5L12 2z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  </Icon>
);

// ---------- helpers ----------
const Accent = ({ children }: { children: ReactNode }) => (
  <span className="nlt-gold-text">
    {children}
  </span>
);

const Glow = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-amber-400/12 blur-3xl" />
    <div className="absolute -bottom-52 right-10 h-[520px] w-[520px] rounded-full bg-yellow-300/10 blur-3xl" />
    <div className="absolute top-24 left-10 h-[360px] w-[360px] rounded-full bg-amber-300/8 blur-3xl" />
  </div>
);

const Grid = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,215,100,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,215,100,0.12)_1px,transparent_1px)] bg-[size:56px_56px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,215,100,0.18),transparent_55%)]" />
  </div>
);

const Section = ({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  desc?: string;
  children?: ReactNode;
}) => (
  <section id={id} className="relative py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-2xl">
        {eyebrow && (
          <div className="mb-3 flex items-center gap-2">
            <div className="h-1 w-8 rounded-full bg-amber-300/70" />
            <p className="text-xs tracking-[0.2em] uppercase text-amber-200/80">
              {eyebrow}
            </p>
          </div>
        )}
        {title && (
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">{title}</h2>
        )}
        {desc && (
          <p className="mt-3 text-sm sm:text-base text-zinc-300/90 leading-relaxed">{desc}</p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-amber-200/10 bg-zinc-950/30 p-5">
    <div className="text-2xl font-semibold text-zinc-50">{value}</div>
    <div className="mt-1 text-xs tracking-wide text-zinc-300/80">{label}</div>
  </div>
);

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => (
  <Card className="bg-zinc-950/40 border-amber-200/10 rounded-2xl shadow-[0_0_0_1px_rgba(255,215,100,0.06)]">
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
          {icon}
        </div>
        <CardTitle className="text-base text-zinc-50">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-sm text-zinc-300/90 leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const Service = ({ title, desc }: { title: string; desc: string }) => (
  <Card className="bg-zinc-950/35 border-amber-200/10 rounded-2xl overflow-hidden">
    <CardHeader className="pb-2">
      <CardTitle className="text-base text-zinc-50">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-zinc-300/90 leading-relaxed">{desc}</p>
      <Button variant="outline" className="mt-4">
        Learn more <ArrowI className="h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

export default function NewLegacyTaxServicesPrototype() {
  const [runIntro, setRunIntro] = useState(false);

  useEffect(() => {
    // Only animate the first visit per session.
    try {
      const key = "nlt_intro_v1";
      if (!window.sessionStorage.getItem(key)) {
        setRunIntro(true);
        window.sessionStorage.setItem(key, "1");
      }
    } catch {
      setRunIntro(true);
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-black text-zinc-100">
      {/* Required intro animations (CSS) — canvas safe */}
      <style>{`
        /* Intro */
        @keyframes nlt-fade-down { from { opacity: 0; transform: translate3d(0,-6px,0);} to { opacity: 1; transform: translate3d(0,0,0);} }
        @keyframes nlt-fade-up { from { opacity: 0; transform: translate3d(0,14px,0);} to { opacity: 1; transform: translate3d(0,0,0);} }
        @keyframes nlt-fade-up-2 { from { opacity: 0; transform: translate3d(0,16px,0);} to { opacity: 1; transform: translate3d(0,0,0);} }
        .nlt-anim-nav { animation: nlt-fade-down .5s ease-out both; }
        .nlt-anim-hero-left { animation: nlt-fade-up .6s ease-out both; }
        .nlt-anim-hero-right { animation: nlt-fade-up-2 .7s ease-out .08s both; }

        /* Rolex gold */
        :root{
          --g-deep:#5a420f;
          --g-anti:#b8860b;
          --g-core:#d4af37;
          --g-hi:#f2d36b;
          --g-spec:#fff3b0;
        }

        @keyframes nlt-gold-text { 0%{background-position:0% 50%;} 100%{background-position:200% 50%;} }
        .nlt-gold-text{
          background-image: linear-gradient(90deg,
            var(--g-deep) 0%,
            var(--g-anti) 18%,
            var(--g-core) 32%,
            var(--g-spec) 46%,
            var(--g-hi) 55%,
            var(--g-spec) 64%,
            var(--g-core) 78%,
            var(--g-anti) 92%,
            var(--g-deep) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip:text;
          background-clip:text;
          color: transparent;
          text-shadow: 0 0 18px rgba(212,175,55,.18);
          animation: nlt-gold-text 3.9s linear infinite;
        }

        @keyframes nlt-shine { 0%{transform:translateX(-140%) skewX(-18deg);opacity:0;} 10%{opacity:.65;} 26%{opacity:0;} 100%{transform:translateX(240%) skewX(-18deg);opacity:0;} }
        .nlt-gold-btn{
          position:relative;
          overflow:hidden;
          color:#060606;
          background-image: linear-gradient(90deg,var(--g-deep) 0%, var(--g-core) 26%, var(--g-spec) 50%, var(--g-core) 74%, var(--g-deep) 100%);
          box-shadow: 0 12px 34px rgba(0,0,0,.58), 0 0 0 1px rgba(212,175,55,.18) inset;
          filter:saturate(1.05);
          transition: transform .22s ease, filter .22s ease;
        }
        .nlt-gold-btn:hover{ transform: translateY(-1px); filter:saturate(1.12) brightness(1.02); }
        .nlt-gold-btn:active{ transform: translateY(0px) scale(.99); }

        .nlt-btn-shine{
          position:absolute;
          inset:-40% auto -40% -60%;
          width:52%;
          background: linear-gradient(90deg,transparent 0%,rgba(255,243,176,.12) 35%,rgba(255,243,176,.75) 50%,rgba(255,243,176,.12) 65%,transparent 100%);
          filter: blur(1px);
          opacity:0;
          pointer-events:none;
          transform: translateX(-140%) skewX(-18deg);
        }
        .nlt-gold-btn:hover .nlt-btn-shine{ opacity:1; animation:nlt-shine 1.55s ease-in-out; }
      `}</style>

      <div className="relative">
        <Glow />
        <Grid />

        {/* Top bar */}
        <div className="relative z-10 border-b border-amber-200/10 bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-zinc-300/90">
              <div className="flex items-center gap-2">
                <PhoneI className="h-3.5 w-3.5" />
                <span>832-718-3887</span>
              </div>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <div className="hidden sm:flex items-center gap-2">
                <MailI className="h-3.5 w-3.5" />
                <span>oscarcortes@newlegacyfinancial.net</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-300/10 text-amber-200 border-amber-200/20">We serve all 50 states</Badge>
              <Badge className="bg-zinc-950/40 text-zinc-200 border-amber-200/10 hidden sm:inline-flex">File virtually or in person</Badge>
            </div>
          </div>
        </div>

        {/* Nav */}
        <header className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex items-center justify-between">
            <a
              href="#top"
              aria-label="New Legacy Tax Services"
              className={cx(
                runIntro && "nlt-anim-nav",
                "group flex items-center gap-3 select-none transition-transform duration-300 hover:-translate-y-[1px]"
              )}
            >
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-amber-300/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_36px_rgba(255,215,100,0.18)]" />
                {/* Canvas-safe image (use the hosted SVG URL or data URI if you want in preview) */}
                <img
                  src="https://raw.githubusercontent.com/placeholder/placeholder/main/newlegacygold.svg"
                  alt="New Legacy Tax Services Logo"
                  style={{ height: 48, width: "auto" }}
                  className="drop-shadow-[0_8px_28px_rgba(255,215,100,0.15)] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="leading-tight hidden sm:block">
                <div className="text-sm font-semibold tracking-[0.08em] uppercase text-zinc-50">New Legacy</div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-amber-200/80">Tax Services</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300/90">
              {[
                ["Services", "#services"],
                ["Why Us", "#why"],
                ["Process", "#process"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  className="relative hover:text-zinc-50 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-amber-200/70 after:transition-all after:duration-300 hover:after:w-full"
                  href={href}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden sm:inline-flex">Client Intake</Button>
              <Button>
                File Now <ArrowI className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-12 sm:pt-16">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className={cx(runIntro && "nlt-anim-hero-left", "lg:col-span-7")}>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-amber-300/10 text-amber-200 border-amber-200/20">Maximize your refund</Badge>
                  <Badge className="bg-zinc-950/40 text-zinc-200 border-amber-200/10">Personal + business</Badge>
                  <Badge className="bg-zinc-950/40 text-zinc-200 border-amber-200/10">Bookkeeping + formation</Badge>
                </div>

                <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-[1.05] text-zinc-50">
                  Build a <Accent>stronger financial future</Accent>—starting this tax season.
                </h1>

                <p className="mt-5 text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-xl">
                  Our goal is to provide accurate, affordable, and stress‑free tax preparation for individuals and small businesses—
                  ensuring compliance while maximizing your financial outcomes and peace of mind.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button>
                    Start Client Intake <LockI className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    Explore Services <ArrowI className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                  <Stat label="Customers served" value="1,000+" />
                  <Stat label="Dollars returned" value="$3.4M" />
                  <Stat label="States served" value="50" />
                </div>

                <div className="mt-4 rounded-2xl border border-amber-200/10 bg-black/35 p-4 max-w-xl">
                  <div className="flex items-start gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                      <BadgeCheckI className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-zinc-300/90 leading-relaxed">
                      <span className="text-zinc-50 font-medium">Refund outcomes:</span>{" "}
                      On average, clients see a <span className="text-amber-200">10% increase</span> in refunds compared to competitors.
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx(runIntro && "nlt-anim-hero-right", "lg:col-span-5")}>
                <Card className="rounded-3xl border-amber-200/10 bg-zinc-950/35 overflow-hidden">
                  <div className="p-5 border-b border-amber-200/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <SparkleI className="h-4 w-4" />
                      <div className="text-sm font-medium text-zinc-50">Client Intake</div>
                    </div>
                    <Badge className="bg-amber-300/10 text-amber-200 border-amber-200/20">Fast + organized</Badge>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <label className="text-xs text-zinc-400">Full name</label>
                      <Input
                        placeholder="Jordan Lee"
                        className="mt-1 bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400">Email</label>
                      <Input
                        placeholder="jordan@company.com"
                        className="mt-1 bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-zinc-400">Service</label>
                        <Input
                          placeholder="Personal tax"
                          className="mt-1 bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-zinc-400">Preferred</label>
                        <Input
                          placeholder="Virtual"
                          className="mt-1 bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <Button className="flex-1">Submit Intake</Button>
                      <Button variant="outline">Call Us</Button>
                    </div>

                    <div className="mt-4 rounded-2xl border border-amber-200/10 bg-black/35 p-4">
                      <div className="flex items-start gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                          <FileI className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-zinc-50 font-medium">What to bring</div>
                          <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                            Income docs (W‑2/1099), ID, prior‑year returns, and records for deductions/credits.
                          </p>
                          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                            {["W‑2/1099", "ID", "Prior‑year", "Deductions"].map((s) => (
                              <div
                                key={s}
                                className="rounded-xl border border-amber-200/10 bg-zinc-950/30 px-3 py-2 text-zinc-300"
                              >
                                {s}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-500">
                      Replace buttons with your actual intake + contact links.
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="relative" id="why">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-6">
              <div className="rounded-3xl border border-amber-200/10 bg-zinc-950/25 backdrop-blur p-5">
                <div className="grid gap-4 md:grid-cols-4">
                  {[
                    {
                      icon: <ShieldI className="h-5 w-5" />,
                      t: "Expertise you can trust",
                      d: "Years of experience with personal and business tax needs.",
                    },
                    {
                      icon: <TrendI className="h-5 w-5" />,
                      t: "Personalized service",
                      d: "Tailored strategies—no cookie‑cutter solutions.",
                    },
                    {
                      icon: <LockI className="h-5 w-5" />,
                      t: "Commitment to compliance",
                      d: "We stay current so your filings stay confident.",
                    },
                    {
                      icon: <CalI className="h-5 w-5" />,
                      t: "Quick response",
                      d: "Timely answers when you have crucial questions.",
                    },
                  ].map((x) => (
                    <div key={x.t} className="flex items-start gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                        {x.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-50">{x.t}</div>
                        <div className="text-xs text-zinc-400 leading-relaxed">{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <Section
            id="services"
            eyebrow="What we offer"
            title={
              <>
                Services designed to keep things <Accent>easy</Accent>.
              </>
            }
            desc="Tax preparation, bookkeeping, and business setup—built to support individuals and small businesses nationwide."
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Service
                title="Personal Tax Preparation"
                desc="We simplify the tax process by preparing and filing your personal returns accurately while maximizing eligible deductions and credits."
              />
              <Service
                title="Business Tax Preparation"
                desc="We help businesses stay compliant while strategically managing tax liabilities to support long‑term growth."
              />
              <Service
                title="Bookkeeping"
                desc="Reliable bookkeeping that keeps records organized, accurate, and ready for smarter decision‑making."
              />
              <Service
                title="LLC Formation"
                desc="Guidance through the LLC formation process so your business is properly structured and set up for success."
              />
              <Service
                title="EIN Registration"
                desc="We handle the IRS process to secure your EIN—your business’s federal tax ID and legal foundation to operate."
              />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Feature
                icon={<FileI className="h-5 w-5" />}
                title="Clear checklist"
                desc="We provide a detailed checklist so you know exactly what to bring and what to upload."
              />
              <Feature
                icon={<LockI className="h-5 w-5" />}
                title="Professional support"
                desc="Personal guidance that helps you catch deductions you might miss and stay compliant."
              />
              <Feature
                icon={<TrendI className="h-5 w-5" />}
                title="Outcome-focused"
                desc="A process built around accurate filing, fewer headaches, and stronger financial outcomes."
              />
            </div>
          </Section>

          {/* Process */}
          <Section
            id="process"
            eyebrow="How it works"
            title={
              <>
                Simple steps. <Accent>Maximum</Accent> clarity.
              </>
            }
            desc="A streamlined flow that keeps paperwork organized and timelines clear."
          >
            <div className="grid gap-4 lg:grid-cols-4">
              {[
                { n: "01", t: "Intake", d: "Start with the client intake form and tell us what you need." },
                { n: "02", t: "Documents", d: "Bring or upload income documents, ID, and prior‑year returns." },
                { n: "03", t: "Prepare", d: "We prepare your return and look for deductions and credits." },
                { n: "04", t: "File", d: "We file accurately and on time so you can move forward with confidence." },
              ].map((s) => (
                <Card key={s.n} className="rounded-2xl border-amber-200/10 bg-zinc-950/30">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs tracking-[0.2em] text-amber-200/80">{s.n}</div>
                      <div className="h-8 w-8 rounded-2xl bg-amber-400/10 border border-amber-300/10" />
                    </div>
                    <div className="mt-4 text-base font-medium text-zinc-50">{s.t}</div>
                    <div className="mt-2 text-sm text-zinc-300/90 leading-relaxed">{s.d}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-amber-200/10 bg-black/35 p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-zinc-50">Tax services made easy</div>
                  <div className="mt-1 text-xs text-zinc-400">Clear steps, clear timelines, and quick responses.</div>
                </div>
                <Button>
                  File Now <ArrowI className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Section>

          {/* FAQ */}
          <Section
            id="faq"
            eyebrow="FAQ"
            title={
              <>
                Answers—without the <Accent>noise</Accent>.
              </>
            }
            desc="Short, direct guidance drawn from your current FAQ content."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  q: "What documents do I need for tax preparation?",
                  a: "Income documents (W‑2s/1099s), identification, prior‑year tax returns, and records of deductions or credits. We provide a detailed checklist.",
                },
                {
                  q: "How long will it take to receive my refund?",
                  a: "The IRS issues most refunds within ~21 days of acceptance when filing electronically with direct deposit. Paper returns can take longer.",
                },
                {
                  q: "How long does the tax preparation process take?",
                  a: "Most individual returns can be completed within a few hours once all documents are received. Business/complex filings may take longer with a clear timeline upfront.",
                },
                {
                  q: "Can you help set up my new business legally?",
                  a: "Yes—New Legacy assists with LLC formation and EIN registration to help you start on the right track.",
                },
              ].map((item) => (
                <Card key={item.q} className="rounded-2xl border-amber-200/10 bg-zinc-950/30">
                  <CardContent className="p-5">
                    <div className="text-sm font-medium text-zinc-50">{item.q}</div>
                    <div className="mt-2 text-sm text-zinc-300/90 leading-relaxed">{item.a}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* CTA / Footer */}
          <section className="relative py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="rounded-[28px] border border-amber-200/10 bg-zinc-950/35 overflow-hidden">
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-semibold text-zinc-50">
                        Ready to <Accent>maximize your refund</Accent>?
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-zinc-300/90 max-w-xl">
                        File virtually or in person. We’ll guide you through every step with clarity, professionalism, and quick response.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      <Button>Start Client Intake</Button>
                      <Button variant="outline">Call 832‑718‑3887</Button>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-amber-200/10 bg-black/35 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-50">
                        <PinI className="h-4 w-4" />
                        Location
                      </div>
                      <p className="mt-2 text-sm text-zinc-300/90">Houston, TX (Virtual nationwide)</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200/10 bg-black/35 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-50">
                        <PhoneI className="h-4 w-4" />
                        Call
                      </div>
                      <p className="mt-2 text-sm text-zinc-300/90">832‑718‑3887</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200/10 bg-black/35 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-50">
                        <MailI className="h-4 w-4" />
                        Email
                      </div>
                      <p className="mt-2 text-sm text-zinc-300/90">oscarcortes@newlegacyfinancial.net</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-amber-200/10 bg-black/40 px-8 py-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-xs text-zinc-500">© {new Date().getFullYear()} New Legacy Tax Services. All rights reserved.</div>
                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                      <a href="#" className="hover:text-zinc-200">Privacy</a>
                      <a href="#" className="hover:text-zinc-200">Terms</a>
                      <a href="#" className="hover:text-zinc-200">FAQ/Blog</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[11px] text-zinc-600 leading-relaxed">
                Canvas preview only: logo uses a placeholder URL. Your real Next.js project should use /public/newlegacygold.svg.
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
