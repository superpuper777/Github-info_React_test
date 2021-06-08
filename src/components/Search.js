import React, { useState, useEffect } from "react";
import axios from "axios";
import "./header.scss";
// import useDebounce from "./use-debounce";

const Search = ({ dispatch, setLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const getRepos = async () => {
        const response = await axios.get(
          `https://api.github.com/users/${searchTerm}/repos`
        );
        dispatch({ data: response.data, type: "repos" });
        setLoading(false);
      };
      const getUser = async () => {
        const response = await axios.get(
          `https://api.github.com/users/${searchTerm}`
        );
        dispatch({ data: response.data, type: "user" });
        setLoading(false);
      };
      getUser();
      getRepos();
    }
  }, [searchTerm, setLoading, dispatch]);
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
