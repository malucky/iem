import React from 'react';
import Card from '../components/Card';
import shows from '../data/shows';
import './Home.css';

const Home = () => {
  return (
    <section className="page Home">
      <ul className="show-list">
        {
          shows.map(show => (
            <li className="show-item">
              <Card data={show}/>
            </li>
          ))
        }
      </ul>
      {

      }
    </section>
  );
};

export default Home;
