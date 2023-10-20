import { useState } from "react"
import React from 'react'


export default function TextForms(props) {
    const [Value, setValue] = useState("PLEASE ENTER A NEW TEXT")
    const [BtnText, setText] = useState("Dark Mode");
    const [myStyle, setStyle] = useState({
        backgroundColor: "white",
        color: "black"
    });
    const [myClass, setClass] = useState("btn btn-dark my-4 mx-2");



    const handlechange = (event) => {
        setValue(event.target.value)
    }

    const handleRClick = () => {
        //console.log("UPPER CASE BUTTON WAS CLICKED")
        setValue("");
        props.setAlert({ msg: "Refresh", type: "success" });
        setTimeout(() => {
            props.setAlert(null);
        }, 1000);
    }
    const handleUPClick = () => {
        //console.log("UPPER CASE BUTTON WAS CLICKED")
        setValue(Value.toUpperCase());
        props.setAlert({ msg: "Changed to UPPER CASE", type: "success" });
        setTimeout(() => {
            props.setAlert(null);
        }, 1000);
    }
    const handleLOClick = () => {
        //console.log("UPPER CASE BUTTON WAS CLICKED")
        setValue(Value.toLowerCase());
        props.setAlert({ msg: "Changed to lower case", type: "success" });
        setTimeout(() => {
            props.setAlert(null);
        }, 1000);
    }
    const darkModeEnable = () => {
        toggleMode();
        btnClick();
        changeButton();
    }

    const toggleMode = () => {
        if (myStyle.color === "white") {
            setStyle({
                backgroundColor: "white",
                color: "black"

            });
            props.setAlert({ msg: "Light mode enabled in text-window", type: "success" });
            setTimeout(() => {
                props.setAlert(null);
            }, 1000);
        }
        else {
            setStyle({
                backgroundColor: "#222831",
                color: "white"
            });
            props.setAlert({ msg: "Dark mode enabled in text-window", type: "success" });
            setTimeout(() => {
                props.setAlert(null);
            }, 1000);
        }
    }
    const btnClick = () => {
        if (BtnText === "Dark Mode") {
            setText("Light Mode");
        }
        else {
            setText("Dark Mode");
        }
    }
    const changeButton = () => {
        if (myClass === "btn btn-dark my-4 mx-2") {
            setClass("btn btn-light my-4 mx-2");
        }
        else {
            setClass("btn btn-dark my-4 mx-2");
        }
    }
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Text copied to clipboard");

    }
    const countWords = (text) => {
        // Trim leading and trailing white spaces and then split the text using one or more whitespace characters as the delimiter
        const wordsArray = text.trim().split(/\s+/);

        // Filter out empty strings that might occur in the array due to empty text.
        const nonEmptyWordsArray = wordsArray.filter(word => word !== '');

        // Return the count of non-empty words
        return nonEmptyWordsArray.length;
    }
    const countCharacters = (text) => {
        const Chars = text.trim().split(/\s+/);
        const res = Chars.join("");
        return res.length;
    }

    return (

        <>
            <h1 style={myStyle} className="text-center">{props.heading}</h1>
            <div className="mb-3" style={myStyle}>

                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={20}
                    value={Value} onChange={handlechange}
                    style={myStyle} />
                <button disabled={Value.length === 0} type="button" className="btn btn-primary my-4" onClick={handleRClick}>Refresh </button>
                <button disabled={Value.length === 0} type="button" className="btn btn-success my-4 mx-2" onClick={handleUPClick}>UPPER-CASE </button>
                <button disabled={Value.length === 0} type="button" className="btn btn-danger my-4 " onClick={handleLOClick}>lower-case </button>
                <button  type="button" className={myClass} onClick={darkModeEnable} >{BtnText}</button>
                <button disabled={Value.length === 0} type="button" className="btn btn-primary my-4" onClick={handleCopy}>Copy Text</button>

            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text analytics:</h1>
                <ul>
                    <li>{countWords(Value)} words.</li>
                    <li>{countCharacters(Value)} characters.</li>
                    <li>{0.008 * countWords(Value)} min read.</li>
                </ul>
                <hr />
                <h2>Preview</h2>
                <p>{countCharacters(Value) > 0 ? Value : "Enter something to preview here"}</p>
            </div>
        </>
    )
}


//style={{color:condition-test}}