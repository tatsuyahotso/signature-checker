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
  title: "Signature Approvals Checker",
  description: "Securely check, sign, verify, and approve transactions with Signature.",
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

        <title>Signature Approvals Checker</title>
        <meta name="title" content="Signature Approvals Checker" />
        <meta
          name="description"
          content="Securely check, sign, verify, and approve transactions with Signature."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://signature-checker.vercel.app/signature-approval-checker/allchain"
        />
        <meta property="og:title" content="Signature Approvals Checker" />
        <meta
          property="og:description"
          content="Securely check, sign, verify, and approve transactions with Signature."
        />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://signature-checker.vercel.app/signature-approval-checker/allchain"
        />
        <meta property="twitter:title" content="Signature Approvals Checker" />
        <meta
          property="twitter:description"
          content="Securely check, sign, verify, and approve transactions with Signature."
        />
        <meta property="twitter:image" content="/thumbnail.png" />
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
