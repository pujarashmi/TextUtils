import React from 'react'

export default function About(props) {
    
    let myStyle = {
        color: props.mode === 'light'?'black': 'white',
        backgroundColor: props.mode 
    }
   
    return (
        <div className = {`container bg-${props.mode}`} style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Analyze your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode}`} style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. it contain word count, letter count etc.
                        </div>
                    </div>
                </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={`accordion-button collapsed bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Brouser Compatibility</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className={`accordion-body bg-${props.mode}`} style={myStyle}>
                                This software will work on any web brouser. 
                            </div>
                        </div>
                    </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode}`} style={myStyle}>
                            Textutils is a free charecter counter tool that provides instant character count, conver lower to upper case and upper to lower case and other things.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
