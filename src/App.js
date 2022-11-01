import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer footerAddress={address} />
    </div>
  );
};

export default App;
