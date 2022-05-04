import ACTIONS from "./Actions";

//Create Reducer func
const Reducer = (state, { type, payload }) => {
  switch(type) {
    case ACTIONS.ADD_NUMBER:
      if(state.overwrite){
        return {
          ...state,
          currentInput: payload.value,
          overwrite: false,
        }
      }
      if(payload.value === '.' && state.currentInput.includes(".")){
        return state;
      }
      if(payload.value === "0" && state.currentInput.includes("0")){
        return state;
      }
      if(payload.value === "-" && state.currentInput.includes("-")){
        return {
          ...state,
          currentInput: `${state.currentInput.substring(1)}`}
      }
      if(payload.value === "-" && state.currentInput.charAt(0) !=="-"){
        return{ 
          ...state,  
          currentInput: `${payload.value}${state.currentInput}`
        }
      }

      return{
        ...state, 
        currentInput: `${state.currentInput || ''}${payload.value}`
      }

    case ACTIONS.ADD_OPERATOR:
      if(state.currentInput == null && state.previousInput == null){
        return state
      }
      if(state.currentInput == null){
        return {
          ...state,
          operationInput: payload.operator,
        }
      }
      if(state.previousInput == null){
        return{
          ...state,
          operationInput: payload.operator,
          previousInput: state.currentInput,
          currentInput: null
        }
      }

      // return to default state after shifting the currentInput to the previous state
      return {
        ...state,
        previousInput: calculate(state),
        operationInput: payload.operator,
        currentInput: null,
      }
    
    case ACTIONS.EQUAL:
      if(state.currentInput == null &&
        state.previousInput == null &&
        state.operationInput == null)
        {return state 
        }
      return {
        ...state,
        overwrite: true,
        currentInput: calculate(state),
        previousInput: null,
        operationInput: null
      }
    
    case ACTIONS.CLEAR_ALL:
      return{}

    case ACTIONS.BACKSPACE: 
      if(state.overwrite){
        return{
          ...state,
          currentInput: null,
          previousInput:null,
          operationInput: null,
          overwrite: false
        }
      }
      if(state.currentInput == null){
        return {...state, currentInput: null}
      }
      if(state.currentInput.length === 1){
        return {state, currentInput: null}
      }
     
      return{
        ...state,
        currentInput: `${state.currentInput.slice(0,-1)}`
      }

    default: 
    return state;
  } 
}

//Calculate func:
const calculate = ({currentInput, previousInput, operationInput}) => {
  const currentNum = parseFloat(currentInput)
  const previousNum = parseFloat(previousInput)

  console.log('currentInput', currentInput, 'previousInput', previousInput, 'operationInput', operationInput )

  if(isNaN(currentNum) || isNaN(previousNum)){return ""}

  let cal= "";

  switch(operationInput) {
    case "+":
      cal = previousNum + currentNum;
      break
    case "-":
      cal = previousNum - currentNum;
      break
    case "*":
      cal = previousNum * currentNum;
      break   
    case "/":
      cal = previousNum / currentNum;
      break
    default :
  }
  return cal.toString()
}

export default Reducer;