import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khanh Nguyen Portfolio",
  description: "Please hire me i'm starving :(",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen bg-gradient-to-b from-[#ffafbd] to-[#ffc3a0]">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
