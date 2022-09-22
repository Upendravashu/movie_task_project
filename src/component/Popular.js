import axios from "axios";
import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const fetchFunction = async () => {
    try {
      const getUrl = await axios.get(
        "https://www.omdbapi.com/?i=&s=%27Hollywood%27&page=2&apikey=2f083b30"
      );
      setMovies(getUrl.data.Search.slice(0, 8));
    } catch (error) {
      console.log(error, "Network type of error");
    }
  };
  useEffect(() => {
    fetchFunction();
  }, []);
  return (
    <React.Fragment>
      <div className="container md-3">
        <div className="row" style={{ margin: "2em" }}>
          <h3>Popular Movies</h3>
          {movies.map((user) => {
            return (
              <div className="col-md-4" key={user.imdbID}>
                <MoviesCard
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

export default Popular;
