export default function Subheader({children, color="text-black", size="text-lg", weight="font-regular", misc="mb-12", handleClick}) {
    const baseStyle = `${color} ${weight} ${misc} ${size} lg:text-xl`
    
    return (
        <>
        <h6 className={`${baseStyle}`} onClick={handleClick}>{children}</h6>
        </>
    )
}