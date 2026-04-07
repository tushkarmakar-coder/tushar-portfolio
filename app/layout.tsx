import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModeProvider } from "@/lib/mode-context";
import SyncMode from "@/components/SyncMode";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/LeftSidebar";
import ModeToggle from "@/components/ModeToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar Karmakar | Incident Manager & AI Content Creator",
  description: "Portfolio of Tushar Karmakar - Incident Manager with 6+ years of experience in incident management and AI-powered creative services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-bg text-foreground antialiased flex flex-col min-h-screen`}>
        <ModeProvider>
          <SyncMode />
          <LeftSidebar />
          <ModeToggle />
          <main className="min-h-screen overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
