import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "tiles gallery",
  description: "an open source gallery of tiles for construction and design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} min-h-full flex flex-col antialiased`}>

        <Navbar />

        <main className="container mx-auto flex-1">
          {children}
        </main>

        <Footer />

       
        <Toaster position="top-left" richColors />

      </body>
    </html>
  );
}