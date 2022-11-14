import moment from "moment/moment";
import CustomerProfile from "./CustomerProfile";
import React, { useEffect, useState } from "react";

const SearchResults = (props) => {
  // console.log(props);
  const [clickedRow, SetClickedRow] = useState();

  const [customerId, setCustomerId] = useState(-1);

  function handleRowClicked(index) {
    // which element is going to clicked
    //console.log("clicked");
    SetClickedRow(index);
    console.log(clickedRow);
  }

  const showProfile = (customerId) => {
    setCustomerId(customerId);
    //   console.log(customerId);

    useEffect;
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First-Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room-ID</th>
            <th scope="col">Check-In-Date</th>
            <th scope="col">Check-Out-Date</th>
            <th scope="col">NumberOfNights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => (
            <tr
              key={index}
              onClick={() => handleRowClicked(index)}
              className={clickedRow == index ? "highlight" : null}
            >
              {result.id}
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {totalNumberOfNights(result.checkOutDate, result.checkInDate)}
              </td>
              <td>
                <button onClick={() => showProfile(result.id)}>
                  Show Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {customerId > -1 ? <CustomerProfile customerId={customerId} /> : null}
    </div>
  );
};

function totalNumberOfNights(left, entrance) {
  let checkOutDate = moment(left);
  let checkInDate = moment(entrance);
  return checkOutDate.diff(checkInDate, "days");
}

export default SearchResults;
