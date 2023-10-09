import React from 'react'
import { useState } from 'react';


function TextForm(props) {
  const [text, setText] = useState("");
  // const [alert, setAlert] = useState(null);
  const handleUpClick = ()=>{
      // console.log("UpperCase was Clicked");  
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper Case..!!","success");

      
  }
  const handleDownClick =()=>{
    // console.log("LowerCase was Clicked");
    let smallText=text.toLowerCase();
    setText(smallText);
    props.showAlert("Converted to Lower Case..!!","success");
    
}

const handleClearClick =()=>{
  let smallText=("");
  setText(smallText);
  props.showAlert("Text Cleared..!!","warning");
  
}
const handleSpeechClick = () => {
let msg = new SpeechSynthesisUtterance();
msg.text = text;
window.speechSynthesis.speak(msg);   // good useful function...................................
props.showAlert("Please listen to your entered text..!!","warning");
}

const handleCopyClick=()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard","success");
}

const handleExtraSpaces=()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert("Cleared extra Spaces","success");

}

// function handleBoldClick () {
//   let smallText=<b>{text.string}</b>

//   setText(smallText)

// }

  function handleOnChange(event) {
  // console.log("On Change");
  setText(event.target.value);
}

  
return (
  <>
  <div className="container" style={{color: props.mode===`light`?`#051725`:`white`}}>
      <h1> {props.heading}</h1>
        <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`light`?`white`:`#031229`, color: props.mode===`light`?`#051725`:`white`}} id="MyBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case </button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleDownClick}>Convert to Lower Case </button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopyClick}>Copy Text </button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleSpeechClick}>Speak </button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      
  </div>
  <div className="container my-3" style={{color: props.mode===`light`?`#051725`:`white`}}>
    <h1>Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes required to read this</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Nothing to preview here :)'}</p>
  </div>
  </>
  )
}

export default TextForm 