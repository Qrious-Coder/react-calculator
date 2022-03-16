import ACTIONS from "./Actions";
import { operBtnStyle } from "../styles/Styles";

const OperButton = ({ extraCName, operator, dispatch }) => {
  return <button className={`${operBtnStyle} ${extraCName}`}
          onClick={() => {dispatch({ type: ACTIONS.ADD_OPERATOR, payload:{operator} }) } }>{operator}</button>
}

export default OperButton;