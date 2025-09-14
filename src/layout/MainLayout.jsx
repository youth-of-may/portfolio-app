import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
    <main className="px-8 mx-auto lg:max-w-6xl md:max-w-3xl sm:max-w-xl">
      <Navbar />  
        {/* Child routes render here */}
        <Outlet />
        
      </main>
    </>
  );
}
