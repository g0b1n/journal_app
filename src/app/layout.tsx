import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProviderWrapper from "./SessionProviderWrapper";
import "./globals.css";
import HomePageWrapper from "./homePageWrapper";
import { DarkModeProvider } from "@/context/DarkModeContext";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Journal App",
  description: "Developed by Journal App Team",
};

export default function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.clasName}>
        <DarkModeProvider>
          <SessionProviderWrapper>
            <HomePageWrapper>{ children }</HomePageWrapper>
          </SessionProviderWrapper>
        </DarkModeProvider>
      </body>
    </html>
  )
}