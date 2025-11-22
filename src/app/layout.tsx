import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import ResourceHints from "@/components/ResourceHints";

import "./globals.css";

const sourceSans3 = Source_Sans_3({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

const merriweather = Merriweather({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lesechos.fr"),
  title: {
    default: "Newsletters - Les Echos",
    template: "%s | Les Echos",
  },
  description:
    "Dans cette page, vous retrouvez l'ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d'intérêt et gérer plus facilement l'inscription à vos newsletters.",
  keywords: [
    "newsletters",
    "Les Echos",
  ],
  authors: [{ name: "Les Echos" }],
  creator: "Les Echos",
  publisher: "Les Echos",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/newsletters",
    siteName: "Les Echos",
    title: "Newsletters - Les Echos",
    description:
      "Découvrez toutes nos newsletters selon vos centres d'intérêt et gérez plus facilement l'inscription à vos newsletters.",
  },
  twitter: {
    card: "summary",
    title: "Newsletters - Les Echos",
    description:
      "Découvrez toutes nos newsletters selon vos centres d'intérêt et gérez plus facilement l'inscription à vos newsletters.",
  },
  alternates: {
    canonical: "/newsletters",
  },
  category: "news",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${sourceSans3.variable} ${merriweather.variable}`}
    >
      <body className={sourceSans3.className}>
        <ResourceHints />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
