import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import '../styles.css';

export default function Planet({ match }) {
  
  const [ results, setResult ] = useState([]);

  useEffect(() => {
    async function load() {
      const params = (match.params.planets);
      const response = await api.get(`${params}`);
      
      //console.log(response.data.results);

      setResult(response.data.results);
    }
    load();
  }, [match.params.planets]);
  
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
                  <p>Rotation</p>
                  {result.rotation_period}
                </div>

                <div className="card__status">
                  <p>Orbital</p>
                  {result.orbital_period}
                </div>

                <div className="card__status">
                  <p>Diameter</p>
                  {result.diameter}
                </div>

                <div className="card__status">
                  <p>Climate</p>
                  {result.climate}
                </div>
                
                <div className="card__status">
                  <p>Gravity</p>
                  {result.gravity}
                </div>

                <div className="card__status">
                  <p>water</p>
                  {result.surface_water}
                </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}