import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const quoteUrl = "https://form.jotform.com/oscarcortes/LifeInsuranceQuote";
const contactUrl = "mailto:info@newlegacyfinancial.net?subject=Health%20insurance%20options";

export const metadata: Metadata = {
  title: "Life & Health Insurance | New Legacy Tax Services",
  description:
    "Explore life insurance and ask about health insurance options with New Legacy in Houston, Texas. Request a life insurance quote or contact our team to discuss coverage.",
  alternates: { canonical: "https://newlegacytaxservice.com/life-health-insurance" },
  openGraph: {
    title: "Life & Health Insurance | New Legacy Tax Services",
    description: "Protection for the people and plans that matter. Explore insurance options with New Legacy.",
    url: "https://newlegacytaxservice.com/life-health-insurance",
    siteName: "New Legacy Tax Services",
    type: "website",
  },
};

const gold = "bg-[linear-gradient(90deg,#5a420f_0%,#b8860b_18%,#d4af37_32%,#fff3b0_46%,#f2d36b_55%,#fff3b0_64%,#d4af37_78%,#b8860b_92%,#5a420f_100%)]";

function GoldText({ children }: { children: React.ReactNode }) {
  return <span className={`${gold} bg-clip-text text-transparent`}>{children}</span>;
}

function Action({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <a href={href} target={href.startsWith("https://form.") ? "_blank" : undefined} rel={href.startsWith("https://form.") ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af37] sm:w-auto ${secondary ? "border border-[#6b4b0d] bg-[#0d0d0d] text-[#f2d36b]" : `${gold} text-black`}`}>
      {children} <span aria-hidden className="ml-2">↗</span>
    </a>
  );
}

export default function LifeHealthInsurancePage() {
  return (
    <div className="min-h-screen bg-black text-[#fafafa]">
      <div className="border-b border-[#1a1608] bg-[#0a0a0a] px-5 py-2 text-center text-xs text-[#b9b9b9]">
        Houston, Texas <span className="mx-2 text-[#6b4b0d]">•</span> Questions? <a className="text-[#f2d36b] hover:underline" href="tel:8327183887">832-718-3887</a>
      </div>
      <header className="border-b border-[#1a1608] bg-[#080808]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:flex-row">
          <Link href="/" aria-label="New Legacy Tax Services home" className="flex items-center gap-3">
            <Image src="/newlegacygold.svg" alt="" width={68} height={56} className="h-11 w-auto sm:h-14" />
            <span className="text-xs font-semibold uppercase leading-snug tracking-[0.15em] sm:text-sm"><GoldText>New Legacy<br />Tax Services</GoldText></span>
          </Link>
          <nav aria-label="Main navigation" className="flex w-full flex-wrap items-center justify-center gap-2 border-t border-[#1a1608] pt-4 text-xs sm:gap-5 sm:text-sm lg:w-auto lg:border-0 lg:pt-0">
            <Link className="rounded-full px-2 py-2 text-[#c8c8c8] hover:text-white focus-visible:outline-2 focus-visible:outline-[#d4af37]" href="/">Home</Link>
            <Link className="rounded-full px-2 py-2 text-[#c8c8c8] hover:text-white focus-visible:outline-2 focus-visible:outline-[#d4af37]" href="/#services">Tax Services</Link>
            <span aria-current="page" className="rounded-full border border-[#6b4b0d] bg-[#0d0d0d] px-3 py-2 font-semibold text-[#f2d36b]">Life &amp; Health</span>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-[#1a1608] bg-[#060606] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]"><span className="h-px w-8 bg-[#6b4b0d]" /> Life & Health Insurance</div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">Protect what matters.<br /><GoldText>Plan for what’s next.</GoldText></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#bdbdc2] sm:text-lg">Your family, your health, and your financial future deserve thoughtful protection. Explore life insurance and ask our team about health insurance options that may fit your needs.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Action href={quoteUrl}>Request a Life Insurance Quote</Action><Action href={contactUrl} secondary>Ask About Health Insurance</Action></div>
            <p className="mt-5 text-xs text-[#88888c]">Requesting information does not obligate you to purchase coverage.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="coverage-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Coverage with purpose</p>
          <h2 id="coverage-heading" className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Two important ways to look after your future.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[#221a04] bg-[#0d0d0d] p-7 sm:p-9">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#d4af37]">01 / FAMILY PROTECTION</span>
              <h3 className="mt-5 text-2xl font-semibold">Life Insurance</h3>
              <p className="mt-4 leading-7 text-[#bdbdc2]">Life insurance can help provide financial support to your beneficiaries if you die. Depending on the policy, benefits may help with housing costs, everyday bills, debts, children’s needs, and final expenses.</p>
              <p className="mt-4 leading-7 text-[#bdbdc2]">Already covered through work? It may be useful to review how much coverage you have and what happens if your employment changes.</p>
              <div className="mt-7"><Action href={quoteUrl}>Get a Free Life Insurance Quote</Action></div>
            </article>
            <article className="rounded-2xl border border-[#221a04] bg-[#0d0d0d] p-7 sm:p-9">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#d4af37]">02 / EVERYDAY WELLBEING</span>
              <h3 className="mt-5 text-2xl font-semibold">Health Insurance</h3>
              <p className="mt-4 leading-7 text-[#bdbdc2]">Health coverage is personal. Your budget, preferred doctors, prescriptions, and household needs can all affect which option makes sense for you.</p>
              <p className="mt-4 leading-7 text-[#bdbdc2]">Tell us what you’re looking for. We can discuss available options and help you identify the next steps for a coverage review.</p>
              <div className="mt-7"><Action href={contactUrl} secondary>Ask About Health Coverage</Action></div>
            </article>
          </div>
        </section>

        <section className="border-y border-[#1a1608] bg-[#050505] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1fr_1.4fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">A clear next step</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Start with a conversation.</h2></div>
            <ol className="grid gap-6 text-[#c4c4c8] sm:grid-cols-3">
              <li><span className="text-sm text-[#d4af37]">01</span><h3 className="mt-3 font-semibold text-white">Reach out</h3><p className="mt-2 text-sm leading-6">Request a life quote or contact us about health coverage.</p></li>
              <li><span className="text-sm text-[#d4af37]">02</span><h3 className="mt-3 font-semibold text-white">Review needs</h3><p className="mt-2 text-sm leading-6">Share your priorities, household needs, and questions.</p></li>
              <li><span className="text-sm text-[#d4af37]">03</span><h3 className="mt-3 font-semibold text-white">Consider options</h3><p className="mt-2 text-sm leading-6">Review the details before deciding whether to apply.</p></li>
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">New Legacy</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">The next chapter starts with <GoldText>peace of mind.</GoldText></h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#bdbdc2]">Explore protection for your family and your health with a team ready to answer your questions.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Action href={quoteUrl}>Request a Life Quote</Action><Action href={contactUrl} secondary>Contact Us About Health</Action></div>
        </section>
      </main>

      <footer className="border-t border-[#1a1608] bg-[#030303] px-5 py-10 text-sm text-[#929296] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-7"><div><p className="font-semibold uppercase tracking-[0.1em] text-white">New Legacy Tax Services</p><p className="mt-2">Houston, TX</p></div><div className="flex flex-col gap-2"><a className="hover:text-[#f2d36b]" href="tel:8327183887">832-718-3887</a><a className="hover:text-[#f2d36b]" href="mailto:info@newlegacyfinancial.net">info@newlegacyfinancial.net</a><Link className="hover:text-[#f2d36b]" href="/">Return to tax services</Link></div></div>
        <p className="mx-auto mt-9 max-w-6xl border-t border-[#1a1608] pt-6 text-xs leading-6 text-[#78787d]">Insurance products, coverage, eligibility, availability, and premiums vary by policy, carrier, location, and individual circumstances. Information on this page is general and is not an offer or guarantee of coverage.</p>
      </footer>
    </div>
  );
}
