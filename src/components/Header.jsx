export default function Header({children, isHeader=true}) {
    const size = isHeader ? "text-4xl" : "text-2xl"
    return (
        <>
        <h6 className={size}>{children}</h6>
        </>
    )
}