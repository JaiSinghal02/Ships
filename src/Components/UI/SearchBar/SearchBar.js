import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actions";
import SearchIcon from '../../../assets/images/search-icon.png'
import './SearchBar.css'
function searchBar(props) {
  let searchOnEnter= (e)=>{
    if(e.key==='Enter'){
      props.searchClick()
    }
  }
  return (
    <div className="search-bar-container">
      <div className="search-bar-div">
      <input type="text" 
      placeholder="Search ships" 
      className="search-bar"
      onChange={props.inputText}
      onKeyPress={(e)=>searchOnEnter(e)}
      spellCheck="false"
      >
      </input>
      <div className="search-icon-cont">
        <img src={SearchIcon} alt="search-icon" 
        className="search-icon-img"
        onClick={props.searchClick}
        
        />
        </div>
      </div>
      
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (searchName) =>
      dispatch({ type: actionTypes.SET_SEACRH_NAME, searchName: searchName })
  };
};
export default connect(null, mapDispatchToProps)(searchBar);
