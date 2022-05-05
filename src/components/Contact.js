import React from "react";

const Contact = () => {

return (
    <div className="contact-form">
    <form action="mailto:mikepiff212@gmail.com" method="get" enctype="text/plain">
   
     <div >
      <label align="center"><h1>Get In Touch.</h1> </label>
      <br />
      <textarea className="text" rows="12" cols="35" placeholder="Serious Inquires Only " ></textarea>
    </div>
    <div className="bttn">
      <input type="submit" className="submit" value="Send" />
      {/* <input type="reset" name="reset" value="Clear Form" /> */}
    </div>
  </form>
  </div>

);
 
} 
  
  export default Contact;

  



