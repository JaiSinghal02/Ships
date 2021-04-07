import React, { useEffect,useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import ShipBuilder from './Containers/ShipBuilder/ShipBuilder'
import Layout from './Containers/Layout/Layout'
import Logo from './Components/UI/Logo/Logo'
import {connect} from 'react-redux'
import * as actionTypes from './store/actions/actions'
import { printIntrospectionSchema } from "graphql";
import "./App.css"

function App(props) {
  const fetchShips = async () => {
    const response = await request(gql`
      {
        ships {
          name
          home_port
          image
        }
      }
    `);
    console.log(response);
    props.setShipsData(response.data.ships)
    setShip(response.data.ships)
  };

  const [fieldText,changeFieldText]=useState("")
  const [constShip,setShip]=useState([])
  const inputText=(e)=>{
    // console.log("TEXT->",e.target.value)
    changeFieldText(e.target.value)
  }
  const searchClick=()=>{
    // console.log("TEXT->",e.target.value)
    if(fieldText){
      if(constShip){
        let count=0,newShips=[]
        constShip.forEach(element => {
          if(element.name.toLowerCase().trim().includes(fieldText.toLowerCase().trim())){
              count+=1
              newShips.push(element)
          }
        });
        props.setShipsData(newShips)
        props.setShipsCount(count)
      }
    }
    else{
      props.setShipsData(constShip)
    }
  }
  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <div className="App">
      <Logo/>
      <Layout inputText={inputText} searchClick={searchClick}/>
      <div className="ships-counter-container">
        <div className="ships-counter-div">
        {props.ships?<h5 className="ships-counter">{`TOTAL COUNT  :  ${props.shipsCount}`}</h5>:null}
        </div>
        </div>
      <ShipBuilder shipsData={props.ships}/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ships: state.ships,
    shipsCount: state.shipsCount
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setShipsData: (shipsData) =>
      dispatch({ type: actionTypes.SET_SHIPS_DATA, ships: shipsData }),
    setShipsCount: (count)=>dispatch({ type: actionTypes.SET_SHIPS_COUNT, count:count })
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App)
