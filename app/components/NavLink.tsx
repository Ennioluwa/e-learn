"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";

interface NavLinkProps {
  link: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const NavLink: FC<NavLinkProps> = ({ link, active, setActive }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col" onClick={() => setActive(link)}>
      <p
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" cursor-pointer"
      >
        {link}
      </p>
      <span
        className={`${
          active === link ? "w-5" : "w-0"
        } h-1 bg-orange-500 transition-all ${hover && "w-full"}`}
      ></span>
    </div>
  );
};

export default NavLink;
