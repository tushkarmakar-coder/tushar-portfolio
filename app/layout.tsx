import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModeProvider } from "@/lib/mode-context";
import SyncMode from "@/components/SyncMode";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar Karmakar | L2 Support Engineer & AI Content Creator",
  description: "Portfolio of Tushar Karmakar - L2 Application Support Engineer with 6+ years of experience in incident management and AI-powered creative services.",
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
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
