export default function Button({
  children,
  px = "px-16",
  hoverBg = "hover:bg-[#10549f]",
  isRound = true,
  url,
}) {
  const baseStyle =
    "whitespace-nowrap py-2 border border-black transition ease-in-out hover:text-white hover:scale-105";
  const classStyle = isRound ? "rounded-full" : "rounded-md";

  function handleClick() {
    if (url) {
      window.open(url, "_blank");
    }
  }

  return (
    <button
      className={`${px} ${hoverBg} ${classStyle} ${baseStyle}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
