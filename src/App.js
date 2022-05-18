import React, { useState, useEffect } from "react";
import Title from "./Components/Title";
import SearchMovies from "./Components/SearchMovies";
import TrendingMovies from "./Components/TrendingMovies";
import "./styles.css";

// HOT TO GET API KEY
// Signin or Register at https://www.themoviedb.org/signup
// Under the Account icon, click Settings
// On the API page, click on the link under the Request an API Key section.
// Register an API key as a Developer
// Agree to the terms of use and fill in the required information:
// You will see an API key displayed under API Key (v3 auth). Copy the key and paste it to the APIKEY field below

const APIKEY = "your api key inside the qoutes";
export default function App() {
  const [trending, setTrending] = useState([]);
  const url = `https://api.themoviedb.org/3/search/trending?api_key=${APIKEY}&language=en-US&media_type=tv&time_window=day`;

  useEffect(() => {
    const data = async () => {
      const trendingUrl = url;

      let response = await fetch(trendingUrl);
      let data = await response.json();

      setTrending(data.results);
    };
    data();
  }, [setTrending, url]);

  return (
    <div className="container">
      <Title />
      <SearchMovies />
      <TrendingMovies trending={trending} />
    </div>
  );
}
