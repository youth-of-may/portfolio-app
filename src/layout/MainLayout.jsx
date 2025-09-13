import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
    <main className="px-8 mx-auto max-w-6xl">
      <Navbar />  
        {/* Child routes render here */}
        <Outlet />
        
      </main>
    </>
  );
}
