import { Container, display } from "@mui/system";
import React from "react";
import "./bluebg.css";
import image2 from '../../assets/sec2.png'

function BlueBg() {
  return (
    <div className="blueBG__Background">
      <Container style={{display:"flex"}}>
        <div className="blueBg__leftimg">
            <img src={image2} />
        </div>
        <div className="blueBg__header">
          <h1>WE ARE THINKING OF A NEW APPROACH TO YOUR CURRENT METHODS</h1>
          <p className="blueBg__para"> 
            Our top goal is to ensure that the requirements of our customers
            remain our top priority at all times throughout the process of
            integrating new features into our current services as we expand our
            service offerings. 
            <br></br><br></br>
            Consequently, we will be in a better position to
            react to the changing requirements of our customers and to provide
            them with better service in the future. Consequently, we consistently exceed our client's expectations by exceeding their
            needs, and we take care of any extra problems that occur on their
            behalf. Every aspect of our activity is overseen by a service sector
            organization, which is responsible for all aspects of our work. This
            organization is in charge of putting policies in place, executing
            programs, and assessing results on the field.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default BlueBg;
