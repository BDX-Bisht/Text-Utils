import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase Was Click " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success")
    }
    const handleDownChange = () => {
        // console.log("LowerCase Was Click " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const clearText = () => {
        setText("")
        props.showAlert("Clear all the text.!", "danger")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "warning")
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed all the extra spaces.!", "info")
    }

    const [text, setText] = useState("")
    // setText("New text here.");

    return (
        <>
            <div className="container" style={{ border: '1px solid', borderRadius: '10px', padding: '10px 25px' }}>
                <h2>{props.heading}</h2>
                <div className="my-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="4" style={{ border: '1px solid' }} ></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.btnSet} mx-1 my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.btnSet} mx-1 my-1`} onClick={handleDownChange}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.btnSet} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.btnSet} mx-1 my-1`} onClick={clearText}>Click to Clear</button>
                <button disabled={text.length === 0} className={`btn btn-${props.btnSet} mx-1 my-1`} onClick={removeExtraSpace}>Remove Extra Soaces</button>
                <div className="container-fluid p-0 my-3">
                    <h3>Your text Summary</h3>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters..</p>
                    <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} : Minutes to read above text.</p>
                    <h2>Preview : </h2>
                    <p>{text.length > 0 ? text : "Nothing to preview."}</p>
                </div>
            </div>
        </>
    )
}

TextForm.protoTypes = {
    heading: PropTypes.string.isRequired
}
