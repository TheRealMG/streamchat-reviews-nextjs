import React from "react";

import "@styles/globals.css";

import Nav from "@components/Nav/Nav";
import AuthProvider from "@components/AuthProvider";
import ReduxProvider from "@redux/provider";

export const metadata = {
  title: "StreamChat Reviews",
  description: "A place to share your thoughts on StreamChat",
  image: "/assets/images/logo.svg",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        />
      </head>
      <body className="flex justify-center">
        <ReduxProvider>
          <AuthProvider>
            <main className="app">
              <Nav />
              {children}
            </main>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
