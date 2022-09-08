import React from 'react';
import { Link } from 'react-router-dom';
export const CountriesList = (props) => {
  const style = {
    maxHeight: '90vh',
    overflow: 'scroll',
  };
  const style2 = {
    width: '54px',
    height: '38px',
    textAlign: 'center',
  };

  return (
    <div className="col-5" style={style}>
      <div className="list-group">
        {props.countries.map((country) => {
          const srcFLag =
            'https://flagpedia.net/data/flags/icon/72x54/' +
            country.alpha2Code.toLowerCase() +
            '.png';

          return (
            <>
              <Link
                key={country.alpha3Code}
                to={'/' + country.alpha3Code}
                className="list-group-item list-group-item-action"
                onClick={() => props.updateDetail(country)}
              >
                <img src={srcFLag} style={style2} alt="flag" />{' '}
                {country.name.common}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
