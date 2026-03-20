import React from 'react';

const Country = ({country}) => {
  console.log(country);
  return (
    <div>
      <h3>Name: {country.name}</h3>
    </div>
  );
};

export default Country;