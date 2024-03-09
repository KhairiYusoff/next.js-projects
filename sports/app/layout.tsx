import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navbar/ResponsiveNav";

const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Sports App",
  description: "Sports website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <ResponsiveNav />
        {children}</body>
    </html>
  );
}
