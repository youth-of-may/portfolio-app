export default function Header({children, isHeader=true, color="text-black", weight="font-semibold", misc="mb-12"}) {
    const baseStyle = `${color} ${weight} ${misc}`
    const classStyle = isHeader ? "text-6xl" : "text-4xl"
    return (
        <>
        <h6 className={`${baseStyle} ${classStyle}`}>{children}</h6>
        </>
    )
}