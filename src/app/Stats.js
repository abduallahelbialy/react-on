import React from 'react'

function Stats() {
  return (
    <div className="stats" id="stats">
      <h2>Our Awesome Stats</h2>
      <div className="container">
        <div className="box">
          <i className="far fa-user fa-2x fa-fw"></i>
          <span className="number" data-gols="150">
            0
          </span>
          <span className="text">Clients</span>
        </div>
        <div className="box">
          <i className="fas fa-code fa-2x fa-fw"></i>
          <span className="number" data-gols="135">
            0
          </span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia fa-2x fa-fw"></i>
          <span className="number" data-gols="50">
            0
          </span>
          <span className="text">Countries</span>
        </div>
        <div className="box">
          <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
          <span className="number" data-gols="500">
            0
          </span>
          <span className="text">Money</span>
        </div>
      </div>
    </div>
  );
}

export default Stats