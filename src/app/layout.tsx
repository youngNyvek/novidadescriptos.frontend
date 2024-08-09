import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Ubuntu({ subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Novidades Criptos",
  description: "Seu gateway de notícias do mundo das criptmoedas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`} 
        crossOrigin="anonymous"></script>
        <Script async src="https://static.coinstats.app/widgets/v5/cs-widget.js"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
