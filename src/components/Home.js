import React from "react";
import Getpiffy from './images/Getpiffy.svg'

const Home = () => {
    return (
       <div className="home-container">
           <img className='home-logo' src={Getpiffy} alt="logo" />
          
        <h1 className='getpiffy-maintext'>GETPIFFY</h1>
 
       
        </div>
       
       
    );
}


export default Home;