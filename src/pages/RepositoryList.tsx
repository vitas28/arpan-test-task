import React, { useEffect, useState } from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import { SearchBar } from "../components/SearchBar";
import Pagination from "../components/Pagination";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: areReposeLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      <div className="relative w-[560px]">
        <SearchBar
          search={search}
          clickHandler={clickHandler}
          onChange={(value: string) => setSearch(value)}
          isLoading={isLoading}
          data={data ?? []}
          dropdown={dropdown}
        />
        {repos && (
          <Pagination areReposeLoading={areReposeLoading} items={repos ?? []} />
        )}
      </div>
    </div>
  );
}
