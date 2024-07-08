import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JAYS",
  description: "HomePage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="overflow-scroll sm:px-4 xl:px-20">
          {children}
        </main>
        {/*  bg-image */}
      </body>
    </html>
  );
}
