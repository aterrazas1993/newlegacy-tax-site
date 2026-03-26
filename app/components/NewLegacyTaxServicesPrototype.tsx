"use client";

import {
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

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
  variant = "solid",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
  children: ReactNode;
}) {
  const base =
    "group relative isolate inline-flex h-11 items-center justify-center whitespace-nowrap rounded-2xl px-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]";
  const solid = "nlt-gold-btn";
  const outline =
    "border border-[rgba(212,175,55,0.45)] bg-zinc-950/30 text-zinc-100 hover:bg-zinc-900/40";

  return (
    <button className={cx(base, variant === "outline" ? outline : solid, className)} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span aria-hidden className="nlt-btn-shine" />
    </button>
  );
}

function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs",
        className,
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
        "h-11 w-full rounded-2xl border px-4 text-sm outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.25)]",
        className,
      )}
      {...props}
    />
  );
}

function Icon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "nlt-icon relative z-10 inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#F2D36B] drop-shadow-[0_0_10px_rgba(212,175,55,0.22)]",
        className,
      )}
      aria-hidden
    >
      {children}
    </span>
  );
}

const PhoneI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
    </svg>
  </Icon>
);

const MailI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  </Icon>
);

const PinI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s7-4.35 7-11a7 7 0 0 0-14 0c0 6.65 7 11 7 11z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  </Icon>
);

const ArrowI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  </Icon>
);

const SparkleI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l1.2 4.3L18 8l-4.8 1.7L12 14l-1.2-4.3L6 8l4.8-1.7L12 2z" />
      <path d="M5 12l.7 2.4L8 15l-2.3.6L5 18l-.7-2.4L2 15l2.3-.6L5 12z" />
    </svg>
  </Icon>
);

const LockI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  </Icon>
);

const FileI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
    </svg>
  </Icon>
);

const ShieldI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  </Icon>
);

const TrendI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  </Icon>
);

const CalI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-5" />
    </svg>
  </Icon>
);

const BadgeCheckI = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.5 2.5L18 5l1 3 3 1-1 3 1 3-3 1-1 3-3.5.5L12 22l-2.5-2.5L6 19l-1-3-3-1 1-3-1-3 3-1 1-3 3.5-.5L12 2z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  </Icon>
);

const Accent = ({ children }: { children: ReactNode }) => (
  <span className="nlt-gold-text">{children}</span>
);

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(0,0,0,0) 70%)" }}
      />
      <div
        className="absolute -bottom-52 right-10 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(184,134,11,0.20) 0%, rgba(0,0,0,0) 70%)" }}
      />
      <div
        className="absolute left-10 top-24 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,243,176,0.12) 0%, rgba(0,0,0,0) 72%)" }}
      />
    </div>
  );
}

function Grid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.12)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.18),transparent_55%)]" />
    </div>
  );
}

function Section({
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
}) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="mb-3 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-amber-300/70" />
              <p className="text-xs uppercase tracking-[0.2em] text-[rgba(242,211,107,0.85)]">
                {eyebrow}
              </p>
            </div>
          ) : null}
          {title ? <h2 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">{title}</h2> : null}
          {desc ? <p className="mt-3 text-sm leading-relaxed text-zinc-300/90 sm:text-base">{desc}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-amber-200/10 bg-zinc-950/30 p-5">
      <div className="text-2xl font-semibold text-zinc-50">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-zinc-300/80">{label}</div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="rounded-2xl border-amber-200/10 bg-zinc-950/40 shadow-[0_0_0_1px_rgba(255,215,100,0.06)]">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-amber-300/10 bg-amber-400/10">
            {icon}
          </div>
          <CardTitle className="text-base text-zinc-50">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed text-zinc-300/90">{desc}</p>
      </CardContent>
    </Card>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="overflow-hidden rounded-2xl border-amber-200/10 bg-zinc-950/35">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-zinc-50">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-zinc-300/90">{desc}</p>
        <Button variant="outline" className="mt-4">
          Learn more <ArrowI className="h-4 w-4 text-current drop-shadow-none" />
        </Button>
      </CardContent>
    </Card>
  );
}

