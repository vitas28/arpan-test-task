import { IUser } from "../models/models";

interface Props {
  search: string;
  onChange: (val: string) => void;
  dropdown: boolean;
  data?: IUser[];
  isLoading: boolean;
  clickHandler: (username: string) => void;
}

export function SearchBar({
  search,
  onChange,
  data,
  dropdown,
  clickHandler,
  isLoading,
}: Props) {
  return (
    <>
      <input
        type="text"
        className="border py-2 px-4 w-full h-[42px] ms-2"
        placeholder="Search for Github username..."
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
      {dropdown && (
        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.map((user) => (
            <li
              key={user.id}
              onClick={() => clickHandler(user.login)}
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              {user.login}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
