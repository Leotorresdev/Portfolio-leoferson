import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leoferson Torres — Full Stack Software Engineer | React, Next.js & Node.js",
  description:
    "Ingeniero en Computación y Full Stack Developer especializado en React, Next.js (App Router), TypeScript, Tailwind CSS y Node.js. Portafolio de proyectos en producción para SaaS, TravelTech y E-Commerce (ES/EN).",
  authors: [{ name: "Leoferson Torres" }],
  keywords: [
    "Leoferson Torres",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Remote Developer",
    "Computer Engineer",
  ],
  openGraph: {
    title: "Leoferson Torres — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer con experiencia comprobable en plataformas SaaS, TravelTech y E-Commerce B2C/B2B.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leoferson Torres — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer con experiencia en SaaS, TravelTech y E-Commerce B2C/B2B.",
  },
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{
          fontFamily: "var(--font-display), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
