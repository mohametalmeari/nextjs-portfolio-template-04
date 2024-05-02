import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description:
    "Showcase of my work and projects as a developer and designer 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
