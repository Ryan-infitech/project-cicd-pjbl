import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Profil Pengajar",
  description: "Halaman perkenalan profesional pengajar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${lora.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
