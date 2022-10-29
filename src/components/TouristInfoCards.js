import React from "react";
//import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="firstCard">
        <img src="" className="card-img-top" />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="secondCard">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="thirdCard">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
