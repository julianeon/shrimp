import styled from 'styled-components';
import React, { useState } from 'react';

const FontsIncluded = styled.div`
font-family: 'Courgette', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Kaushan Script', cursive;
font-family: 'Cormorant Garamond', serif;
font-family: 'Great Vibes', cursive;
font-family: 'Sacramento', cursive;
font-family: 'Monoton', cursive;
font-family: 'Press Start 2P', cursive;
font-family: 'Rock Salt', cursive;
font-family: 'Hanalei', cursive;
font-family: 'Libre Barcode 128 Text', cursive;
font-family: 'Mr Bedfort', cursive;
font-family: 'Butcherman', cursive;
font-family: 'Astloch', cursive;
font-family: 'Ewert', cursive;
font-family: 'Nosifer', cursive;
`

const Centered=styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: pink;
`

const Footer=styled.div`
  position: fixed;
  bottom: 5%;
  width: 100%;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
`


const HeadShrimp=styled.div`
    position: fixed;
    top: 10%;
    width: 100%;
    text-align: center;
    font-family: 'Sacramento', cursive;
`

function Imager() {
    let [count, setCount] = useState(0);
    let [rotation,setRotation]=useState(0);

    const handleSubmit = (event) => {
        setCount(count+1);
        var num=Math.floor(Math.random() * 360);
        setRotation("rotate("+num+"deg)");
        event.preventDefault();        
    }

    const ButtonClick = () => {
        return (
          <>
            <HeadShrimp><h1>Endless Shrimp</h1></HeadShrimp>
            <Footer>            
              <p>You clicked {count} times</p>
              <button onClick={handleSubmit}>
                Click me
              </button>
            </Footer>
            </>
        )
      
    }
    
    return (
        <Centered>
          <img alt="shrimp" style={{width: '30%',height: 'auto',display:'block',margin:'auto',transform: rotation}} src="shrimp.svg"/>
          <ButtonClick/>
        </Centered>

    )
}

function App() {
  return (
      <Imager/>
  );
}

export default App;
