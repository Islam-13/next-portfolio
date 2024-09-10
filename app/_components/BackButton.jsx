"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="absolute top-0 -right-1 md:right-0 border rounded-lg px-2 md:px-3 py-0 md:py-1 hover:bg-[--color-grey-200] duration-500 border-[--main-clr]"
      onClick={() => router.back()}
    >
      &larr;<span className="hidden ml-1 md:inline-block">Back</span>
    </button>
  );
}

export default BackButton;
