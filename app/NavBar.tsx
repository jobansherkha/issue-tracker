"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "dashboard", link: "/dashboard" },
    { label: "issues", link: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"> logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.label}
            className={classNames({
              "text-zinc-800": link.link === currentPath,
              "text-zinc-500": link.link !== currentPath,
              " hover:text-zinc-800 transition-colors": true,
            })}
            href={link.link}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
