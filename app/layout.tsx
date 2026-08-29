import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./logo-fixes.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Legacy Tax Services",
  description: "Virtual tax preparation, bookkeeping, and business setup services.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const oldEmail = "oscarcortes@newlegacyfinancial.net";
                const newEmail = "info@newlegacyfinancial.net";

                const replaceEmail = () => {
                  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
                  const nodes = [];
                  while (walker.nextNode()) nodes.push(walker.currentNode);

                  nodes.forEach((node) => {
                    if (node.nodeValue && node.nodeValue.includes(oldEmail)) {
                      node.nodeValue = node.nodeValue.replaceAll(oldEmail, newEmail);
                    }
                  });

                  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
                    if (link.getAttribute('href')?.includes(oldEmail)) {
                      link.setAttribute('href', 'mailto:' + newEmail);
                    }
                  });
                };

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', replaceEmail);
                } else {
                  replaceEmail();
                }

                const observer = new MutationObserver(replaceEmail);
                observer.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
