import React from "react";
import RepositoryListItem from '../RepositoryListItem/RepositoryListItem';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import './RepositoryList.scss';

const RepositoryList = ({ user, repos, loading }) => {
  const { public_repos } = user;
  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <h2 className="repos__title">Repositories ({public_repos})</h2>
      <ul className="repos__list-items">
        {repos.map(repo => (
          <li key={repo.id}>
            <RepositoryListItem repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
