"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import SearchBar from "../SearchBar";

import { useRouter, usePathname } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { clearSearchbarValue } from "@redux/slices/searchbarSlice";

const MobileLayout = ({ placeholder, onSubmit, session, providers }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="navbar h-20 gap-2 md:gap-5">
      <Link
        href="/"
        className="logo"
        onClick={() => {
          dispatch(clearSearchbarValue());
        }}
      >
        SC<span className="purple_gradient">R</span>
      </Link>

      <SearchBar placeholder={`${placeholder}`} onSubmit={onSubmit} />

      <div className="flex items-center flex-row gap-2 relative">
        {session?.user ? (
          <>
            <Image
              src={session?.user.image}
              className="w-35 h-35 rounded-full"
              alt="profile"
              width={35}
              height={35}
            />

            <Image
              src="/assets/remixicon/menu-line.svg"
              alt="settings"
              width={30}
              height={30}
              className="cursor-pointer filter invert"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
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

      {toggleDropdown && (
        <div className="dropdown fixed bottom-0 left-0 p-4 bg-white w-full flex flex-col gap-4">
          <Link
            href="/"
            className="dropdown_link-mobile"
            onClick={() => {
              dispatch(clearSearchbarValue());
            }}
          >
            Reviews
            <div className="bg-black rounded-xl p-1">
              <Image
                src="/assets/remixicon/article-line.svg"
                alt="settings"
                className="w-6 h-6 cursor-pointer filter invert"
                width={24}
                height={24}
              />
            </div>
          </Link>

          <Link
            href="/games"
            className="dropdown_link-mobile"
            onClick={() => {
              dispatch(clearSearchbarValue());
            }}
          >
            Games
            <div className="bg-black rounded-xl p-1">
              <Image
                src="/assets/remixicon/gamepad-line.svg"
                alt="settings"
                className="w-6 h-6 cursor-pointer filter invert"
                width={24}
                height={24}
              />
            </div>
          </Link>

          <Link
            href="/settings"
            className="dropdown_link-mobile"
            onClick={() => setToggleDropdown(false)}
          >
            Settings
            <div className="bg-black rounded-xl p-1">
              <Image
                src="/assets/remixicon/settings-5-fill.svg"
                alt="settings"
                className="w-6 h-6 cursor-pointer filter invert"
                width={24}
                height={24}
              />
            </div>
          </Link>

          <button className="dropdown_link-mobile" onClick={signOut}>
            Sign Out
            <div className="bg-black rounded-xl p-1">
              <Image
                src="/assets/remixicon/logout-box-r-line.svg"
                alt="settings"
                className="w-6 h-6 cursor-pointer filter invert"
                width={24}
                height={24}
              />
            </div>
          </button>
        </div>
      )}
    </nav>
  );
};

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const searchbarPlaceholder = useSelector(
    (store) => store.searchbar.placeholder
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("searchbarPlaceholder: " + searchbarPlaceholder);
  }, [searchbarPlaceholder]);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  const currentRoute = usePathname();
  const { push } = useRouter();

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Get the current route from the location object
    // console.log("currentRoute: " + currentRoute);

    // Construct the base route URL based on the corrent route
    const baseRoute = currentRoute.split("/")[1];
    // console.log("baseRoute: " + baseRoute);

    // If the current route is the home page, then redirect to the games page
    if (baseRoute === "games") {
      // console.log("Redirecting to games page");
      push("/games");
    }
  };

  return (
    <header className="page_header">
      {/* {providers ? (
        <MobileLayout
          placeholder={searchbarPlaceholder}
          onSubmit={handleSearchSubmit}
          session={session}
          providers={providers}
        />
      ) : null} */}
      <nav className="navbar h-20 gap-2 md:gap-5">
        <Link
          href="/"
          className="logo"
          onClick={() => {
            dispatch(clearSearchbarValue());
          }}
        >
          SC<span className="purple_gradient">R</span>
        </Link>

        <SearchBar
          placeholder={`${searchbarPlaceholder}`}
          onSubmit={handleSearchSubmit}
        />

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center flex-row gap-5 relative">
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

              <Link
                href="/games"
                className="text-white"
                onClick={() => {
                  dispatch(clearSearchbarValue());
                }}
              >
                Games
              </Link>

              <div className="text-white">
                <Image
                  src="/assets/remixicon/more-fill.svg"
                  alt="settings"
                  className="w-6 h-6 cursor-pointer filter invert"
                  width={24}
                  height={24}
                  onClick={() => setToggleDropdown((prev) => !prev)}
                />

                {toggleDropdown && (
                  <div className="absolute right-0 top-full mt-3 w-full p-4 rounded-lg bg-white min-w-[210px] flex flex-col gap-4 justify-end items-end">
                    <Link
                    href="/settings"
                    className="dropdown_link-desktop"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Settings
                    <div className="bg-black rounded-xl p-1">
                      <Image
                        src="/assets/remixicon/settings-5-fill.svg"
                        alt="settings"
                        className="w-6 h-6 cursor-pointer filter invert"
                        width={24}
                        height={24}
                      />
                    </div>
                  </Link>

                  <button className="dropdown_link-desktop" onClick={signOut}>
                    Sign Out
                    <div className="bg-black rounded-xl p-1">
                      <Image
                        src="/assets/remixicon/logout-box-r-line.svg"
                        alt="settings"
                        className="w-6 h-6 cursor-pointer filter invert"
                        width={24}
                        height={24}
                      />
                    </div>
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
        <div className="sm:hidden flex items-center flex-row gap-2 relative">
          {session?.user ? (
            <>
              <Image
                src={session?.user.image}
                className="w-35 h-35 rounded-full"
                alt="profile"
                width={35}
                height={35}
              />

              <Image
                src="/assets/remixicon/menu-line.svg"
                alt="settings"
                width={30}
                height={30}
                className="cursor-pointer filter invert"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdown fixed bottom-0 left-0 p-4 bg-white w-full flex flex-col items-end gap-4 rounded-t-3xl">
                  <Link
                    href="/"
                    className="dropdown_link-mobile"
                    onClick={() => {
                      dispatch(clearSearchbarValue());
                      setToggleDropdown(false);
                    }}
                  >
                    Reviews
                    <div className="bg-black rounded-xl p-1">
                      <Image
                        src="/assets/remixicon/article-line.svg"
                        alt="settings"
                        className="w-6 h-6 cursor-pointer filter invert"
                        width={24}
                        height={24}
                      />
                    </div>
                  </Link>

                  <Link
                    href="/games"
                    className="dropdown_link-mobile"
                    onClick={() => {
                      dispatch(clearSearchbarValue());
                      setToggleDropdown(false);
                    }}
                  >
                    Games
                    <div className="bg-black rounded-xl p-1">
                      <Image
                        src="/assets/remixicon/gamepad-line.svg"
                        alt="settings"
                        className="w-6 h-6 cursor-pointer filter invert"
                        width={24}
                        height={24}
                      />
                    </div>
                  </Link>

                  <Link
                    href="/settings"
                    className="dropdown_link-mobile"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Settings
                    <div className="bg-black rounded-xl p-1">
                      <Image
                        src="/assets/remixicon/settings-5-fill.svg"
                        alt="settings"
                        className="w-6 h-6 cursor-pointer filter invert"
                        width={24}
                        height={24}
                      />
                    </div>
                  </Link>

                  <button className="dropdown_link-mobile" onClick={signOut}>
                    Sign Out
                    <div className="bg-black rounded-xl p-1">
                      <Image
                        src="/assets/remixicon/logout-box-r-line.svg"
                        alt="settings"
                        className="w-6 h-6 cursor-pointer filter invert"
                        width={24}
                        height={24}
                      />
                    </div>
                  </button>
                </div>
              )}
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
      </nav>
    </header>
  );
};

export default Nav;

// Need for navigation bar: add symbol, notification symbol, settings symbol, log out symbol.
