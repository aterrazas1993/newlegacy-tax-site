"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Lock,
  FileText,
  TrendingUp,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";


const Accent = ({ children }: { children: React.ReactNode }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200">
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
  title?: React.ReactNode;
  desc?: string;
  children?: React.ReactNode;
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50">
            {title}
          </h2>
        )}
        {desc && (
          <p className="mt-3 text-sm sm:text-base text-zinc-300/90 leading-relaxed">
            {desc}
          </p>
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
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) => (
  <Card className="bg-zinc-950/40 border-amber-200/10 rounded-2xl shadow-[0_0_0_1px_rgba(255,215,100,0.06)]">
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
          <Icon className="h-5 w-5 text-amber-200" />
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
      <Button
        variant="outline"
        className="mt-4 rounded-2xl border-amber-200/20 bg-zinc-950/30 text-zinc-100 hover:bg-zinc-900/40"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

export default function NewLegacyTaxServicesPrototype() {
  return (
    <div id="top" className="min-h-screen bg-black text-zinc-100">
      <div className="relative">
        <Glow />
        <Grid />

        {/* Top bar */}
        <div className="relative z-10 border-b border-amber-200/10 bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-zinc-300/90">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-200" />
                <span>832-718-3887</span>
              </div>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <div className="hidden sm:flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-amber-200" />
                <span>oscarcortes@newlegacyfinancial.net</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-amber-300/10 text-amber-200 border-amber-200/20 rounded-full">
                We serve all 50 states
              </Badge>
              <Badge className="bg-zinc-950/40 text-zinc-200 border-amber-200/10 rounded-full hidden sm:inline-flex">
                File virtually or in person
              </Badge>
            </div>
          </div>
        </div>

        {/* Nav */}
        <header className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex items-center justify-between">
            <motion.a
              href="#top"
              aria-label="New Legacy Tax Services"
              className="group flex items-center gap-3 select-none transition-transform duration-300 hover:-translate-y-[1px]"
              // Framer Motion props are ignored by fallback elements.
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -1 }}
            >
              <div className="relative flex items-center">
                {/* Luxury glow */}
                <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-amber-300/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Subtle foil sheen */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_36px_rgba(255,215,100,0.18)]" />
                <Image
                  src="/newlegacygold.svg"
                  alt="New Legacy Tax Services Logo"
                  width={220}
                  height={56}
                  className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_8px_28px_rgba(255,215,100,0.15)] transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>

              {/* Corporate-clean wordmark (kept for clarity/SEO) */}
              <div className="leading-tight hidden sm:block">
                <div className="text-sm font-semibold tracking-[0.08em] uppercase text-zinc-50">
                  New Legacy
                </div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-amber-200/80">
                  Tax Services
                </div>
              </div>
            </motion.a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300/90">
              <a
                className="relative hover:text-zinc-50 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-amber-200/70 after:transition-all after:duration-300 hover:after:w-full"
                href="#services"
              >
                Services
              </a>
              <a
                className="relative hover:text-zinc-50 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-amber-200/70 after:transition-all after:duration-300 hover:after:w-full"
                href="#why"
              >
                Why Us
              </a>
              <a
                className="relative hover:text-zinc-50 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-amber-200/70 after:transition-all after:duration-300 hover:after:w-full"
                href="#process"
              >
                Process
              </a>
              <a
                className="relative hover:text-zinc-50 transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-amber-200/70 after:transition-all after:duration-300 hover:after:w-full"
                href="#faq"
              >
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="hidden sm:inline-flex rounded-2xl border-amber-200/20 bg-zinc-950/30 text-zinc-100 hover:bg-zinc-900/40"
              >
                Client Intake
              </Button>
              <Button className="rounded-2xl bg-amber-300 text-black hover:bg-amber-200">
                File Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-12 sm:pt-16">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-amber-300/10 text-amber-200 border-amber-200/20">
                    Maximize your refund
                  </Badge>
                  <Badge className="rounded-full bg-zinc-950/40 text-zinc-200 border-amber-200/10">
                    Personal + business
                  </Badge>
                  <Badge className="rounded-full bg-zinc-950/40 text-zinc-200 border-amber-200/10">
                    Bookkeeping + formation
                  </Badge>
                </div>

                <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-[1.05] text-zinc-50">
                  Build a <Accent>stronger financial future</Accent>—starting this tax season.
                </h1>

                <p className="mt-5 text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-xl">
                  Our goal is to provide accurate, affordable, and stress‑free tax preparation for individuals and small businesses—
                  ensuring compliance while maximizing your financial outcomes and peace of mind.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button className="rounded-2xl bg-amber-300 text-black hover:bg-amber-200 h-11">
                    Start Client Intake <Lock className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-2xl border-amber-200/20 bg-zinc-950/30 text-zinc-100 hover:bg-zinc-900/40 h-11"
                  >
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
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
                      <BadgeCheck className="h-4 w-4 text-amber-200" />
                    </div>
                    <div className="text-sm text-zinc-300/90 leading-relaxed">
                      <span className="text-zinc-50 font-medium">Refund outcomes:</span>{" "}
                      On average, clients see a <span className="text-amber-200">10% increase</span> in refunds compared to competitors.
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
              >
                <Card className="rounded-3xl border-amber-200/10 bg-zinc-950/35 overflow-hidden">
                  <div className="p-5 border-b border-amber-200/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-200" />
                      <div className="text-sm font-medium text-zinc-50">Client Intake</div>
                    </div>
                    <Badge className="rounded-full bg-amber-300/10 text-amber-200 border-amber-200/20">
                      Fast + organized
                    </Badge>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <label className="text-xs text-zinc-400">Full name</label>
                      <Input
                        placeholder="Jordan Lee"
                        className="mt-1 rounded-2xl bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400">Email</label>
                      <Input
                        placeholder="jordan@company.com"
                        className="mt-1 rounded-2xl bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-zinc-400">Service</label>
                        <Input
                          placeholder="Personal tax"
                          className="mt-1 rounded-2xl bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-zinc-400">Preferred</label>
                        <Input
                          placeholder="Virtual"
                          className="mt-1 rounded-2xl bg-black/40 border-amber-200/10 text-zinc-100 placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <Button className="flex-1 rounded-2xl bg-amber-300 text-black hover:bg-amber-200 h-11">
                        Submit Intake
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-2xl border-amber-200/20 bg-zinc-950/30 text-zinc-100 hover:bg-zinc-900/40 h-11"
                      >
                        Call Us
                      </Button>
                    </div>

                    <div className="mt-4 rounded-2xl border border-amber-200/10 bg-black/35 p-4">
                      <div className="flex items-start gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                          <FileText className="h-4 w-4 text-amber-200" />
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
              </motion.div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="relative" id="why">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-6">
              <div className="rounded-3xl border border-amber-200/10 bg-zinc-950/25 backdrop-blur p-5">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                      <ShieldCheck className="h-5 w-5 text-amber-200" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-50">Expertise you can trust</div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        Years of experience with personal and business tax needs.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                      <TrendingUp className="h-5 w-5 text-amber-200" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-50">Personalized service</div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        Tailored strategies—no cookie‑cutter solutions.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                      <Lock className="h-5 w-5 text-amber-200" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-50">Commitment to compliance</div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        We stay current so your filings stay confident.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-400/10 border border-amber-300/10">
                      <CalendarCheck className="h-5 w-5 text-amber-200" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-50">Quick response</div>
                      <div className="text-xs text-zinc-400 leading-relaxed">
                        Timely answers when you have crucial questions.
                      </div>
                    </div>
                  </div>
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
                icon={FileText}
                title="Clear checklist"
                desc="We provide a detailed checklist so you know exactly what to bring and what to upload."
              />
              <Feature
                icon={Lock}
                title="Professional support"
                desc="Personal guidance that helps you catch deductions you might miss and stay compliant."
              />
              <Feature
                icon={TrendingUp}
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
                {
                  n: "01",
                  t: "Intake",
                  d: "Start with the client intake form and tell us what you need.",
                },
                {
                  n: "02",
                  t: "Documents",
                  d: "Bring or upload income documents, ID, and prior‑year returns.",
                },
                {
                  n: "03",
                  t: "Prepare",
                  d: "We prepare your return and look for deductions and credits.",
                },
                {
                  n: "04",
                  t: "File",
                  d: "We file accurately and on time so you can move forward with confidence.",
                },
              ].map((s) => (
                <Card
                  key={s.n}
                  className="rounded-2xl border-amber-200/10 bg-zinc-950/30"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs tracking-[0.2em] text-amber-200/80">
                        {s.n}
                      </div>
                      <div className="h-8 w-8 rounded-2xl bg-amber-400/10 border border-amber-300/10" />
                    </div>
                    <div className="mt-4 text-base font-medium text-zinc-50">
                      {s.t}
                    </div>
                    <div className="mt-2 text-sm text-zinc-300/90 leading-relaxed">
                      {s.d}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-amber-200/10 bg-black/35 p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-zinc-50">
                    Tax services made easy
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">
                    Clear steps, clear timelines, and quick responses.
                  </div>
                </div>
                <Button className="rounded-2xl bg-amber-300 text-black hover:bg-amber-200 h-11">
                  File Now <ArrowRight className="ml-2 h-4 w-4" />
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
                <Card
                  key={item.q}
                  className="rounded-2xl border-amber-200/10 bg-zinc-950/30"
                >
                  <CardContent className="p-5">
                    <div className="text-sm font-medium text-zinc-50">{item.q}</div>
                    <div className="mt-2 text-sm text-zinc-300/90 leading-relaxed">
                      {item.a}
                    </div>
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
                      <Button className="rounded-2xl bg-amber-300 text-black hover:bg-amber-200 h-11">
                        Start Client Intake
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-2xl border-amber-200/20 bg-zinc-950/30 text-zinc-100 hover:bg-zinc-900/40 h-11"
                      >
                        Call 832‑718‑3887
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-amber-200/10 bg-black/35 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-50">
                        <MapPin className="h-4 w-4 text-amber-200" />
                        Location
                      </div>
                      <p className="mt-2 text-sm text-zinc-300/90">
                        Houston, TX (Virtual nationwide)
                      </p>
                    </div>
                    <div className="rounded-2xl border border-amber-200/10 bg-black/35 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-50">
                        <Phone className="h-4 w-4 text-amber-200" />
                        Call
                      </div>
                      <p className="mt-2 text-sm text-zinc-300/90">832‑718‑3887</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200/10 bg-black/35 p-5">
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-50">
                        <Mail className="h-4 w-4 text-amber-200" />
                        Email
                      </div>
                      <p className="mt-2 text-sm text-zinc-300/90">
                        oscarcortes@newlegacyfinancial.net
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-amber-200/10 bg-black/40 px-8 py-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-xs text-zinc-500">
                      © {new Date().getFullYear()} New Legacy Tax Services. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                      <a href="#" className="hover:text-zinc-200">Privacy</a>
                      <a href="#" className="hover:text-zinc-200">Terms</a>
                      <a href="#" className="hover:text-zinc-200">FAQ/Blog</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-[11px] text-zinc-600 leading-relaxed">
                Note: This is a design prototype using content pulled from NewLegacyTaxServices.com. Replace links/buttons with your live URLs (intake form, contact page, and any portal).
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
