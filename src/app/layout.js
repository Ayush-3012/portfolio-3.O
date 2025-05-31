import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Portfolio - Ayush3012",
  description: "My Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="relative h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
          <Navbar />

          <>{children}</>

          <Footer />
        </div>
      </body>
    </html>
  );
}
