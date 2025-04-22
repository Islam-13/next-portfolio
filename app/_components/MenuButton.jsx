function MenuButton({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen((s) => !s)}
      aria-label="menu button"
      className={`relative w-6 h-6 cursor-pointer md:hidden transition-all duration-500 transform translate-y-0
            ${isOpen ? "rotate-180" : "rotate-0"}`}
    >
      <div
        className={`${
          isOpen ? "top-[50%] -rotate-45" : "top-[10%] -translate-y-1/2"
        } transform -translate-x-1/2 absolute left-[50%] w-full h-0.5 bg-[--color-grey-800] transition-all duration-500`}
      ></div>

      <div
        className={`${
          isOpen ? "opacity-0" : "opacity-100"
        } absolute left-[50%] w-full h-0.5 bg-[--color-grey-800] transition-all duration-500 top-[50%] transform -translate-x-1/2 -translate-y-1/2`}
      ></div>

      <div
        className={`${
          isOpen ? "top-[50%] rotate-45" : "top-[90%] -translate-y-1/2"
        } transform -translate-x-1/2 absolute left-[50%] w-full h-0.5 bg-[--color-grey-800] transition-all duration-500`}
      ></div>
    </button>
  );
}

export default MenuButton;
