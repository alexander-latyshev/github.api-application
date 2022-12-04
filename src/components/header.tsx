import React from "react";
import Navigation from "./Navigation";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center h-[50px] text-white shadow-md bg-github-grey w-full">
      <Navigation />
    </header>
  );
};

export default Header;
