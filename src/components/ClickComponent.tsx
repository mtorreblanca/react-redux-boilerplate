import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

const ClickComponent = () => {
  const dispatch = useDispatch();

  const { addCounter } = bindActionCreators(actionCreators, dispatch);

  const counter = useSelector((state: State) => state.counter);

  const clickHandler = () => {
    addCounter(1);
  };
  
  return (
    <>
      <button onClick={() => clickHandler()}>Click me</button>
      <p>Counter: {counter}</p>
    </>
  );
};

export default ClickComponent;
