export default function Subheader({children, color="text-black", size="text-lg", sizelg="lg:text-xl", weight="font-regular", misc="mb-12", handleClick}) {
    const baseStyle = `${color} ${weight} ${misc} ${size} ${sizelg}`
    
    return (
        <>
        <h6 className={`${baseStyle}`} onClick={handleClick}>{children}</h6>
        </>
    )
}