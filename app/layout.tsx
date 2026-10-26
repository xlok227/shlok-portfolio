import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space", display: "swap" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex", display: "swap" });

export const metadata: Metadata = { title: "Shlok — Personal Portfolio", description: "A living record of what Shlok is learning, building, and exploring in AI and web development.", openGraph: { title: "Shlok — Personal Portfolio", description: "Learning by building. Building to understand.", type: "website" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${space.variable} ${plex.variable}`}>{children}</body></html>;
}
