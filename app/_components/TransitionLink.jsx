"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function TransitionLink({ styles = "", href = "", children }) {
  const router = useRouter();

  function handleTransition(e) {
    e.preventDefault();

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(href);
      });
    } else router.push(href);
  }
  return (
    <Link className={styles} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
}

export default TransitionLink;
