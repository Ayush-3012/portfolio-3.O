import "../globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CertificateLayout({ children }) {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-amber-950 to-black max-md:flex-col">
        <Navbar />

        <div className="flex-1 turret-font max-md:overflow-y-auto">{children}</div>

        <Footer />
      </div>
    </>
  );
}
