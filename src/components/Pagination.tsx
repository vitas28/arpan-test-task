import React, { useState, useMemo } from "react";
import { IRepo } from "../models/models";
import { RepoCard } from "./RepoCard";

interface Props {
  items: IRepo[];
  areReposeLoading: boolean;
}

const Pagination = ({ items, areReposeLoading }: Props) => {
  const pageNumbers = [];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const totalPages = useMemo(() => {
    return Math.ceil(items.length / itemsPerPage);
  }, [items, itemsPerPage]);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="container">
      {areReposeLoading && <p className="text-center">Repos are loading...</p>}
      {items.slice(startIndex, endIndex)?.map((repo: IRepo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          <span>Show</span>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border rounded p-1"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>items per page</span>
        </div>
        <div>
          <ul className="flex space-x-2">
            {pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber}
                className={`${
                  pageNumber === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                } px-3 py-1 rounded cursor-pointer`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
