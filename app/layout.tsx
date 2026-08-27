import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Malik Fahad Hayat - LUMS SDSB Student | Accounting & Finance (ACF)",
  description:
    "Malik Fahad Hayat (fahadhtiwana) - Business student at Suleman Dawood School of Business (SDSB), LUMS, majoring in Accounting & Finance (ACF). Self-taught web developer in Next.js & TypeScript with an intended Minor in Computer Science.",
  keywords: [
    "Malik Fahad Hayat",
    "fahadhtiwana",
    "Malik Fahad Hayat Tiwana",
    "LUMS",
    "SDSB LUMS",
    "Suleman Dawood School of Business",
    "Accounting and Finance LUMS",
    "ACF LUMS",
    "LUMS CS Minor",
    "Next.js Developer",
    "TypeScript Developer",
    "Pakistani developer",
    "Business Strategy",
    "Financial Analytics",
    "GitHub fahadhtiwana",
  ],
  authors: [{ name: "Malik Fahad Hayat", url: "https://github.com/fahadhtiwana" }],
  creator: "Malik Fahad Hayat",
  publisher: "Malik Fahad Hayat",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahadhtiwana.vercel.app",
    title: "Malik Fahad Hayat - LUMS SDSB Student | Accounting & Finance (ACF)",
    description:
      "Business student at SDSB, LUMS focusing on Accounting & Finance (ACF) and financial strategy, backed by self-taught web development in Next.js & TypeScript.",
    siteName: "Malik Fahad Hayat Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B612_20250811_111051_215.jpg-RfzRKYiyEiHpSFZOrG7CeUloynXVYB.jpeg",
        width: 1200,
        height: 630,
        alt: "Malik Fahad Hayat - LUMS SDSB Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malik Fahad Hayat - LUMS SDSB Student & Developer",
    description:
      "Accounting & Finance (ACF) Student at SDSB LUMS • Intended CS Minor • Self-Taught Web Dev in Next.js & TS.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B612_20250811_111051_215.jpg-RfzRKYiyEiHpSFZOrG7CeUloynXVYB.jpeg",
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://fahadhtiwana.vercel.app",
  },
  generator: "Next.js",
  applicationName: "Malik Fahad Hayat Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
}

import { FoxCursor } from "@/components/fox-cursor"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Malik Fahad Hayat",
              alternateName: ["fahadhtiwana", "Malik Fahad Hayat Tiwana"],
              description:
                "Business student at Suleman Dawood School of Business (SDSB), LUMS, majoring in Accounting & Finance (ACF) with self-taught web development skills in Next.js & TypeScript.",
              url: "https://fahadhtiwana.vercel.app",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B612_20250811_111051_215.jpg-RfzRKYiyEiHpSFZOrG7CeUloynXVYB.jpeg",
              sameAs: [
                "https://github.com/fahadhtiwana",
                "https://www.linkedin.com/in/malik-fahad-hayat/",
                "mailto:fahadhayattiwana@gmail.com",
              ],
              jobTitle: "ACF Student & Developer",
              worksFor: {
                "@type": "EducationalOrganization",
                name: "Suleman Dawood School of Business (SDSB), LUMS",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "Pakistan",
              },
              knowsAbout: [
                "Accounting & Finance",
                "Business Strategy",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Computer Science",
                "Financial Analytics",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "LUMS (Lahore University of Management Sciences)",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <FoxCursor />
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
