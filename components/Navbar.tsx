"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants/index";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={58} height={29} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-6 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-[16px] font-[400] text-[#585858] flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Buttons */}
      <div className="lg:flex items-center justify-center hidden">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="flex items-center bg-[#292C27] px-6 py-4 text-white transition-all hover:bg-black mx-2 rounded-lg">
              <Image
                src="/user.svg"
                alt="prijava"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign in
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Hamburger Menu */}
      <Image
        key={navbar ? "close-icon" : "menu-icon"}
        onClick={() => setNavbar(!navbar)}
        src={navbar ? "/close.svg" : "/menu.svg"}
        alt="izbornik"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden transition-all"
      />

      {/* Mobile Navigation */}
      {navbar && (
        <div className="absolute top-full left-0 w-full h-screen bg-white shadow-md py-4 lg:hidden">
          <ul className="flex flex-col gap-10 px-6 items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-[24px] font-[400] text-[#585858] cursor-pointer pb-1.5 transition-all hover:font-bold"
                  onClick={() => setNavbar(false)} // Zatvori meni samo na klik linka
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-6 mt-6 px-6 items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="flex items-center bg-[#292C27] px-8 py-4 text-white transition-all hover:bg-black rounded-lg">
                  <Image
                    src="/user.svg"
                    alt="prijava u csc kamp"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Popravljen UserButton na mobilnim uređajima */}
          <div className="flex justify-center mt-6">
            <SignedIn>
              {/* Omotaj UserButton u div i primijeni className */}
              <div className="relative z-50">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
