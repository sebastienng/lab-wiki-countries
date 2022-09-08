import './App.css';
import countries from './countries.json';
import { Navbar } from './component/Navbar';
import { CountriesList } from './component/CountriesList';
import { CountryDetails } from './component/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [currentCountry, setCurrentCountries] = useState({
    name: '',
    code: '',
    capital: '',
    area: '',
    borders: [],
    bordersFullName: [],
  });

  const updateDetail = (country) => {
    setCurrentCountries({
      name: country.name.common,
      code: country.alpha3Code,
      capital: country.capital[0],
      area: country.area,
      borders: country.borders,
      bordersFullName: countries.filter((c) =>
        country.borders.includes(c.alpha3Code)
      ),
    });
    console.log(currentCountry);
  };
  return (
    <div className="App">
      <Navbar title="WikiCountries" />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} updateDetail={updateDetail} />
          <Routes>
            {countries.map((country) => {
              return (
                <Route
                  key={country.alpha3Code}
                  path="/:alpha3Code"
                  element={
                    <CountryDetails
                      infos={currentCountry}
                      updateDetail={updateDetail}
                    />
                  }
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
