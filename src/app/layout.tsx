import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google"; // Import standard fonts if not already there, or use existing
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SpotifyWidget from "@/components/SpotifyWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hendel Code | Chaos & Logic",
  description: "Portfolio of Hendel Santos - Frontend Creative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <SpotifyWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
