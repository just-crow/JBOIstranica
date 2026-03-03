import type { Metadata } from "next";
import { Space_Grotesk, Silkscreen } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const pixelFont = Silkscreen({ subsets: ["latin"], weight: "400", variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "JBOI 2026 - Junior Balkan Olympiad in Informatics",
  description: "Official website for the 2026 Junior Balkan Olympiad in Informatics in Sarajevo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${pixelFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
