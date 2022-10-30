import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="firstCard">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zuAhx0-haR0q2M7VxciZDNv9iW6kVAWoSg&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="secondCard">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVhoLOXKy4p8M6WMoe9xfCPvuN4YpQGZJeA&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="thirdCard">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzL9o_yKC4u2cHjJQMe5eEzauuk9Y_s3m9dg&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
