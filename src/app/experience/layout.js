import "../globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ExperienceLayout({ children }) {
  return (
    <div className="flex h-screen w-screen turret-font overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-black max-md:flex-col">
      <Navbar />

      <div className="flex-1 max-md:overflow-y-auto">{children}</div>

      <Footer />
    </div>
  );
}
