import React from "react";
import './ShipCard.css'

function shipCard(props) {
  return (
    <>
      <div className="ship-container">
      <div className="ship-card-container">
      <div className="ship-image-cont">
        <img src={props.image} alt="ship" className="ship-image"/>
      </div>
      <div className="ship-info">
        <div className="ship-name">{props.shipName}</div>
        <div className="ship-port-info">
          <p className="ship-port-tag">PORT:</p>
          <p className="ship-port-name">{props.portName}</p>
        </div>
      </div>

      </div>
    </div>
    </>
  );
}

export default shipCard;
