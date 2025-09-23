import Header from "../components/Header"
import PictureHolder from "../components/PictureHolder"
import Subheader from "../components/Subheader"
import headerImg from "../assets/header.png";
export default function About() {
    return (
        <>
        <div className="flex flex-col mb-8">
        <div className="text-center">
            <Header isHeader={true} misc="mb-2">Who I Am</Header>
            <Subheader misc="mb-4" color="text-black/60">Get To Know Me</Subheader>
        </div>
        <div className="flex gap-x-8 flex-col justify-center items-center">
        <PictureHolder imgSrc={headerImg} isBorderRound={false} width="w-[75%] h-[300px] mb-8 rounded-xl"/>
        <div className="w-full flex flex-col justify-center">
        <p className="mb-4 lg:text-lg text-md indent-8">
        <span className="font-semibold italic">Hi, I’m Princess May Giron! </span> 
            I'm a BS Computer Science student specializing in Data Science and Analytics at Ateneo de Manila University. I’m honored to be a Jordan Wings scholar and a 100% Finaid scholar, which has given me incredible opportunities to grow academically and personally.
       </p>
       <p className="mb-4 lg:text-lg text-md indent-8">
            I’m passionate about technology and coding, with experience across frontend and backend development, as well as business analytics tools like Tableau and data science programming languages. I love solving problems and turning data into meaningful insights.
       </p>
       <p className="mb-4 lg:text-lg text-md indent-8">
            Outside of academics, I enjoy staying active and competitive through sports like badminton, table tennis, and basketball. I’m also a fan of reading fiction, and I love unwinding by watching anime and series.
       </p>
        <p className="mb-4 lg:text-lg text-md indent-8">
            As an individual, I’m always looking for ways to challenge myself, learn new skills, and connect with people who share similar interests.        
        </p>
        </div>
        </div>
        </div>
        </>
    )
}