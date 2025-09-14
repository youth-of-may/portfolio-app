import PictureHolder from "../components/PictureHolder"
import Header from "../components/Header"
import Subheader from "../components/Subheader"
import Organizations from "../components/Organizations"
import Education from "../components/Education"
import Certification from "../components/Certification"
import { useState } from "react"
export default function Experience() {
    const [org, setOrg] = useState(true)
    const [educ, setEduc] = useState(false)
    const [cert, setCert] = useState(false)
    function clickOrg() {
        setOrg(true)
        setEduc(false)
        setCert(false)
    }
    function clickEduc() {
        setOrg(false)
        setEduc(true)
        setCert(false)
    }
    function clickCert() {
        setOrg(false)
        setEduc(false)
        setCert(true)
    }
    return (
        <>
        <div className="text-center flex flex-col">
            <Header isHeader={true} misc="mb-8">My Journey</Header>
            <div className="flex gap-x-16 justify-center">
                <Subheader misc="mb-8 hover:underline hover:underline-offset-4" handleClick={()=> clickOrg()}>Organizations</Subheader>
                <Subheader misc="mb-8 hover:underline hover:underline-offset-4" handleClick={()=> clickEduc()}>Education</Subheader>
                <Subheader misc="mb-8 hover:underline hover:underline-offset-4" handleClick={()=> clickCert()}>Certifications</Subheader>
            </div>
            <div>
                <p>{org ? <Organizations/> : educ ? <Education/> : <Certification/>}</p>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}