import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import '../styles.css';

export default function People({ match }) {
  
  const [ results, setResult ] = useState([]);

  useEffect(() => {
    async function load() {
      const params = (match.params.people);
      const response = await api.get(`${params}`);
      
      //console.log(response.data.results);

      setResult(response.data.results);
    }
    load();
  }, [match.params.people]);
  
  return (
    <>
      <div className="title">
        <h1>STAR WARS</h1>
        <p>SEARCH FOR YOU FAVORITE PEOPLE</p>
      </div>
      
      <div className="btn"><Link to="/" >To Back</Link></div>

      <ul className="cards">
        {results.map(result => (
          <li key={result.name} className="cards__item">
            <div className="card">
              <div className="card__content">

                <div className="card__title">
                  {result.name}
                </div>
                
                <div className="card__status">
                  <p>Height</p>
                  {result.height}
                </div>

                <div className="card__status">
                  <p>Mass</p>
                  {result.mass}
                </div>

                <div className="card__status">
                  <p>Hair Color</p>
                  {result.hair_color}
                </div>

                <div className="card__status">
                  <p>Skin Color</p>
                  {result.skin_color}
                </div>
                
                <div className="card__status">
                  <p>Birth Year</p>
                  {result.birth_year}
                </div>

                <div className="card__status">
                  <p>Gender</p>
                  {result.gender}
                </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}