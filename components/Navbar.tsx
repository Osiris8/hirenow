import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Snowflake } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "For Companies", href: "/features/companies" },
      { label: "For Talent", href: "/features/talent" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-base-content hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="p-2">
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="text-base-content hover:text-primary"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Logo width={32} height={32} className="mr-2" />
          <span className="text-primary font-bold">Hiretop</span>
          <Snowflake className="ml-2 text-primary h-5 w-5" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <details>
                  <summary className="text-base-content hover:text-primary">
                    {item.label}
                  </summary>
                  <ul className="p-2 bg-base-200 rounded-box">
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="text-base-content hover:text-primary"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  href={item.href}
                  className="text-base-content hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/get-started" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
