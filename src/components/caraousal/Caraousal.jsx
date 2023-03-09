import React from "react";
import "./caraousal.css";
import { Container } from "@mui/system";
import { Carousel } from 'antd';

const contentStyle = {
    margin: 0,
    height: '28rem',
    width:'50rem',
    color: '#fff',
    display:'flex',
    lineHeight: '20px',
    flexDirection:'column',
    marginTop:'12rem'
  };

function Caraousal() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <div className="caraosal__bg">
    <Container>
            <Carousel afterChange={onChange}>
        <div>
            <div style={contentStyle}>
            <h1 style={{color:"rgb(88, 173, 230)"}} >REDPHANTOM TECH NOVELTY</h1>
            <h2 style={{width:'30rem', fontWeight:"normal"}} >WE HAVE EXTREMELY EFFECTIVE IT SOLUTIONS FOR YOUR INDUSTRY</h2>
            <p style={{width:'30rem', textAlign:'justify', fontWeight:"lighter", fontSize:'small'}}>Our top goal is to ensure that the requirements of our customers
                remain our top priority at all times throughout the process of
                integrating new features into our current services as we expand
                our service offerings.<br></br><br></br>
                Consequently, we will be in a better position to react to the changing requirements of our customers
                and to provide them with better service in the future.
                Consequently, we consistently exceed our client's expectations by
                exceeding their needs, and we take care of any extra problems that
                occur on their behalf. Every aspect of our activity is overseen by
                a service sector organization, which is responsible for all
                aspects of our work. This organization is in charge of putting
                policies in place, executing programs, and assessing results on
                the field.
            </p>
            </div>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
        </Carousel>
    </Container>
  
    </div>
  );
}

export default Caraousal;
