import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
  const [visitedCountries, setVisitedCountries] = useState([])
  const handleVisitedCountries =(country) =>{
    console.log('handle visited country clicked', country);
  }
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries


  return (

    <div className='countriesContainer'>
      <h2>Hi i'm from Countries {countries.length}</h2>
      <h3>Total Country Visited: </h3>
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