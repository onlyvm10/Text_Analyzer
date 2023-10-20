import React from 'react'
import Me2 from './Images/Me2.jpeg'; 
export default function About(props) {
    const myStyle = {
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#212529':'white'
    }
    return (
        <div className="container">
            <div className="card text-center mx-auto" style={{ width: "30rem" }}>
                <img src={Me2} className="card-img-top" alt="" />
                <div className="card-body" style={myStyle}>
                    <h1 className="card-title">Vatsal Mishra</h1>
                    <h3 className="card-text">
                       Vatsal is a graduate proficient in C, C++, and Data Structures with expertise in Operating Systems and Database Management Systems. 
                       He also has strong foundation in web development basics. 
                    </h3>
                    <a href="https://www.linkedin.com/in/vatsal-mishra-a852981b1/" className="btn btn-primary">
                        LinkedIn
                       
                    </a>
                </div>
            </div>
        </div>
    )
}
