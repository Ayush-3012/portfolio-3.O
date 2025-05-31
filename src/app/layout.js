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

          <div className="relative w-[900px] h-[600px] rotate-[20deg] flex items-center justify-center shadow-[1px_1px_10px] rounded-xl shadow-cyan-400 max-lg:w-[800px] max-lg:h-[500px] max-lg:rotate-[15deg] max-md:w-[700px] max-md:h-[400px] max-md:rotate-[10deg] max-sm:w-[600px] max-sm:h-[400px] max-sm:rotate-[0deg] max-sm:mx-2 max-sm:mb-8">
            {/* <div className="w-full h-full -rotate-[20deg] flex flex-col items-center justify-center max-lg:-rotate-[15deg] max-md:-rotate-[10deg] max-sm:-rotate-[0deg] p-6 max-sm:p-3"> */}
            {children}
            {/* </div> */}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
