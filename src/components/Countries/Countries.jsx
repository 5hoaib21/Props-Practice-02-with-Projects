import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries


  return (
    <div className='countries'>
      <h2>Hi i'm from Countries {countries.length}</h2>
      {
     countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
      }
    </div>
  );
};

export default Countries;