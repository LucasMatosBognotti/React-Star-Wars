import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Home() {
  
  return (
    <> 
      <div className="titles">
        <h1>STAR WARS</h1>
        <h2>SEARCH THROUCH YOUR FAVORITE STAR WARS CATEGORIES!!</h2>
      </div>
      <div className="btns">
        <Link to={`/people/people`} >People</Link>
        <Link to={`/planets/planets`} >Planets</Link>
        <Link to={`/films/films`}>Films</Link>
        <Link to={`/species/species`}>Species</Link>
        <Link to={`/vehicles/vehicles`}>Vehicles</Link>
        <Link to={`/starships/starships`}>Starships</Link>
      </div>

    </>
  );
}