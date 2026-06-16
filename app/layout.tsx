import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resolve Manutenção e Reformas | Santos e Região",
  description: "Serviços de elétrica, hidráulica, pintura, alvenaria e reparos em Santos e região. Atendimento rápido, preço justo e garantia no serviço.",
  openGraph: {
    title: "Resolve Manutenção e Reformas",
    description: "Atendimento rápido, preço justo e garantia no serviço. Santos e região.",
    url: "https://www.resolvemanutencao.com.br",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
