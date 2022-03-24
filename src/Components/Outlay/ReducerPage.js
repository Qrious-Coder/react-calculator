import { useReducer } from "react";
import ACTIONS from "../ReducerPage/Actions";
import Reducer from "../ReducerPage/Reducer";
import NumberButton from "../ReducerPage/NumBtn";
import OperButton from "../ReducerPage/OperBtn";
import { delIcon, ctnStyle,screenStyle, operBtnStyle } from "../styles/Styles";
import logo from '../styles/logo.svg';

const ReducerPage = () => {
  const [{currentInput, previousInput, operationInput}, dispatch] = useReducer(Reducer, {})

    return(
      <div > 
        <div className="header m-10">
          <span>
            <img src={logo} 
            className="rotate mx-auto"
            width='100' 
            height='100'
            alt="logo"
            ></img>
          </span>
          <span>
            <h1 className="text-2xl text-yellow-200 text-center">useReducer</h1>
          </span>
        </div>
        <div className={`container ${ctnStyle}`}>
          <div id="display" className={screenStyle} >
            <div id="input-data" className="bg-gray-700 p-2 text-2xl text-right text-blue-400"
            style={{fontFamily: 'ZCOOL QingKe HuangYou'}} >
              {previousInput}{operationInput}
            </div>
            <div id="output-data"  
              className="bg-gray-700 p-2 text-3xl text-right text-yellow-200" 
              style={{fontFamily: 'Black Ops One'}}
            >{currentInput}</div>
          </div>
          <div id='keyboard' className="grid grid-cols-4 gap-1 justify-self-center mt-4">
            <button id="clear" className={operBtnStyle} 
              onClick={ () => { dispatch({ type: ACTIONS.CLEAR_ALL }) }}>AC</button>
            <button id="backspace" className={operBtnStyle}  
              onClick={ () => { dispatch({type: ACTIONS.BACKSPACE}) }} >{delIcon}</button>

            <OperButton id="divide" operator="/" dispatch={dispatch}/> 

            <OperButton id="multiply" operator="*" dispatch={dispatch}/> 

            <NumberButton value="7" label="7" dispatch={dispatch}/>
            <NumberButton value="8" label="8" dispatch={dispatch}/>
            <NumberButton value="9" label="9" dispatch={dispatch}/>

            <OperButton id="add" operator="-" dispatch={dispatch}/> 

            <NumberButton value="4" label="4" dispatch={dispatch}/>
            <NumberButton value="5" label="5" dispatch={dispatch}/>
            <NumberButton value="6" label="6" dispatch={dispatch}/>

            <OperButton id="add" operator="+" dispatch={dispatch}/> 

            <NumberButton value="1" label="1" dispatch={dispatch}/>  
            <NumberButton value="2" label="2" dispatch={dispatch}/>  
            <NumberButton value="3" label="3" dispatch={dispatch}/>
            
            <button id="equals" className={`${operBtnStyle} row-span-2 bg-yellow-500` } 
              onClick={  () => { dispatch({ type: ACTIONS.EQUAL}) } }>=</button>
            <NumberButton value="0" label="0" dispatch={dispatch}/> 
            <NumberButton value="." label="." dispatch={dispatch}/> 
            <NumberButton value="-" label="+/-" dispatch={dispatch}/> 
          </div> 
        </div> 
        {/* container */}
      </div>
    );
}

export default ReducerPage;