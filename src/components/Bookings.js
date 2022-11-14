import React, { useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const filteredBooking =
      bookings.filter((booking) => booking.firstName == searchVal) ||
      booking.surname == searchVal;

    console.log(filteredBooking);

    setBookings(filteredBooking);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      //  .then((data) => console.log(data));
      .then((data) => setBookings(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
