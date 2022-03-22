import { CounterActionType } from "../action-types";
import { CounterAction } from "../actions";

const initialState = 0;

const reducer = (state: number = initialState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionType.ADD:
      return state + action.payload;

    default:
      return state;
  }
};

export default reducer;
