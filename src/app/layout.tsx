import type { Metadata, Viewport } from "next";
import { Sora, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sora", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-montserrat", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decorar Móveis · Estratégia 90 Dias | Caio Marketeiro Neuromarketing",
  description:
    "Plano estratégico de neuromarketing, posicionamento e crescimento comercial da Decorar Móveis — novembro de 2026 a fevereiro de 2027.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#05192C" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
