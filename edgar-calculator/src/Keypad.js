import React from 'react';
import Key from './Key.js';
import './Keypad.css';

function Keypad (props) {
    return (
    <div className="Keypad">
        <div className="container">
            <div className="row"> 
                <Key textDisplay={'Clear'} widthKey={3} colorKey={"red"}/>
                <Key textDisplay={'/'} widthKey={1} colorKey={"blue"}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'7'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'8'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'9'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'X'} widthKey={1} colorKey={"blue"}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'4'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'5'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'6'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'-'} widthKey={1} colorKey={"blue"}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'1'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'2'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'3'} widthKey={1} colorKey={"gray"}/>
                <Key textDisplay={'+'} widthKey={1} colorKey={"blue"}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'0'} widthKey={3} colorKey={"gray"}/>
                <Key textDisplay={'='} widthKey={1} colorKey={"blue"}/>
            </div>
        </div>
    </div>
    );
  }
  
 export default Keypad;