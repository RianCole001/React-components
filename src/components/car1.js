import React from "react";
import ReactDOM from 'react-dom/client';
function car1(props){
return(
    <>
    
    <h2>i am a prop {props.brand} </h2>
    <h2>my milage is {props.milage}</h2>
    
    
     </>
    
)


}
function Garage(){
return(
<>
<h1>Who lives in my garage?</h1>

<car1ar1 brand="Ford" />
<car1 milage="400km" />

</>

);


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

export default car1;
