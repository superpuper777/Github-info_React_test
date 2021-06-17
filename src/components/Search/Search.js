import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.scss"
import useDebounce from "../../use-debounce";

const Search = ({ dispatch, setLoading, currentPage }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      const getRepos = async () => {
        const response = await axios.get(
          `https://api.github.com/users/${debouncedSearchTerm}/repos?&page=${currentPage}&per_page=25`
        );
        console.log(response)
        console.log(currentPage);
        dispatch({ data: response.data, type: "repos" });
        setLoading(false);
      };
      const getUser = async () => {
        const response = await axios.get(
          `https://api.github.com/users/${debouncedSearchTerm}`
        );
        dispatch({ data: response.data, type: "user" });
        setLoading(false);
      };
      getUser();
      getRepos();
    }
  }, [debouncedSearchTerm, setLoading, dispatch, currentPage]);
  return (
    <input
      className="search"
      type="text"
      value={debouncedSearchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
