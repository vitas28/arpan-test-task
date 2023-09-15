import React from "react";
import { useAppSelector } from "../hooks/redux";
import { RepoDetailsCard } from "../components/RepoDetailsCard";

export function FavouritesPages() {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites.length === 0)
    return <p className="text-center">No items...</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((item) => (
          <RepoDetailsCard
            key={item.id}
            name={item.full_name}
            description={item?.description}
            stars={item.stargazers_count}
            url={item.html_url}
            ownerName={item.owner.login}
          />
        ))}
      </ul>
    </div>
  );
}
