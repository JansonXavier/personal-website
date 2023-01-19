import "./globals.scss";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type RootLayoutProps = { children: ReactNode };
export default ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body id="top" className="bg-grey-900 flex flex-col items-center text-center text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
};
