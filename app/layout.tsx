import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scan Your Signatures on Over 100 Networks | Signature.report",
  description:
    "Scan and remove malicious wallet signatures with Signature.report. Stay protected by revoking hidden phishing contracts before they drain your assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://beaconscan.com/favicon.ico"
          sizes="any"
        />

        <title>
          Scan Your Signatures on Over 100 Networks | Signature.report
        </title>
        <meta
          name="title"
          content="Scan Your Signatures on Over 100 Networks | Signature.report
"
        />
        <meta
          name="description"
          content="Scan and remove malicious wallet signatures with Signature.report. Stay protected by revoking hidden phishing contracts before they drain your assets. "
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://signature-checker.vercel.app/signature-approval-checker/allchain"
        />
        <meta
          property="og:title"
          content="Scan Your Signatures on Over 100 Networks | Signature.report"
        />
        <meta
          property="og:description"
          content="Scan and remove malicious wallet signatures with Signature.report. Stay protected by revoking hidden phishing contracts before they drain your assets. "
        />
        <meta
          property="og:image"
          content="https://revoke.cash/opengraph-image.jpg?8ab8d31eb2deec70"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://signature-checker.vercel.app/signature-approval-checker/allchain"
        />
        <meta
          property="twitter:title"
          content="Scan Your Signatures on Over 100 Networks | Signature.report"
        />
        <meta
          property="twitter:description"
          content="Scan and remove malicious wallet signatures with Signature.report. Stay protected by revoking hidden phishing contracts before they drain your assets. "
        />
        <meta
          property="twitter:image"
          content="https://revoke.cash/opengraph-image.jpg?8ab8d31eb2deec70"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
