import React from 'react'
import SearchBar from '../../Components/UI/SearchBar/SearchBar'

function layout(props){
    return(
        <>
        <SearchBar inputText={props.inputText} searchClick={props.searchClick}/>
        </>
    )
}

export default layout