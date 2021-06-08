import React, { useState } from "react";


import Header from './components/Header/Header';
import RepositoryList from "./components/RepositoryList/RepositoryList";
import ResultPanel from "./components/ResultPanel/ResultPanel";
import UserInfo from "./components/UserInfo/UserInfo";
import Pagination from "./components/Pagination/Pagination";
import InitialState from "./components/pages/InitialState";

const App = () => {
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'user':
        return {
          ...state,
          user: action.data
        }
      case 'repos':
        return {
          ...state,
          repos: action.data
        }
        default:
          return state;
    }
  }, { user: {}, repos: [] })

  return (
    <div>
      <Header dispatch={dispatch} setLoading={setLoading} />
      <ResultPanel
        left={<UserInfo user={state.user} loading={loading} />}
        right={<RepositoryList user={state.user} repos={state.repos} loading={loading} />}
      />
      <Pagination perPage={perPage} totalRepos={state.repos.length} />
    </div>
  ) 
};

export default App;
