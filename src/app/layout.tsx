import { Merriweather, Source_Sans_3 } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${sourceSans3.variable} ${merriweather.variable}`}
    >
      <body className={sourceSans3.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
