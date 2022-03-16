import React, { useState } from 'react';
import logo from '../styles/logo.svg';
import { delIcon, btnStyle, ctnStyle2, screenStyle2  } from "../styles/Styles";



const StatePage = () => {
  const endingbyNumRegex = /\d$/;
  
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const lastNum = input.replace(/[*/+-]/gi,' ').split(' ').pop();
  const lastSign = input.replace(/[0-9]/gi, ' ').split(' ').pop();
  const lastTwo = input.substring(input.length-2);
  const TwoOperRegex =/[*/][+-]/;

  const handleNum = (x) => {
    
    if(lastSign === "="){
      setInput(x)
    }else if(lastNum === "0"){
      setInput(pre => pre.slice(0, -1).concat(x))
    }
    else{
      setInput(pre => pre.concat(x))
    }
  }
  
  
  const calculate = (str) => {
    if(endingbyNumRegex.test(input) === true){  
      const evalStr = eval(str).toString().indexOf('.') >=1 
      ? (+eval(str).toFixed(4)).toString() 
      : eval(str).toString();
      setResult(evalStr);
      setInput(str.concat('='))
    } else if((lastSign === ".")){
      setInput(str.concat('0='))
      setResult((+eval(str).toFixed(4)).toString());
    }
    else{
      setResult('Error')
      setInput(pre => pre.concat('?'))
    }
  }


  const backspace = () => {
    setInput( pre => pre.slice(0, -1))
  }

  const clearAll = () => {
    setInput('')
    setResult('0')
  }
  
  const handleOperator = (x) => {
    if(lastSign === "="){
      setInput(result.concat(x))
    }
    if(endingbyNumRegex.test(input) === true && lastSign !== "="){
      setInput(pre => pre.concat(x))
    } else if(lastSign !== "-" && x === "-"){
      setInput(pre => pre.concat(x))
    } else if(TwoOperRegex.test(lastTwo) == true){
      setInput(pre => pre.slice(0, -2).concat(x))
    }
    else {
      setInput(pre => pre.slice(0, -1).concat(x));
    }
  }
 
 const handleDecimal = (x) => {
    if(lastSign === "="){
      return setInput('')
    }
    if(endingbyNumRegex.test(input) === false && lastSign !== "."){
      return setInput(pre => pre.concat('0.'));
    } else if(lastNum.indexOf(".")>=1){
      return null;
    } else {
      return setInput(pre => pre.concat(x));
    }
  }

  const handleZero = x =>{
    if(lastSign === "="){
      setInput('')
    }

    if(lastNum === x){
      setInput('')
    }

    if(endingbyNumRegex.test(input) === true){
      setInput(pre => pre.concat(x))
    }else if(lastSign === "."){
      setInput(pre => pre.concat(x))
    }else if(lastSign === ""){
      setInput(pre => pre.concat(x))
      setResult(x)
    }else {
      setInput(pre => pre.concat('0'));
    }
  }
     
  return(
    <div> 
      <div className="header m-7">
          <span>
            <img src={logo} 
            className="rotate mx-auto"
            width='100' 
            height='100'
            alt="logo"
            ></img>
          </span>
          <span>
            <h1 className="text-2xl text-sky-200 text-center">useState</h1>
          </span>
        </div>
      <div className={`container ${ctnStyle2}`}>
        <form id="display" onSubmit={e => {e.preventDefault()}} className={screenStyle2} >
          <input 
            id="input-data"
            type="text"
            className="bg-gray-700 p-2 text-2xl text-right text-pink-200" 
            style={{fontFamily: 'ZCOOL QingKe HuangYou'}} 
            value={input}
            onChange = {e => setInput(e.target.value)}
            placeholder="..."/> 
          <div id="output-data"  
            className="bg-gray-700 p-2 text-3xl text-right text-pink-400" 
            style={{fontFamily: 'Black Ops One'}}
          >{result}</div>
        </form>
        <div id='keyboard' className="grid grid-cols-4 gap-2 justify-self-center mt-4">
          <button id="clear" className={`${btnStyle} bg-pink-400`} 
            onClick={ () => { clearAll() } } >AC</button>
          <button id="backspace" className={`${btnStyle} bg-pink-300`}  
            onClick={ () => { backspace(input) } } >{delIcon}</button>
          <button id="divide" className={`${btnStyle} bg-pink-200`} 
            onClick={ () => {handleOperator("/")} } >÷</button>
          <button id="multiply" className={`${btnStyle} bg-pink-200`}  
            onClick={ () => {handleOperator("*")} } >x</button>
          <button id="seven" className={`${btnStyle} bg-gray-300`}   
            onClick={ () => {handleNum("7")} }>7</button>
          <button id="eight" className={`${btnStyle} bg-gray-300`}  
            onClick={ () => {handleNum("8")} }>8</button>
          <button id="nine" className={`${btnStyle} bg-gray-300`}  
            onClick={ () => {handleNum("9")} }>9</button>
          <button id="subtract" className={`${btnStyle} bg-pink-200`} 
            onClick={ () => {handleOperator("-")} }>-</button>
          <button id="four" className={`${btnStyle} bg-gray-300`} 
            onClick={ () => {handleNum("4")} }>4</button>
          <button id="five" className={`${btnStyle} bg-gray-300`} 
            onClick={ () => {handleNum("5")} }>5</button>
          <button id="six" className={`${btnStyle} bg-gray-300`} 
            onClick={ () => {handleNum("6")} }>6</button>
          <button id="add" className={`${btnStyle} bg-pink-200`}
            onClick={ () => {handleOperator("+")} }>+</button>
          <button id="one" className={`${btnStyle} bg-gray-300`} 
            onClick={ () => {handleNum("1")} }>1</button>
          <button id="two" className={`${btnStyle} bg-gray-300`} 
            onClick={ () => {handleNum("2")} }>2</button>
          <button id="three" className={`${btnStyle} bg-gray-300`} 
            onClick={ () => {handleNum("3")} }>3</button>
          <button id="equals" className={`${btnStyle} row-span-2 bg-pink-400` } 
            onClick={ () => {calculate(input)} }>=</button>
          <button id="decimal" className={`${btnStyle} bg-gray-300`} 
            onClick={ () => {handleDecimal(".")} }>.</button>
          <button id="zero" className={`${btnStyle} col-span-2 bg-gray-300`} 
          onClick={ () => {handleZero("0")} }>0</button>
        </div> 
      </div>
      {/* container */}
    </div>
  );
}

export default StatePage;