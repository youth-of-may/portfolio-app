import NavLinks from "./Navlinks"
export default function Footer() {
    return (
        <>
        <div className="fixed bottom-0 w-full bg-white/95 shadow-lg h-18">
        <NavLinks position="justify-center fixed bottom-8"/>
        <p className="w-full flex justify-center fixed bottom-2 text-black/50">Copyright © 2025 Princess Giron. All Rights Reserved.</p>
        </div>
        </>
    )
}