export default function NewLegacyTaxServicesPrototype() {
  const [runIntro, setRunIntro] = useState(false);

  useEffect(() => {
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
      <style>{`
        @keyframes nlt-fade-down { from { opacity: 0; transform: translate3d(0,-6px,0);} to { opacity: 1; transform: translate3d(0,0,0);} }
        @keyframes nlt-fade-up { from { opacity: 0; transform: translate3d(0,14px,0);} to { opacity: 1; transform: translate3d(0,0,0);} }
        @keyframes nlt-fade-up-2 { from { opacity: 0; transform: translate3d(0,16px,0);} to { opacity: 1; transform: translate3d(0,0,0);} }
        .nlt-anim-nav { animation: nlt-fade-down .5s ease-out both; }
        .nlt-anim-hero-left { animation: nlt-fade-up .6s ease-out both; }
        .nlt-anim-hero-right { animation: nlt-fade-up-2 .7s ease-out .08s both; }

        :root {
          --g-deep: #5a420f;
          --g-anti: #b8860b;
          --g-core: #d4af37;
          --g-hi: #f2d36b;
          --g-spec: #fff3b0;
        }

        @keyframes nlt-gold-text { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        .nlt-gold-text {
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
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 18px rgba(212,175,55,.18);
          animation: nlt-gold-text 3.9s linear infinite;
        }

        @keyframes nlt-shine {
          0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          10% { opacity: .65; }
          26% { opacity: 0; }
          100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
        }
        .nlt-gold-btn {
          position: relative;
          overflow: hidden;
          color: #060606;
          background-image: linear-gradient(90deg, var(--g-deep) 0%, var(--g-core) 26%, var(--g-spec) 50%, var(--g-core) 74%, var(--g-deep) 100%);
          box-shadow: 0 12px 34px rgba(0,0,0,.58), 0 0 0 1px rgba(212,175,55,.18) inset;
          filter: saturate(1.05);
          transition: transform .22s ease, filter .22s ease;
        }
        .nlt-gold-btn:hover { transform: translateY(-1px); filter: saturate(1.12) brightness(1.02); }
        .nlt-gold-btn:active { transform: translateY(0) scale(.99); }

        .nlt-btn-shine {
          position: absolute;
          inset: -40% auto -40% -60%;
          width: 52%;
          background: linear-gradient(90deg, transparent 0%, rgba(255,243,176,.12) 35%, rgba(255,243,176,.75) 50%, rgba(255,243,176,.12) 65%, transparent 100%);
          filter: blur(1px);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-140%) skewX(-18deg);
          z-index: 0;
        }
        .nlt-gold-btn:hover .nlt-btn-shine { opacity: 1; animation: nlt-shine 1.55s ease-in-out; }

        .nlt-gold-badge {
          background: radial-gradient(circle at 28% 18%, rgba(255,243,176,.18), transparent 55%), rgba(212,175,55,.10);
          border-color: rgba(212,175,55,.35);
          color: var(--g-hi);
        }

        .nlt-icon { position: relative; z-index: 1; }
        .nlt-icon svg { width: 100%; height: 100%; display: block; }
      `}</style>

      <div className="relative">
        <Glow />
        <Grid />

        <div className="relative z-10 border-b border-amber-200/10 bg-black/40 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
            <div className="flex items-center gap-3 text-xs text-zinc-300/90">
              <div className="flex items-center gap-2">
                <PhoneI className="h-3.5 w-3.5" />
                <span>832-718-3887</span>
              </div>
              <span className="hidden text-zinc-600 sm:inline">|</span>
              <div className="hidden items-center gap-2 sm:flex">
                <MailI className="h-3.5 w-3.5" />
                <span>oscarcortes@newlegacyfinancial.net</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="nlt-gold-badge">We serve all 50 states</Badge>
              <Badge className="hidden border-amber-200/10 bg-zinc-950/40 text-zinc-200 sm:inline-flex">
                File virtually or in person
              </Badge>
            </div>
          </div>
        </div>

        <header className="relative z-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
            <a
              href="#top"
              aria-label="New Legacy Tax Services"
              className={cx(
                runIntro && "nlt-anim-nav",
                "group flex select-none items-center gap-3 transition-transform duration-300 hover:-translate-y-[1px]",
              )}
            >
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-amber-300/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_36px_rgba(255,215,100,0.18)]" />
                <img
                  src="/newlegacygold.svg"
                  alt="New Legacy Tax Services Logo"
                  style={{ height: 48, width: "auto" }}
                  className="drop-shadow-[0_8px_28px_rgba(255,215,100,0.15)] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="hidden leading-tight sm:block">
                <div className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-50">
                  New Legacy
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[rgba(242,211,107,0.85)]">
                  Tax Services
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300/90 md:flex">
              {[
                ["Services", "#services"],
                ["Why Us", "#why"],
                ["Process", "#process"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  className="relative transition hover:text-zinc-50 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgba(212,175,55,0.78)] after:transition-all after:duration-300 hover:after:w-full"
                  href={href}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden sm:inline-flex">
                Client Intake
              </Button>
              <Button>
                File Now <ArrowI className="h-4 w-4 text-current drop-shadow-none" />
              </Button>
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pt-16">
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className={cx(runIntro && "nlt-anim-hero-left", "lg:col-span-7")}>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="nlt-gold-badge">Maximize your refund</Badge>
                  <Badge className="border-amber-200/10 bg-zinc-950/40 text-zinc-200">
                    Personal + business
                  </Badge>
                  <Badge className="border-amber-200/10 bg-zinc-950/40 text-zinc-200">
                    Bookkeeping + formation
                  </Badge>
                </div>

                <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-zinc-50 sm:text-5xl">
                  Build a <Accent>stronger financial future</Accent>—starting this tax season.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300/90 sm:text-lg">
                  Our goal is to provide accurate, affordable, and stress-free tax preparation for
                  individuals and small businesses—ensuring compliance while maximizing your
                  financial outcomes and peace of mind.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button>
                    Start Client Intake{" "}
                    <LockI className="h-4 w-4 text-current drop-shadow-none" />
                  </Button>
                  <Button variant="outline">
                    Explore Services{" "}
                    <ArrowI className="h-4 w-4 text-current drop-shadow-none" />
                  </Button>
                </div>

                <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                  <Stat label="Customers served" value="1,000+" />
                  <Stat label="Dollars returned" value="$3.4M" />
                  <Stat label="States served" value="50" />
                </div>

                <div className="mt-4 max-w-xl rounded-2xl border border-amber-200/10 bg-black/35 p-4">
                  <div className="flex items-start gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-2xl border border-amber-300/10 bg-amber-400/10">
                      <BadgeCheckI className="h-4 w-4" />
                    </div>
                    <div className="text-sm leading-relaxed text-zinc-300/90">
                      <span className="font-medium text-zinc-50">Refund outcomes:</span> On
                      average, clients see a{" "}
                      <span className="text-[#F2D36B] drop-shadow-[0_0_10px_rgba(212,175,55,0.22)]">
                        10% increase
                      </span>{" "}
                      in refunds compared to competitors.
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx(runIntro && "nlt-anim-hero-right", "lg:col-span-5")}>
                <Card className="overflow-hidden rounded-3xl border-amber-200/10 bg-zinc-950/35">
                  <div className="flex items-center justify-between border-b border-amber-200/10 p-5">
                    <div className="flex items-center gap-2">
                      <SparkleI className="h-4 w-4" />
                      <div className="text-sm font-medium text-zinc-50">Client Intake</div>
                    </div>
                    <Badge className="nlt-gold-badge">Secure handoff</Badge>
                  </div>

                  <div className="space-y-3 p-5">
                    <div>
                      <label className="text-xs text-zinc-400">Full name</label>
                      <Input
                        placeholder="Jordan Lee"
                        className="mt-1 border-amber-200/10 bg-black/40 text-zinc-100 placeholder:text-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400">Email</label>
                      <Input
                        placeholder="jordan@company.com"
                        className="mt-1 border-amber-200/10 bg-black/40 text-zinc-100 placeholder:text-zinc-600"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-zinc-400">Service</label>
                        <Input
                          placeholder="Personal tax"
                          className="mt-1 border-amber-200/10 bg-black/40 text-zinc-100 placeholder:text-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-zinc-400">Phone</label>
                        <Input
                          placeholder="(832) 555-1212"
                          className="mt-1 border-amber-200/10 bg-black/40 text-zinc-100 placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://form.jotform.com/oscarcortes/NLF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full">
                          Continue Secure Intake{" "}
                          <ArrowI className="h-4 w-4 text-current drop-shadow-none" />
                        </Button>
                      </a>
                    </div>

                    <div className="rounded-2xl border border-amber-200/10 bg-black/25 p-4">
                      <div className="flex items-start gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-2xl border border-amber-300/10 bg-amber-400/10">
                          <LockI className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-50">
                            Start here, finish securely
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                            Fill out a few basics here, then continue your full intake on our
                            protected Jotform.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-amber-200/10 bg-black/35 p-4">
                      <div className="flex items-start gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-2xl border border-amber-300/10 bg-amber-400/10">
                          <FileI className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-zinc-50">What to bring</div>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                            Income docs (W-2/1099), ID, prior-year returns, and records for
                            deductions and credits.
                          </p>
                          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                            {["W-2/1099", "ID", "Prior-year", "Deductions"].map((item) => (
                              <div
                                key={item}
                                className="rounded-xl border border-amber-200/10 bg-zinc-950/30 px-3 py-2 text-zinc-300"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-500">
                      You’ll continue on our secure intake form to complete the full process.
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="relative" id="why">
            <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
              <div className="rounded-3xl border border-amber-200/10 bg-zinc-950/25 p-5 backdrop-blur">
                <div className="grid gap-4 md:grid-cols-4">
                  {[
                    {
                      icon: <ShieldI className="h-5 w-5" />,
                      title: "Expertise you can trust",
                      desc: "Years of experience with personal and business tax needs.",
                    },
                    {
                      icon: <TrendI className="h-5 w-5" />,
                      title: "Personalized service",
                      desc: "Tailored strategies—no cookie-cutter solutions.",
                    },
                    {
                      icon: <LockI className="h-5 w-5" />,
                      title: "Commitment to compliance",
                      desc: "We stay current so your filings stay confident.",
                    },
                    {
                      icon: <CalI className="h-5 w-5" />,
                      title: "Quick response",
                      desc: "Timely answers when you have crucial questions.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-amber-300/10 bg-amber-400/10">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-50">{item.title}</div>
                        <div className="text-xs leading-relaxed text-zinc-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
                desc="We help businesses stay compliant while strategically managing tax liabilities to support long-term growth."
              />
              <Service
                title="Bookkeeping"
                desc="Reliable bookkeeping that keeps records organized, accurate, and ready for smarter decision-making."
              />
              <Service
                title="LLC Formation"
                desc="Guidance through the LLC formation process so your business is properly structured and set up for success."
              />
              <Service
                title="EIN Registration"
                desc="We handle the IRS process to secure your EIN—your business's federal tax ID and legal foundation to operate."
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
                { n: "02", t: "Documents", d: "Bring or upload income documents, ID, and prior-year returns." },
                { n: "03", t: "Prepare", d: "We prepare your return and look for deductions and credits." },
                { n: "04", t: "File", d: "We file accurately and on time so you can move forward with confidence." },
              ].map((step) => (
                <Card key={step.n} className="rounded-2xl border-amber-200/10 bg-zinc-950/30">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs tracking-[0.2em] text-[rgba(242,211,107,0.85)]">
                        {step.n}
                      </div>
                      <div className="h-8 w-8 rounded-2xl border border-amber-300/10 bg-amber-400/10" />
                    </div>
                    <div className="mt-4 text-base font-medium text-zinc-50">{step.t}</div>
                    <div className="mt-2 text-sm leading-relaxed text-zinc-300/90">{step.d}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-amber-200/10 bg-black/35 p-6">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="text-sm font-medium text-zinc-50">Tax services made easy</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    Clear steps, clear timelines, and quick responses.
                  </div>
                </div>
                <Button>
                  File Now <ArrowI className="h-4 w-4 text-current drop-shadow-none" />
                </Button>
              </div>
            </div>
          </Section>

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
                  a: "Income documents (W-2s/1099s), identification, prior-year tax returns, and records of deductions or credits. We provide a detailed checklist.",
                },
                {
                  q: "How long will it take to receive my refund?",
                  a: "The IRS issues most refunds within about 21 days of acceptance when filing electronically with direct deposit. Paper returns can take longer.",
                },
                {
                  q: "How long does the tax preparation process take?",
                  a: "Most individual returns can be completed within a few hours once all documents are received. Business or complex filings may take longer, with a clear timeline upfront.",
                },
                {
                  q: "Can you help set up my new business legally?",
                  a: "Yes—New Legacy assists with LLC formation and EIN registration to help you start on the right track.",
                },
              ].map((item) => (
                <Card key={item.q} className="rounded-2xl border-amber-200/10 bg-zinc-950/30">
                  <CardContent className="p-5">
                    <div className="text-sm font-medium text-zinc-50">{item.q}</div>
                    <div className="mt-2 text-sm leading-relaxed text-zinc-300/90">{item.a}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <section className="relative py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="overflow-hidden rounded-[28px] border border-amber-200/10 bg-zinc-950/35">
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                    <div>
                      <div className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
                        Ready to <Accent>maximize your refund</Accent>?
                      </div>
                      <p className="mt-2 max-w-xl text-sm text-zinc-300/90 sm:text-base">
                        File virtually or in person. We'll guide you through every step with
                        clarity, professionalism, and quick response.
                      </p>
                    </div>
                    <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                      <Button>Start Client Intake</Button>
                      <Button variant="outline">Call 832-718-3887</Button>
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
                      <p className="mt-2 text-sm text-zinc-300/90">832-718-3887</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200/10 bg-black/35 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-50">
                        <MailI className="h-4 w-4" />
                        Email
                      </div>
                      <p className="mt-2 text-sm text-zinc-300/90">
                        oscarcortes@newlegacyfinancial.net
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-amber-200/10 bg-black/40 px-8 py-6">
                  <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="text-xs text-zinc-500">
                      © {new Date().getFullYear()} New Legacy Tax Services. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                      <a href="#" className="hover:text-zinc-200">
                        Privacy
                      </a>
                      <a href="#" className="hover:text-zinc-200">
                        Terms
                      </a>
                      <a href="#" className="hover:text-zinc-200">
                        FAQ/Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}