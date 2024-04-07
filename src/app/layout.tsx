import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { colors } from "../lib/color";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fusion Heberg",
  description: "Fusion Heberg est l'hébergeur parfait fusionnant bon prix et bonnes performances",
  openGraph: {
    images: [{
    url: "https://my.fusionheberg.com/images/1711226924.png",
  }]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background: colors.bg}} className={inter.className}>{children}</body>
    </html>
  );
}
