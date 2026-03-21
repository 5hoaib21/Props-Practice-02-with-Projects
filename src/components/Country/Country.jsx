import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if(visited){
    //   setVisited(false)
    // } else{

    //   setVisited(true)
    // }

    // setVisited(visited ?  false : true)
    setVisited(!visited);
 handleVisitedCountries(country)
  };
  return (
    <div className={`country ${visited && "countryVisited"}`}>
      <img src={country?.flags?.flags?.png} alt="" />
      <h2>Name: {country.name.common}</h2>
      <h3>Capital: {country.capital.capital}</h3>
      <h3>Population: {country.population.population}</h3>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited} className="counter">
        {visited ? "visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
