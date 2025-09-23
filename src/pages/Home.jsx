import Header from "../components/Header"
import Subheader from "../components/Subheader"
import { socials } from "../data"
import Button from "../components/Button"
import pic from "../assets/homepic.jpg"
import { useState } from "react";

export default function Home() {
    const [showNotif, setShowNotif] = useState(false);

    const downloadCV = () => {
        setShowNotif(true);
        setTimeout(() => setShowNotif(false), 3000);
    };

    return (
        <>
        <div className="flex lg:justify-around lg:gap-x-4 justify-center flex-wrap relative">
            <img src={pic} className="rounded-full lg:w-md lg:mb-1 w-[250px] mb-4"/>
            <div className="flex flex-col justify-center text-center">
                <Subheader size="text-md" misc="mb-1" color="text-black/50" weight="font-semibold">Hello I'm</Subheader>
                <Header isHeader={true} misc="mb-2">Princess May Giron</Header>
                <Subheader size="text-lg" misc="mb-4">Web Development & Data Analytics</Subheader>
                <div className="flex mb-8 justify-center gap-x-4 relative">
                <Button url="" px="px-8" hoverBg="text-black hover:bg-black hover:text-white" click={downloadCV}> Download CV</Button>
                {showNotif && (
                <div className="absolute top-10 right-20 mt-2 text-center w-full">
                    <div className="inline-block bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg shadow">
                    Not Available Yet!
                    </div>
                </div>
                )}
                    <Button url="/contacts" px="px-8" target="_self" hoverBg="bg-black/80 hover:bg-black text-white">Contact Info</Button>
                </div>
                <div className="flex justify-center gap-x-4">
                    {
                        socials.map((soc) =>
                            <a href={soc.link}><img src={soc.icon} className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] hover:scale-105"/></a>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}
