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
  title: "Leoferson Torres — Full Stack Developer",
  description:
    "Portfolio de Leoferson Torres, Ingeniero en Computación y Desarrollador Full Stack especializado en React, Next.js y soluciones de IA.",
  authors: [{ name: "Leoferson Torres" }],
  openGraph: {
    title: "Leoferson Torres — Full Stack Developer",
    description:
      "Portfolio de desarrollador full stack con experiencia en travel, e-commerce y SaaS.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Leoferson Torres — Full Stack Developer",
    description:
      "Portfolio de desarrollador full stack con experiencia en travel, e-commerce y SaaS.",
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
