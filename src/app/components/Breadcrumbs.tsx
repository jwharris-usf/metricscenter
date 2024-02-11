"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  const home = { icon: "pi pi-home", url: "/" };

{/*
  const items = links[] = segments.map((item, index) => {
    return {
      <Link
        key={index}
        href={`/${segments.slice(0, index + 1).join("/")}`}
        aria-label={`Go to ${item}`}
      >
        {item}
      </Link >
    };
  });
};
*/}

}

export default Breadcrumbs;