import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const vazir = localFont({
  src: "./fonts/Vazirmatn.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Home",
  description: "find way to run from this country",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vazir.className}>
      <body>{children}</body>
    </html>
  );
}
