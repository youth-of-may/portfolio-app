import NavLinks from "./Navlinks";
import Button from "./Button";


export default function Navbar() {
  return (

    <div className="mt-4 mb-16 flex items-center">
    <Button px="px-8 text-md font-semibold">PRINCESS GIRON</Button>
    <NavLinks/>
    </div>
  );
}
