import { cn } from "@/lib/utils";
import { AppProviders } from "@/components/app-providers";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

export const metadata: Metadata = {
  title: "Ripperdoc",
  metadataBase: new URL("https://ripperdoc.dev"),
  description:
    "An open-source, extensible AI coding agent that runs in your terminal.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ripperdoc",
    description:
      "An open-source, extensible AI coding agent that runs in your terminal.",
    url: "https://ripperdoc.dev",
    siteName: "Ripperdoc",
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
