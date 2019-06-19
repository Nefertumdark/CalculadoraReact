import React from 'react';
import Key from './Key.js';
import './Keypad.css';

function Keypad (props) {
    console.log(props);
    return (

    <div className="Keypad">
        <div className="container">
            <div className="row"> 
                <Key textDisplay={'Clear'} widthKey={3} colorKey={"red"} operation={(e) => props.clear()}/>
                <Key textDisplay={'/'} widthKey={1} colorKey={"blue"} operation={(e) => props.updateOperation('/')}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'7'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('7')}/>
                <Key textDisplay={'8'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('8')}/>
                <Key textDisplay={'9'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('9')}/>
                <Key textDisplay={'X'} widthKey={1} colorKey={"blue"} operation={(e) => props.updateOperation('*')}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'4'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('4')}/>
                <Key textDisplay={'5'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('5')}/>
                <Key textDisplay={'6'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('6')}/>
                <Key textDisplay={'-'} widthKey={1} colorKey={"blue"} operation={(e) => props.updateOperation('-')}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'1'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('1')}/>
                <Key textDisplay={'2'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('2')}/>
                <Key textDisplay={'3'} widthKey={1} colorKey={"gray"} operation={(e) => props.updateOperation('3')}/>
                <Key textDisplay={'+'} widthKey={1} colorKey={"blue"} operation={(e) => props.updateOperation('+')}/>
            </div>
            <div className="row"> 
                <Key textDisplay={'0'} widthKey={3} colorKey={"gray"} operation={(e) => props.updateOperation('0')}/>
                <Key textDisplay={'='} widthKey={1} colorKey={"blue"} operation={(e) => props.executeOperation()}/>
            </div>
        </div>
    </div>
    );
  }
  
 export default Keypad;