import React from 'react'
import LogoImage from '../../../assets/images/logo.png'
import './Logo.css'

export default function logo(){
    return(
        <div className="logo-container">
            <div className="logo-div">
        <img src={LogoImage} alt="logo" className="logo-image"/>

            </div>
        </div>
    )
}