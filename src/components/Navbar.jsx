import NavLinks from "./Navlinks";
import Button from "./Button";


export default function Navbar() {
  return (

    <div className="mt-4 mb-16 flex items-center lg:flex-nowrap lg:justify-between flex-wrap justify-between py-4 border-black/10 border-b-1 shadow-[0_0px_4px_rgba(0,0,0,0.02)]">
    <Button px="px-8 text-md font-semibold lg:mb-0 mb-2" hoverBg="hover:bg-black/80 hover:text-white hover:drop-shadow-gray-400/30">PRINCESS GIRON</Button>
    <NavLinks/>
    </div>
  );
}
