import React from "react";
import { useActions } from "../hooks/actions";
import { IOwner, IRepo } from "../models/models";

type Props = { repo: IRepo };

const RepoCard = ({ repo }: Props) => {
  const { addFavourite } = useActions();
  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addFavourite(repo.html_url);
  };

  return (
    <div className="border border-github-border py-3 px-5 rounded cursor-pointer mb-2 hover:bg-github-grey transition-all">
      <a href={repo.html_url} target="_blank">
        <h2>{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        <button
          className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all text-black"
          onClick={addToFavourite}
        >
          Add
        </button>
      </a>
    </div>
  );
};

export default RepoCard;
