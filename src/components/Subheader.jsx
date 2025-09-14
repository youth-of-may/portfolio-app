export default function Subheader({children, color="text-black", size="text-xl", weight="font-regular", misc="mb-12", handleClick}) {
    const baseStyle = `${color} ${weight} ${misc} ${size} `
    return (
        <>
        <h6 className={`${baseStyle}`} onClick={handleClick}>{children}</h6>
        </>
    )
}