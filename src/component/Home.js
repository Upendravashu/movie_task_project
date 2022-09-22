import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const fetchFunction = async () => {
    try {
      const getUrl = await axios.get(
        "https://www.omdbapi.com/?i=&s=%27game%27&page=1&apikey=2f083b30"
      );
      console.log(getUrl.data.Search);
      setMovie(getUrl.data.Search.slice(0, 8));
    } catch (error) {
      console.log(error, "network type  error");
    }
  };
  useEffect(() => {
    fetchFunction();
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row" style={{ margin: "2em" }}>
          {movie.map((user) => {
            return (
              <div className="col-md-4" key={user.imdbID}>
                <MovieCard
                  Title={user.Title}
                  Year={user.Year}
                  Poster={user.Poster}
                />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
