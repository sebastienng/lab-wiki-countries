import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const CountryDetails = (props) => {
  const countryDetail = props.infos;

  const style = {
    width: '30%',
  };

  function getCountry(code) {
    const temp = countryDetail.bordersFullName.find(
      (e) => e.alpha3Code === code
    );

    return temp;
  }
  function getBorderName(name) {
    const temp = countryDetail.bordersFullName.find(
      (e) => e.alpha3Code === name
    );

    return temp.name.common;
  }
  function displayBorder(listOfBorder) {
    if (listOfBorder.length < 0) {
      return <li> No border</li>;
    }

    return listOfBorder.map((country) => {
      return (
        <li>
          <Link
            key={country}
            to={'/' + country}
            onClick={() => props.updateDetail(getCountry(country))}
          >
            {getBorderName(country)}
          </Link>
        </li>
      );
    });
  }

  return (
    <div className="col-7">
      <div className="list-group">
        <h1>{countryDetail.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={style}>Capital</td>
              <td>{countryDetail.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetail.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{displayBorder(countryDetail.borders)}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
