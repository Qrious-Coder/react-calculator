import ACTIONS from "./Actions";
import { numberBtnStyle } from "../styles/Styles";

const NumberButton = ({value, dispatch, label}) => {
  return <button className={numberBtnStyle}
          onClick={() => { dispatch({ type: ACTIONS.ADD_NUMBER, payload: {value} } )} }>
    {label}
  </button>
}

export default NumberButton;