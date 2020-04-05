import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import '../styles.css';

export default function Films({ match }) {
  
  const [ results, setResult ] = useState([]);

  useEffect(() => {
    async function load() {
      const params = (match.params.films);
      const response = await api.get(`${params}`);
      
      //console.log(response.data.results);

      setResult(response.data.results);
    }
    load();
  }, [match.params.films]);
  
  return (
    <>
      <div className="title">
        <h1>STAR WARS</h1>
        <p>SEARCH FOR YOU FAVORITE PEOPLE</p>
      </div>
      
      <div className="btn"><Link to="/" >To Back</Link></div>

      <ul className="cards">
        {results.map(result => (
          <li key={result.episode_id} className="cards__item">
            <div className="card">
              <div className="card__content">

                <div className="card__title">
                  {result.title}
                </div>
                
                <div className="card__status">
                  <p>Episode</p>
                  {result.episode_id}
                </div>

                <div className="card__status">
                  <p>Director</p>
                  {result.director}
                </div>

                <div className="card__status">
                  <p>Produce</p>
                  {result.producer}
                </div>

                <div className="card__status">
                  <p>Date</p>
                  {result.release_date}
                </div>

            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}