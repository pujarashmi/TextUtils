import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapClick = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText);
    }
    const handleCopyClick = ()=>{
            navigator.clipboard.writeText(text);          
            alert("Copied the text: " + text);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode=== 'light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: 'white'}}></textarea>
            </div> 
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleUpClick} disabled={text.length===0} >Covert Into Upper Case</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={handleLoClick} disabled={text.length===0} >Covert Into Lower Case</button>
            <button type="button" className="btn btn-warning mx-2 my-1" onClick={handleCapClick} disabled={text.length===0} >Captilize Case</button>
            <button type="button" className="btn btn-info mx-2 my-1" onClick={handleClearClick} disabled={text.length===0} >Clear</button>
            <button type="button" className="btn btn-info mx-2 my-1" onClick={handleCopyClick} disabled={text.length===0} >Copy to ClipBoard</button>
        </div>
        <div className="container my-4" style={{color:props.mode=== 'light'?'black':'white'}}>
            <h1>Your Test Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to prev it"}</p>
        </div>
        </>
    )
}
