import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const vonca = localFont({
  variable: "--font-vonca",
  src: [
    {
      path: "../../public/vonca-font/vonca-extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/vonca-font/vonca-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/vonca-font/vonca-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/vonca-font/vonca-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/vonca-font/vonca-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/vonca-font/vonca-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/vonca-font/vonca-extrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Tria - Sacred Balance",
  description: "A journey toward sacred balance — the harmony of mind, body, and soul through mindful movement and conscious transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${vonca.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
