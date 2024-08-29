import Link from "next/link";

function NavLink({ active, name, pathName, url, handleClose }) {
  return (
    <li>
      <Link
        className={`${active == name ? "active" : ""} duration-500`}
        href={pathName !== "/" ? `/${url}` : url}
        onClick={handleClose}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavLink;
