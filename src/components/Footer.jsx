import React from "react";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t px-6 py-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold">Tiles Gallery</h2>
          <p className="text-black/70 mt-3 text-sm leading-relaxed">
            Discover inspiring tile designs and transform your spaces with elegance and creativity.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <div className="flex flex-col gap-3 text-sm text-black/70">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>@tilesgallery.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+880123456789</span>
            </div>

            <p className="mt-2">
              Narayanganj, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white rounded-full hover:opacity-80 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white rounded-full hover:opacity-80 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white rounded-full hover:opacity-80 transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-xs text-black/60 gap-3">
        <p>© {new Date().getFullYear()} Tiles Gallery. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Cookies</a>
        </div>
      </div>
    </footer>
  );
}