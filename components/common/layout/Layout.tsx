import React, { ReactNode } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </>
);

export default Layout;