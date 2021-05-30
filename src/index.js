import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import useDebounce from "./use-debounce";
import Header from "./components/header";
import RepositoryList from "./components/repository-list";
import ResultPanel from "./components/result-panel";
import UserInfo from "./components/user-info";
import Pagination from "./components/pagination";
import "./index.scss";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("gaearon");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      const getRepos = async () => {
        const response = await axios.get(
          `https://api.github.com/users/${debouncedSearchTerm}/repos`
        );
        setRepos(response.data);
        console.log(response);
        setLoading(false);
      };
      const getUser = async () => {
        const response = await axios.get(
          `https://api.github.com/users/${debouncedSearchTerm}`
        );
        console.log(response);
        setUser(response.data);
        setLoading(false);
      };
      getUser();
      getRepos();
    }
  }, [debouncedSearchTerm]);
 
  return (
    <div>
      <Header searchTerm={searchTerm} setsearchTerm={setSearchTerm}/>
      <ResultPanel
        left={<UserInfo user={user} loading={loading}/>}
        right={<RepositoryList user={user} repos={repos} loading={loading} />}
      />
      <Pagination perPage={perPage} totalRepos={repos.length}/>
       <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
