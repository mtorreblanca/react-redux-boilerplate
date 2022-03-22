import { CounterActionType } from "../action-types";

interface AddAction {
  type: CounterActionType.ADD;
  payload: number;
}

export type CounterAction = AddAction;
