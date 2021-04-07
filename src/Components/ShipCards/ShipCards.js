import React from "react";
import ShipCard from "./ShipCard/ShipCard";
import * as actionTypes from '../../store/actions/actions'
import {connect} from 'react-redux'

function shipCards(props) {
  let cards = null;
  let count=0;
  if(props.shipsData){
    cards = props.shipsData.map((val,index) => {
      count+=val.image?1:0;
        return (val.image?<ShipCard shipName={val.name}
        portName={val.home_port}
        image={val.image}
        key={index}
      />:null);
    });
    props.setShipsCount(count)

  }
  return (
    <div>
      {cards}
    </div>
  );
}

const mapDispatchToProps = dispatch=>{
  return{
    setShipsCount: (count)=> dispatch({type: actionTypes.SET_SHIPS_COUNT,count:count})
  }
}

export default connect(null,mapDispatchToProps)(shipCards);
