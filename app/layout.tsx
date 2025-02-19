import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Duolingo Worth",
  description: "Made by luannzin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${roboto.className}`}>
      <body className="flex flex-col items-center overflow-x-hidden px-4 bg-zinc-950 text-zinc-50">
        <main className="max-w-[1000px] w-full min-h-screen">
          <NextTopLoader showSpinner={false} color="#8b5cf6" />
          {children}
        </main>
      </body>
    </html>
  );
}
