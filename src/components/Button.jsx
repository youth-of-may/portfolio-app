export default function Button({children, isRound=true}) {
    const classStyle= isRound ? "" : ""
    return (
        <>
        <button className={classStyle}>{children}</button>
        </>
    )
}