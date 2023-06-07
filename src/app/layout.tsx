import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Accueil - O2J",
  description: "O2J",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
