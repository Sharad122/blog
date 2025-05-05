import "./globals.css";
import type { Metadata } from "next";
import { inter, onest } from "./font";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Provider from "@/components/global/Provider";

export const metadata: Metadata = {
  title: "Webhelp - Stay updated with programming",
  description: "Stay updated with the latest in web development and programming. Webhelp Blog offers tutorials, tips, and insights to help developers build better apps, improve coding skills, and stay ahead in the tech world.",
};

export default async function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className} ${onest.variable} antialiased`}>
        <Provider>
          <NextTopLoader showSpinner={false} height={2}/>
          <Header/>
          <main className="w-full h-full flex items-center justify-center" style={{ minHeight: "calc(100vh - 110px)" }}>
            {children}
          </main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
