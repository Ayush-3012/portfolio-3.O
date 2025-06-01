import "../globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactLayout({ children }) {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-red-950 to-black">
        <Navbar />

        <div className="flex-1 overflow-y-auto">{children}</div>

        <Footer />
      </div>
    </>
  );
}
