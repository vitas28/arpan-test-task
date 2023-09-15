import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/RepositoryList";
import { FavouritesPages } from "./pages/FavouritesPages";
import { Navigation } from "./components/Navigation";
import { RepositoryDetails } from "./pages/RepositoryDetails";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPages />} />
        <Route path="/repo-details" element={<RepositoryDetails />} />
      </Routes>
    </>
  );
}

export default App;
