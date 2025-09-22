import Button from "../components/Button"
import Header from "../components/Header"
import Subheader from "../components/Subheader"
import PictureHolder from "../components/PictureHolder"
import { projects } from "../data"
import github from "../assets/github.png";

export default function Projects() {
    return (
        <>
            <div className="text-center flex flex-col">
                <Header isHeader={true} misc="mb-4">My Projects</Header>
                <Subheader misc="mb-16">A showcase of what I’ve built and learned.</Subheader>
                <div className="flex flex-wrap gap-x-8 justify-center ">
                    {
                        projects.map((proj, projIndex) =>
                            <div key={projIndex} className="flex flex-col items-center lg:max-w-[45%] bg-[#fafafa] p-4 mb-8 rounded-xl border hover:drop-shadow-gray-400/30 hover:drop-shadow-lg hover:translate-y-1">
                                <PictureHolder imgSrc={proj.img} width="w-[75%] h-[250px]"/>
                                <div>
                                <Subheader size="text-xl" weight="font-bold" misc="mb-4 mt-4">{proj.name}</Subheader>
                                <img src=""/>
                                </div>
                                <p className="text-wrap text-md leading-5 mb-4">{proj.description}</p>
                                
                                <div className="flex gap-x-2 mb-4">
                                    {proj.skills.map((skill, index) => (
                                        <Button key={index} hoverBg={skill.color} borderB="" px="px-4">
                                            {skill.language}</Button>
                                    ))}
                                    
                                </div>
                                <a href={proj.link} target="_blank">
                                <Button px="px-24" >
                                        Learn More
                                </Button>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
