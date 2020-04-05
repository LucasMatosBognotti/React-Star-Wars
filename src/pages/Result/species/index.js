import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import '../styles.css';

export default function People({ match }) {
  
  const [ results, setResult ] = useState([]);

  useEffect(() => {
    async function load() {
      const params = (match.params.species);
      const response = await api.get(`${params}`);
      
      //console.log(response.data.results);

      setResult(response.data.results);
    }
    load();
  }, [match.params.species]);
  
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
                  <p>Class</p>
                  {result.classification}
                </div>

                <div className="card__status">
                  <p>Language</p>
                  {result.language}
                </div>

                <div className="card__status">
                  <p>Design</p>
                  {result.designation}
                </div>

                <div className="card__status">
                  <p>Height</p>
                  {result.average_height}
                </div>

                <div className="card__status">
                  <p>Skin Color</p>
                  {result.skin_colors}
                </div>
                
                <div className="card__status">
                  <p>Average</p>
                  {result.average_lifespan}
                </div>

            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}