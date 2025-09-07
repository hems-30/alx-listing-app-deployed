import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {LayoutProps } from "@/interfaces";

//create a reusable Layout component that wraps: A Header at the top, A Footer at the bottom, And the main content (like your landing.tsx page) in between. 

const Layout: React.FC<LayoutProps> = ({ children}) => { // children in React refers to whatever you wrap inside the Layout component
  return (
    <> 
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;