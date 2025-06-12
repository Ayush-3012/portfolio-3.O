import "../globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ProjectLayout({ children }) {
  return (
    <>
      <div className="flex h-screen turret-font w-screen overflow-hidden bg-gradient-to-br from-black via-fuchsia-950 to-black max-md:flex-col">
        <Navbar />

        <div className="flex-1 max-md:overflow-y-auto">{children}</div>

        <Footer />
      </div>
    </>
  );
}
