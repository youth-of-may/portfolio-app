import Header from "../components/Header"
import PictureHolder from "../components/PictureHolder"
export default function About() {
    const url = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Baby.tux.sit-black-800x800.png"
    return (
        <>
        <div className="flex flex-col mb-8">
        <div className="text-center">
            <Header isHeader={true} misc="mb-8">Who I Am</Header>
        </div>
        <div className="flex gap-x-8 justify-center">
        <PictureHolder imgSrc={url} isBorderRound={false} width="max-w-[75%]"/>
        <div className="w-full flex flex-col text-center justify-center">
        <Header isHeader={false} misc=" mb-2">Hi, I'm Princess.</Header>
        <p className="mb-4 italic">
        <span className="font-semibold">Assalamu Alaykum!</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed ligula velit. In et nulla massa. Sed vel dui facilisis, 
        luctus mauris at, consectetur enim. Quisque dapibus dapibus mi ac luctus. Nam nec nisi et ligula molestie tristique. Suspendisse potenti. Nunc in feugiat metus. Etiam sit amet accumsan sem, 
        ac molestie ipsum. Fusce varius purus vel tortor feugiat, in rutrum odio pretium. Integer ipsum ligula, tempus id nibh a, faucibus vestibulum enim. Sed faucibus mattis urna, tempor porta ante 
        efficitur in. Donec dignissim vel diam nec posuere.
        </p>
        <p>Read More</p>
        </div>
        </div>
        </div>
        </>
    )
}