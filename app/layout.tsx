import "./globals.scss";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type RootLayoutProps = { children: ReactNode };
export default ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body id="top">
        <Navbar />
        {children}
      </body>
    </html>
  );
};
