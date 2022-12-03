import React from "react";
import { Routes, Route } from "react-router-dom";
import FavouritesPage from "../pages/FavouritesPage";
import HomePage from "../pages/HomePage";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className="bg-github-dg h-screen text-white p-0 m-0">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </main>
  );
};

export default Main;
