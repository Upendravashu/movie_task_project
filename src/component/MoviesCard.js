import React from "react";

const MoviesCard = (props) => {
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.Title}</h5>
          <p className="card-text">{props.Year}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoviesCard;
