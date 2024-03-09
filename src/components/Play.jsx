import React from 'react'
import {
    useParams,
    useLocation
  } from "react-router-dom";


const Play = () => {
    
    let params = useParams();
    let location = useLocation();
    
    console.log(params)

  return (
    <div>Play</div>
  )
}

export default Play