import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  return (
    <div className="country">
      <img src={country?.flags?.flags?.png} alt="" />
      <h2>Name: {country.name.common}</h2>
      <h3>Capital: {country.capital.capital}</h3>
      <h3>Population: {country.population.population}</h3>
      <p>Languages: {Object.values(country.languages.languages).join(", ")}</p>
      <p>
        Currency:{" "}
        {Object.values(country.currencies.currencies)
          .map((cur) => cur.name)
          .join(", ")}
      </p>
    </div>
  );
};

export default Country;
