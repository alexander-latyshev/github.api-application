import React from "react";
import { useAppSelector } from "../hooks/redux";

type Props = {};

const FavouritesPage = (props: Props) => {
  const favs = useAppSelector((state) => state.github.favourites);

  if (!favs.length) return <p>No items.</p>;

  return (
    <div className="flex justify-center pt-10">
      <ul className="list-none">
        {favs.map((f) => (
          <li key={f} className="mb-2">
            <a href={f}>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
