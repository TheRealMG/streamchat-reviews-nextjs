"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        SC<span className="purple_gradient">R</span>
      </Link>

      <div className="search_bar"></div>

      {/* Desktop Navigation */}
      <div className=" hidden sm:flex items-center flex-row gap-5 relative">
        {session?.user ? (
          <>
            <div className="flex items-center gap-2">
              <Image
                src={session?.user.image}
                className="w-35 h-35 rounded-full"
                alt="profile"
                width={35}
                height={35}
              />
              <div className="text-white">My Reviews</div>
            </div>

            <Link href="/new-review" className="text-white">
              <Image
                src="/assets/icons/plus.svg"
                alt="new review"
                width={24}
                height={24}
              />
            </Link>

            <div className="text-white">
              <Image
                src="/assets/icons/ellipses.svg"
                alt="settings"
                className="w-6 h-6 cursor-pointer"
                width={24}
                height={24}
                onClick={() => setToggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/settings"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Settings
                  </Link>

                  <button className="dropdown_link" onClick={signOut}>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="menu_items sm:hidden flex relative">
        {session?.user ? (
          <>
            <Image
              src={session?.user.image}
              className="profile_picture"
              alt="profile"
              width={35}
              height={35}
            />
            
            <Image
              src="/assets/icons/menu.svg"
              alt="settings"
              width={24}
              height={24}
            />
          </>
        ) : (
          <button></button>
        )}
      </div>
    </nav>
  );
};

export default Nav;

// Need for navigation bar: add symbol, notification symbol, settings symbol, log out symbol.
