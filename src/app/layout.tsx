import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuttush Tech Hub - Fitness Wearable Reviews & Recommendations",
  description: "Discover the best fitness smartwatches and wearables with honest reviews and expert recommendations. Find the perfect device for your health and fitness goals.",
  keywords: "smartwatch reviews, fitness tracker reviews, wearable technology, health monitoring devices, smartwatch comparisons, fitness watch recommendations, alexa smartwatch, HD display smartwatch, bluetooth calling watch, 30 day battery smartwatch",
  authors: [{ name: "Kuttush Tech Hub" }],
  creator: "Kuttush Tech Hub",
  publisher: "Kuttush Tech Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kuttush-tech-hub-three.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kuttush Tech Hub - Fitness Wearable Reviews & Recommendations",
    description: "Your trusted source for honest smartwatch and fitness wearable reviews and expert recommendations.",
    url: 'https://kuttush-tech-hub-three.vercel.app',
    siteName: 'Kuttush Tech Hub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kuttush Tech Hub - Fitness Wearable Reviews & Recommendations",
    description: "Your trusted source for honest smartwatch and fitness wearable reviews and expert recommendations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'v7Fu5UIXtiWSPe3xx1ucp6Dl5uGAzqcXDWSrQo3iVYE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DE40N8ND2F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DE40N8ND2F');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
