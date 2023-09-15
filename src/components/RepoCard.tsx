import React, { useState } from "react";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router-dom";

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite, selectRepo } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const navigate = useNavigate();

  const [isFav, setIsFav] = useState(favourites.includes(repo));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo);
    setIsFav(true);
  };
  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo);
    setIsFav(false);
  };

  const onSelectRepo = () => {
    navigate("/repo-details");
    selectRepo(repo);
  };

  return (
    <div className="border cursor-pointer py-3 px-5 rounded md-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <h2 className="text-lg font-bold">{repo.full_name}</h2>
      <p className="text-sm">
        Forks:<span className="fond-bold mr-2">{repo.forks}</span>
        Watchers:<span className="fond-bold mr-2">{repo.watchers}</span>
        Stars:<span className="fond-bold">{repo.stargazers_count}</span>
      </p>
      <p className="text-sm font-thin">{repo?.description}</p>

      <button
        className="py-2 z-10 px-4 bg-green-400 mr-2 rounded hover:shadow-md transition-all"
        onClick={onSelectRepo}
      >
        View Details
      </button>

      {!isFav && (
        <button
          className="py-2 z-10 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
          onClick={addToFavourite}
        >
          Add
        </button>
      )}

      {isFav && (
        <button
          className="py-2 z-10 px-4 bg-blue-700 rounded hover:shadow-md transition-all"
          onClick={removeFromFavourite}
        >
          Removed
        </button>
      )}
    </div>
  );
}
