import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap", // improves loading UX
});

export const metadata = {
  title: {
    default: "Tiles Gallery",
    template: "%s | Tiles Gallery",
  },
  description:
    "Explore a modern open-source gallery of tiles for construction and interior design inspiration.",
  keywords: ["tiles", "design", "gallery", "construction", "interior"],
  authors: [{ name: "Tiles Gallery Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} min-h-screen flex flex-col bg-white text-gray-900 antialiased`}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}