import React from 'react'
import apple from './Images/apple-touch-icon.png'



export default function Home(props) {
    const myStyle = {
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#212529':'white'
    }
    return (
        <div className= "container"  >
        <div className="card text-center mx-auto" style={{ width: "30rem" }}>
            <img src={apple} className="card-img-top" alt=""/>
            <div className="card-body" style={myStyle}>
                <h1 className="card-title">Home-TextAnalyzer</h1>
                <h3 className="card-text">
                Text-Analyzer is a text utility app that provides various functions such as counting words, characters, its preview, changing case etc. It is built using Bootstrap v-5.3, JavaScript library 'React' and React-route v-6.3.4.
                </h3>
               
            </div>
        </div>
    </div>
    )
}
