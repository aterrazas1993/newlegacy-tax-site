import type { Metadata } from "next";
import NewLegacyTaxServicesPrototype from "./components/NewLegacyTaxServicesPrototype";

export const metadata: Metadata = {
  title: "Houston Tax Services with Virtual Nationwide Support | New Legacy Tax Services",
  description:
    "Houston tax services for individuals and small businesses, with virtual nationwide support for tax preparation, bookkeeping, LLC formation, and EIN registration.",
  alternates: {
    canonical: "https://newlegacytaxservice.com/",
  },
  openGraph: {
    title: "Houston Tax Services with Virtual Nationwide Support | New Legacy Tax Services",
    description:
      "Houston tax services for individuals and small businesses, with virtual nationwide support for tax preparation, bookkeeping, LLC formation, and EIN registration.",
    url: "https://newlegacytaxservice.com/",
    siteName: "New Legacy Tax Services",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "New Legacy Tax Services",
  url: "https://newlegacytaxservice.com/",
  image: "https://newlegacytaxservice.com/icon.png",
  telephone: "+1-832-718-3887",
  email: "oscarcortes@newlegacyfinancial.net",
  areaServed: [
    {
      "@type": "City",
      name: "Houston",
    },
    {
      "@type": "State",
      name: "Texas",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  serviceType: [
    "Tax preparation",
    "Business tax preparation",
    "Bookkeeping",
    "LLC formation",
    "EIN registration",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <NewLegacyTaxServicesPrototype />
    </>
  );
}
