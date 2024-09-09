import Link from "next/link";
import FilterProjects from "../_components/FilterProjects";

export const metadata = {
  title: "Projects",
};

function Page() {
  return (
    <main className="mt-16 py-8">
      <div className="wrapper flex flex-col gap-7 ">
        <div className="border rounded-lg p-2 text-sm md:text-base">
          <Link
            href="/"
            className=" px-3 py-1 rounded-xl hover:bg-[--color-grey-200] duration-500 ease-in"
          >
            Home
          </Link>{" "}
          &raquo;{" "}
          <span className="bg-[--color-grey-200] px-3 py-1 rounded-xl ml-1">
            Projects
          </span>
        </div>

        <FilterProjects />
      </div>
    </main>
  );
}

export default Page;
