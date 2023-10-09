import React from 'react'

function About(props) {

    let myStyle = {
        color: props.mode==='dark'?'white':'#021624',
        backgroundColor: props.mode==='dark'?'#021624':'white',
    }
 
//    const [myStyle, setmyStyle] = useState( 
//         {
//             color:'black',
//             backgroundColor: 'white',
            
//         }
//     );
    
    // const [BtnText, setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color==='white'){
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor: 'white',
               
    
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{ 
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor: 'black',
    //             border: '0.3px solid white'
    
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    
    // }
        
    
      return (
        <div className ="container" style={myStyle}>
            <h2 className=" my-3"> About Us</h2>
                    <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item"style={myStyle} >
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h5># Analyze Your Text</h5>  
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                   <p>You can do multiple things with your text using this website.</p>  
                    </div>
                </div>
                </div> 
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button " type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <h5># Free To Use</h5>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                     <p>It is easy to use and user friendly.</p>
                    </div>
                </div>
                </div>
                <div className="accordion-item"style={myStyle} >
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button " type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <h5># Browser Compatible</h5>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle} >
                  <p>It can be opened in any browser.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default About