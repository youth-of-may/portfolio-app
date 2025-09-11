import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        {/* Child routes render here */}
        <Outlet />
      </main>
    </>
  );
}
