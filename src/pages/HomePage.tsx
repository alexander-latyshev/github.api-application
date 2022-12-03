import React, { useEffect, useState } from "react";
import RepoCard from "../components/repoCard";
import { useDebounce } from "../hooks/debounce";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";

type Props = {};

const HomePage = (props: Props) => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const [dropdown, setDropdown] = useState(false);
  const { isError, isLoading, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  return (
    <section className="flex flex-col items-center pt-10 mx-auto h-screen p-0 m-0">
      {isError && <p className="text-center font-bold">Error...</p>}
      <div className="relative w-[560px]">
        <input
          type={"text"}
          placeholder="Search for github user..."
          className="border border-github-border py-2 px-4 w-full h-[42px] mb-2 text-white bg-github-search rounded-lg"
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
        <div className="container">
          {areReposLoading && (
            <p className="text-center">Repos are Loading...</p>
          )}
          {repos?.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
// github-grey
