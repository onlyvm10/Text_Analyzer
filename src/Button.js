import React from 'react'
import App from './App';

export default function Button(props) {
  const handleUpclick = () =>{
    console.log("Upper Case Was Clicked");
  }


  return (
   
   <>
      <button type="button" className="btn btn-info" onClick={handleUpclick}>{props.text}</button>
      </>
  )
}
