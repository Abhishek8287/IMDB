import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { categoriesMovies } from "../services/api";
import { nowplaying_api_url } from "../assets/Constants";
function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await categoriesMovies(nowplaying_api_url);
      setMovies(response);
    };
    getData();
  }, []);
  return <Header />;
}

export default Home;
