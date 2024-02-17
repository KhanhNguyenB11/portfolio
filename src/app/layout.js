import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TransitionProvider from "./components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khanh Nguyen Portfolio",
  description: "Please hire me i'm starving :(",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
