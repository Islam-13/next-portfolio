"use client";

import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi2";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center absolute top-0 -right-1 md:right-0 border rounded-lg px-2 md:px-3 py-1 z-[1] hover:bg-[--color-grey-200] duration-500 border-[--main-clr]"
      onClick={() => router.back()}
    >
      <HiArrowLeft /> <span className="hidden ml-1 md:inline-block">Back</span>
    </button>
  );
}

export default BackButton;
