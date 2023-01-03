import React from "react";
import { useEffect, useState } from "react";
import { getCountries } from "./services/notes/countries/getCountries";

const FilteredCountries = ({ countries, countryTofind }) => {
  const foundCountries = countries.filter((country) => {
    return country.name.official.toLowerCase().includes(countryTofind.toLowerCase());
  });

  console.log(
    "🚀 ~ file: AppCountries.jsx ~ line 11 ~ foundCountries ~ foundCountries",
    foundCountries
  );
  return (
    <>
      {foundCountries.length > 10 && countryTofind.length !== 0 && (
        <p>Too Many matches, specify another filter</p>
      )}
      {foundCountries.length <= 10 &&
        foundCountries.length !== 0 &&
        foundCountries.map((country) => {
          return (
            <ol>
              <li>{country.name.official}</li>
            </ol>
          );
        })}
    </>
  );
};

const AppCountries = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountryToSearch] = useState("");
  console.log(
    "🚀 ~ file: AppCountries.jsx ~ line 26 ~ AppCountries ~ country",
    country
  );

  useEffect(() => {
    getCountries().then((countries) => {
      console.log(
        "🚀 ~ file: AppCountries.jsx ~ line 13 ~ .then ~ countries",
        countries
      );
      console.log("promise of countries");
      setCountries(countries);
    });
  }, []);

  const handleCountryToFind = (event) => {
    event.preventDefault();
    setCountryToSearch(event.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      find countries
      <input type="text" onChange={handleCountryToFind} value={country}></input>
      <FilteredCountries countries={countries} countryTofind={country} />
    </div>
  );
};

export default AppCountries;
