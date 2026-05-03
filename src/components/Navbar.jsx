"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { toast } from "sonner";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm i lucide-react 

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logout successful");
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  return (
    <div className="border-b px-2 container mx-auto">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <h3 className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
            <span className="text-black text-3xl"> Tiles </span> 
            <span className="text-green-900 text-3xl">Gallery</span>
          </h3>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link href="/" className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-tiles" className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
              All Tiles
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex gap-4 items-center">
          {!user && (
            <ul className="flex items-center text-sm gap-4">
              <li>
                <Link href="/signup" className="border-2 border-[#0f172a] text-[#0f172a] px-6 py-2 rounded-full font-bold hover:bg-[#0f172a] hover:text-white transition-all">
                  <button>SignUp</button>
                </Link>
              </li>
              <li className="border-2 border-[#0f172a] text-[#0f172a] px-5 py-2 rounded-full font-bold hover:bg-[#0f172a] hover:text-white transition-all">
                <Link href="/signin">
                  <button>Login</button>
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-4 items-center">
              <Avatar size="sm">
                <Avatar.Image alt={user.name} src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button
                onClick={handleLogout}
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                Logout
              </Button>
            </div>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden p-2 rounded-md text-slate-900 hover:bg-slate-100 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 px-2 border-t pt-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
            Home
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
            Contact
          </Link>


          <Link href="/all-tiles" onClick={() => setMenuOpen(false)} className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
            All Tiles
          </Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)} className="text-slate-900 hover:text-green-900 font-bold tracking-wide transition-all duration-200">
            My Profile
          </Link>

          {!user && (
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/signup" onClick={() => setMenuOpen(false)} className="border-2 border-[#0f172a] text-[#0f172a] px-6 py-2 rounded-full font-bold hover:bg-[#0f172a] hover:text-white transition-all text-center">
                SignUp
              </Link>
              <Link href="/signin" onClick={() => setMenuOpen(false)} className="border-2 border-[#0f172a] text-[#0f172a] px-6 py-2 rounded-full font-bold hover:bg-[#0f172a] hover:text-white transition-all text-center">
                Login
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-4 mt-2">
              <Avatar size="sm">
                <Avatar.Image alt={user.name} src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;