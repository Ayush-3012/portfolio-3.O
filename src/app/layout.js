"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Turret_Road } from "next/font/google";
import { usePathname } from "next/navigation";

const turretRoad = Turret_Road({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-turret",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const fullLayoutRoutes = [
    "/home",
    "/about",
    "/projects",
    "/certificates",
    "/contact",
  ];

  const isCustomLayout = fullLayoutRoutes.includes(pathname);

  if (isCustomLayout) {
    return (
      <html lang="en" className={`${turretRoad.variable}`}>
        <body suppressHydrationWarning>
          <>{children}</>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${turretRoad.variable}`}>
      <body suppressHydrationWarning>
        <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black">
          <Navbar />

          <div className="flex-1 overflow-y-auto">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
