import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import "./App.css";

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchResults />
      <Footer footerAddress={address} />
    </div>
  );
};

export default App;
