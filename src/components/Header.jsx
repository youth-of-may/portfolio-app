export default function Header({children, isHeader=true, color="text-black"}) {
    const classStyle = isHeader ? "text-4xl" : "text-2xl"
    return (
        <>
        <h6 className={classStyle}>{children}</h6>
        </>
    )
}