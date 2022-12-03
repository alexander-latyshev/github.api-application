import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <>
      <h3 className="font-bold ml-5">Github search</h3>
      <span>
        <Link to="/" className="mr-5">
          Home
        </Link>
        <Link to="/favourites" className="mr-5">
          Favourites
        </Link>
      </span>
    </>
  );
};

export default Navigation;
