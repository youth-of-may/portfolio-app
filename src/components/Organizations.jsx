import { organization } from "../data"
import PictureHolder from "./PictureHolder"
import Header from "./Header"
import Subheader from "./Subheader"
export default function Organizations() {
    return (
        <>
        {organization.map((org) =>
        <div className="flex w-full mb-4 border border-gray-400/50 rounded-md p-4 bg-white hover:drop-shadow-gray-400/30 hover:drop-shadow-lg hover:translate-y-1">
            <PictureHolder imgSrc={org.url} width="max-w-[225px] mr-8"></PictureHolder>
            <div className="flex flex-col my-auto">
            <Header isHeader={false} misc=" text-left mb-2">{org.name}</Header>
            <div className="flex flex-col">
            {org.activities.map((act) =>
            <div className="flex flex-col">
                
                <Subheader misc="text-left">{act.role}</Subheader>
                <Subheader misc="text-left" size="text-lg" color="text-gray-500">{act.description}</Subheader>
                <Subheader misc="text-left" size="text-md" color="text-gray-500">{act.year}</Subheader>
                
            </div>
            )}
            </div>
            </div>
        </div>
        )}
        
        </>
    )
}