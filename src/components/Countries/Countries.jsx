import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  const handleVisitedCountries =(country) =>{
   
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
  }
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries


  return (

    <div className='countriesContainer'>
      <h2>Hi i'm from Countries {countries.length}</h2>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>
      <div className='countries'>
      {
     countries.map(country => <Country 
     key={country.cca3.cca3}
     handleVisitedCountries={handleVisitedCountries}
      country={country}
      ></Country>)
      }
    </div>
    </div>
  );
};

export default Countries;