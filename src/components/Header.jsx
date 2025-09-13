export default function Header({children, isHeader=true, color="text-black", weight="font-semibold"}) {
    const baseStyle = `${color} ${weight}`
    const classStyle = isHeader ? "text-4xl" : "text-xl"
    return (
        <>
        <h6 className={`${baseStyle} ${classStyle}`}>{children}</h6>
        </>
    )
}