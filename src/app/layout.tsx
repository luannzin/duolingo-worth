import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";

const dinRound = localFont({
  src: [
    {
      path: "../fonts/din-round/dinround.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/din-round/dinround_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
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
    <html lang="pt-BR" className={`dark ${dinRound.className}`}>
      <body className="flex flex-col items-center overflow-x-hidden px-4 bg-zinc-950 text-zinc-50">
        <main className="max-w-[1000px] w-full min-h-screen">
          <NextTopLoader showSpinner={false} color="#58cc02" />
          {children}
        </main>
      </body>
    </html>
  );
}
