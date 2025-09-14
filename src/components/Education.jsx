import { education } from "../data"
import Subheader from "./Subheader"
import PictureHolder from "./PictureHolder"
import Header from "./Header"
export default function Education() {
    return (
        <>
        {education.map((educ) =>
                <div className="flex w-full mb-4 border border-gray-400/50 rounded-md p-4 bg-white hover:drop-shadow-gray-400/30 hover:drop-shadow-lg hover:translate-y-1">
                    <div className="flex flex-col justify-center">
                    <PictureHolder imgSrc={educ.url} width="max-w-[150px] max-h-[300px] mr-8"></PictureHolder>
                    </div>
                    <div className="flex flex-col my-auto">
                    <Header isHeader={false} misc=" text-left mb-2">{educ.name}</Header>
                    <Subheader misc="text-left">{educ.program}</Subheader>
                    <Subheader misc="text-left" size="text-lg" color="text-gray-500">{educ.year}</Subheader>
                    <Subheader misc="text-left" size="text-md" color="text-gray-500">{educ.description}</Subheader>
                    </div>
                </div>
         )}
        </>
    )
}