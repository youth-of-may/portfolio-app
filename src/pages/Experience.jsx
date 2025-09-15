import PictureHolder from "../components/PictureHolder"
import Header from "../components/Header"
import Subheader from "../components/Subheader"
import Organizations from "../components/Organizations"
import Education from "../components/Education"
import { useState } from "react"
import Skills from "../components/Skills"
export default function Experience() {
    const [org, setOrg] = useState(true)
    const [educ, setEduc] = useState(false)
    const [skill, setSkill] = useState(false)
    function clickOrg() {
        setOrg(true)
        setEduc(false)
        setSkill(false)
    }
    function clickEduc() {
        setOrg(false)
        setEduc(true)
        setSkill(false)
    }
    function clickSkill() {
        setOrg(false)
        setEduc(false)
        setSkill(true)
    }
    return (
        <>
        <div className="text-center flex flex-col">
            <Header isHeader={true} misc="mb-4">My Journey</Header>
            <Subheader misc="mb-16">A look at my experiences and achievements</Subheader>
            <div className="flex lg:gap-x-16 gap-x-8 justify-center">
                <Subheader misc="mb-8 hover:underline hover:underline-offset-4 active:underline" handleClick={()=> clickOrg()}>Organizations</Subheader>
                <Subheader misc="mb-8 hover:underline hover:underline-offset-4 active:underline" handleClick={()=> clickEduc()}>Education</Subheader>
                <Subheader misc="mb-8 hover:underline hover:underline-offset-4 focus:text-white" handleClick={()=> clickSkill()}>Skills</Subheader>
            </div>
            <div className="lg:max-w-6xl sm:max-w-xl">
                <p>{org ? <Organizations/> : educ ? <Education/> : <Skills/>}</p>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}