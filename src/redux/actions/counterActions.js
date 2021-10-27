import { INCREMENT, DECREMENT, RESET } from "./index";

export const plusCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const minusCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
