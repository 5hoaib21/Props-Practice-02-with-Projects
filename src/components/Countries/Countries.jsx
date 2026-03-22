import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
   const newVisitedFlags = [...visitedFlags , flag];
   setVisitedFlags(newVisitedFlags)
  }


  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div className="countriesContainer">
      <h2>Hi i'm from Countries {countries.length}</h2>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <h3>Total Visited Flags: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div>{
        visitedFlags.map((flag, i) => <img key={i} className="vFlags" src={flag}></img>)
      }</div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
