import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import '../styles.css';

export default function People({ match }) {
  
  const [ results, setResult ] = useState([]);

  useEffect(() => {
    async function load() {
      const params = (match.params.starships);
      const response = await api.get(`${params}`);
      
      //console.log(response.data.results);

      setResult(response.data.results);
    }
    load();
  }, [match.params.starships]);
  
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
                  <p>Model</p>
                  {result.model}
                </div>

                <div className="card__status">
                  <p>Cost</p>
                  {result.cost_in_credits}
                </div>

                <div className="card__status">
                  <p>Length</p>
                  {result.length}
                </div>

                <div className="card__status">
                  <p>Speed</p>
                  {result.max_atmosphering_speed}
                </div>
                
                <div className="card__status">
                  <p>Crew</p>
                  {result.crew}
                </div>

                <div className="card__status">
                  <p>Passengers</p>
                  {result.passengers}
                </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}