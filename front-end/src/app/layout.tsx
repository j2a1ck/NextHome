import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
