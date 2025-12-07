import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google"; // Import standard fonts if not already there, or use existing
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { MusicProvider } from "@/context/MusicContext";
import SpotifyWidget from "@/components/SpotifyWidget";
import TerminalGateway from "@/components/TerminalGateway";
import AudioReactor from "@/components/AudioReactor";
import CustomCursor from "@/components/CustomCursor";

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
          <MusicProvider>
            <CustomCursor />
            <AudioReactor />
            {children}
            <SpotifyWidget />
            <TerminalGateway />
          </MusicProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
