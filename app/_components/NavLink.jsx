import Link from "next/link";

function NavLink({ active, name, pathName, url, handleClose }) {
  return (
    <li>
      <Link
        className={`${
          active == name ? "font-bold text-[--main-clr]" : ""
        } duration-500 block py-3 md:py-1 px-2 hover:text-[--main-clr]`}
        href={pathName !== "/" ? `/${url}` : url}
        onClick={handleClose}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavLink;
