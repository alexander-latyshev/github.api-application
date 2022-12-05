import React from "react";
import { Routes, Route } from "react-router-dom";
import FavouritesPage from "../pages/FavouritesPage";
import HomePage from "../pages/HomePage";

type Props = {};

const Main = (props: Props) => {
  return (
    <main className="bg-github-dg text-white p-0 m-0 w-full max-h-full min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </main>
  );
};

export default Main;
