import Header from "../components/Header"
import Subheader from "../components/Subheader"
import { socials } from "../data"
export default function Contact() {
    return (
        <>
        <div className="text-center flex flex-col">
            
            <Header isHeader={true} misc="mb-1">Contact Me</Header>
            <Subheader misc="mb-16" color="text-black/60">Get In Touch</Subheader>
            <div className="flex flex-row justify-center w-full">
            <div className="flex flex-wrap mb-4 lg:gap-x-8 py-8 gap-x-2 border border-gray-400/50 rounded-xl p-4 bg-white hover:drop-shadow-gray-400/30 hover:drop-shadow-lg">
                {socials.map((soc) => 
                    <div className="flex lg:w-auto gap-y-8 w-full justify-center items-center">
                        <img className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]" src={soc.icon}/>
                        <a href={soc.link} target="_blank" className="hover:underline hover:underline-offset-8 hover:underline-black/60 hover:text-black/60">{soc.social}</a>
                    </div>
                )}
                
                
            </div>
            </div>
        </div>
        </>
    )
}