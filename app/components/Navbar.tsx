"use  client";

import { useState } from "react";
import Container from "./Container";
import NavLink from "./NavLink";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navbarItems = ["Home", "Courses", "Apply", "About Us", "Contact"];
  return (
    <Container className="z-30">
      <nav className="flex justify-between gap-5 py-6 items-center font-medium z-20">
        <h1 className="text-3xl font-bold">
          <span className=" text-orange-500">E</span>-Learn
        </h1>
        <div className="hidden md:flex md:gap-10 items-center">
          {navbarItems.map((item, i) => (
            <NavLink
              link={item}
              key={i}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
        <div className="flex gap-10 items-center">
          <button>My Account</button>
          <button className=" px-4 py-3 bg-black text-white rounded-md ">
            Create Account
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
