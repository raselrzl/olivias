import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JAYS",
  description: "HomePage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-24">
        <Header />
        <main className="overflow-hidden sm:px-4 xl:px-20">
          {children}
        </main>
        {/*  bg-image */}
        </div>
        
      </body>
    </html>
  );
}
