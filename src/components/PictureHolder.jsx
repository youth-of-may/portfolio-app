export default function PictureHolder({imgSrc="", alt="", isBorderRound=true, isDrop=false, dropOnHover=false,width="max-w-[150px]"}) {
    const baseStyle = ""
    const dropShadow = isDrop ? "drop-shadow-md" : ""
    const dropRightAway = dropOnHover ? `animation ease-in-out hover:drop-shadow-md hover:-translate-y-1 ` : dropShadow
    const round = isBorderRound ? "rounded-lg" : ""
    return (
        <>
        <img src={imgSrc} alt={alt} className={`${baseStyle} ${round} ${width} ${dropRightAway}`}/>
        </>
    )
}