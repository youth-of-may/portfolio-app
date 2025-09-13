export default function Subheader({children, color="text-black", weight="font-regular", misc="mb-12", handleClick}) {
    const baseStyle = `${color} ${weight} ${misc} text-xl `
    return (
        <>
        <h6 className={`${baseStyle}`} onClick={handleClick}>{children}</h6>
        </>
    )
}