import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import useDebounce from "./use-debounce";
import Header from "./components/header";
import RepositoryList from './components/repository-list';
import ResultPanel from './components/result-panel';
import UserInfo from "./components/user-info";
import Pagination from './components/pagination';
import "./index.scss";


const App = () => {
  const repos = [
    { label: "repo1" , description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old" },
    { label: "repo2", description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of" },
    { label: "repo3", description: "Contrary to popular belief, Lorem Ipsum is not simply"},
    { label: "repo4", description: "Contrary to popular belief, Lorem Ipsum" }
  ];
  const [data, setData] = useState({
    hits: [],
  });
  const [searchTerm, setsearchTerm] = useState("redux");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      async function fetchData() {
        const result = await axios(`https://hn.algolia.com/api/v1/search?query=${debouncedSearchTerm}`);
        const response = await axios(`https://api.github.com/users/${debouncedSearchTerm}/repos`);
        console.log(response);
        setIsSearching(false);
        setData(result.data);
      }
      fetchData();
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <Header />
      <ResultPanel
        left={
          <UserInfo />
        }
        right={
          <RepositoryList repos={repos} />
        }
      />
      <Pagination />
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setsearchTerm(event.target.value)}
      />
      <ul>
        {data.hits.map((item, index) => (
          <li key={index}>
            <a href={item.url}> {item.title} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
