import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Malik Fahad Hayat - Computer Science Student & Developer Portfolio",
  description:
    "Malik Fahad Hayat (fahadhtiwana) - Grade 12 Computer Science student from Khushab, Pakistan. Passionate about Java programming, algorithms, problem-solving, and creating meaningful tech impact. View my projects and connect with me.",
  keywords: [
    "Malik Fahad Hayat",
    "fahadhtiwana",
    "Malik Fahad Hayat Tiwana",
    "Computer Science student Pakistan",
    "Java programmer",
    "algorithms",
    "problem solving",
    "Khushab Pakistan developer",
    "student developer",
    "programming portfolio",
    "GitHub fahadhtiwana",
    "Pakistani programmer",
    "SAT preparation",
    "tech student",
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
    title: "Malik Fahad Hayat - Computer Science Student & Developer Portfolio",
    description:
      "Grade 12 Computer Science student from Pakistan passionate about Java, algorithms, and tech impact. Connect with fahadhtiwana on GitHub.",
    siteName: "Malik Fahad Hayat Portfolio",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B612_20250811_111051_215.jpg-RfzRKYiyEiHpSFZOrG7CeUloynXVYB.jpeg",
        width: 1200,
        height: 630,
        alt: "Malik Fahad Hayat - Computer Science Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malik Fahad Hayat - Computer Science Student & Developer",
    description:
      "Grade 12 CS student from Pakistan passionate about Java, algorithms, and tech impact. GitHub: fahadhtiwana",
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
                "Grade 12 Computer Science student from Khushab, Pakistan, passionate about Java programming, algorithms, and problem-solving",
              url: "https://fahadhtiwana.vercel.app",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B612_20250811_111051_215.jpg-RfzRKYiyEiHpSFZOrG7CeUloynXVYB.jpeg",
              sameAs: [
                "https://github.com/fahadhtiwana",
                "https://www.linkedin.com/in/malik-fahad-hayat/",
                "mailto:fahadhayattiwana@gmail.com",
              ],
              jobTitle: "Computer Science Student",
              worksFor: {
                "@type": "EducationalOrganization",
                name: "Grade 12 Student",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Khushab",
                addressCountry: "Pakistan",
              },
              knowsAbout: [
                "Java Programming",
                "Algorithms",
                "Problem Solving",
                "Computer Science",
                "Software Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "High School Student",
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
      </body>
    </html>
  )
}
