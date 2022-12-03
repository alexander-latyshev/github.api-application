import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api";

type Props = {};

const HomePage = (props: Props) => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const [dropdown, setDropdown] = useState(false);
  const { isError, isLoading, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced]);
  const clickHandler = (username: string) => {
    console.log(username);
  };
  return (
    <section className="flex flex-col items-center pt-10 mx-auto h-screen p-0 m-0">
      {isError && <p className="text-center font-bold">Error...</p>}
      <div className="relative w-[560px]">
        <input
          type={"text"}
          placeholder="Search for github user..."
          className="border py-2 px-4 w-full h-[42px] mb-2 text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="list-none overflow-y-scroll absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md shadow-github-grey">
            {isLoading && <p>Loading...</p>}
            {data?.map((user) => (
              <li
                key={user.id}
                className="py-2 px-4 hover:bg-github-col transition-colors cursor-pointer w-full"
                onClick={() => clickHandler(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default HomePage;
// github-grey
