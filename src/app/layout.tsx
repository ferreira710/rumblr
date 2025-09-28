import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rumblr - Conectando Lutadores",
  description:
    "Crie seu perfil no Rumblr e conecte-se com lutadores de artes marciais para lutas amistosas. Totalmente seguro, sem apostas e dentro da legislação.",
  keywords: [
    "tinder para lutas",
    "lutas consensuais",
    "artes marciais",
    "conectar lutadores",
    "organizador de lutas",
  ],
  openGraph: {
    title: "Rumblr - Conectando Lutadores",
    description:
      "Plataforma segura para encontrar oponentes de lutas consensuais e organizar encontros para treinos ou combates amistosos.",
    url: "https://www.rumblr.com",
    siteName: "Rumblr",
    images: [
      {
        url: "https://www.rumblr.com/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Rumblr - Conectando Lutadores",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumblr - Conectando Lutadores",
    description:
      "Plataforma segura para encontrar oponentes de lutas consensuais e organizar encontros para treinos ou combates amistosos.",
    images: ["https://www.rumblr.com/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
