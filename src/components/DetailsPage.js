import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsHeader from './DetailsHeader';

const CountryDetails = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <DetailsHeader countryName={data.name} />
      <div className="container-flex">
        {/* <h2>{data.name}</h2> */}
        <div className="details-flex">
          <div className="flag-img">
            <img src={data.flag} alt={data.name} className="details-img" />
          </div>

          <div className="details-text">
            {
                            data.nativeName
                              ? (
                                <p>
                                  Native name:
                                  <span className="dim">{data.nativeName}</span>
                                </p>
                              ) : ''
                        }

            {
                            data.region
                              ? (
                                <p>
                                  Region:
                                  <span className="dim">{data.region}</span>
                                </p>
                              ) : ''
                        }

            {
                            data.subregion
                              ? (
                                <p>
                                  Sub-Region:
                                  <span className="dim">{data.subregion}</span>
                                </p>
                              ) : ''
                        }

            {
                            data.capital
                              ? (
                                <p>
                                  Capital:
                                  <span className="dim">{data.capital}</span>
                                </p>
                              ) : ''
                        }

          </div>
          <div className="details-text">
            {
                            data.timezones
                              ? (
                                <p>
                                  Timezones:
                                  {data.timezones.map((time) => <span className="details-badge" key={time}>{time}</span>)}
                                </p>
                              ) : ''
                        }

            {
                            data.topLevelDomain
                              ? (
                                <p>
                                  Top Level Domain:
                                  <span className="dim">{data.topLevelDomain[0]}</span>
                                </p>
                              ) : ''
                        }

            {
                            data.languages
                              ? (
                                <p>
                                  Languages:
                                  {data.languages.map((language) => <span className="details-badge" key={language.name}>{language.name}</span>)}
                                </p>
                              ) : ''
                        }

            {
                            data.borders
                              ? (
                                <p>
                                  Border Countries:
                                  {data.borders.map((border) => <span className="details-badge" key={border}>{border}</span>)}
                                </p>
                              ) : ''
                        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
