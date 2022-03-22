import { Dispatch } from "react";
import { CounterActionType } from "../action-types";
import { CounterAction } from "../actions";

export const addCounter = (amount: number) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({
      type: CounterActionType.ADD,
      payload: amount,
    });
  };
};
