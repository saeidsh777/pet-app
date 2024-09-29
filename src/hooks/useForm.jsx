"use client"
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_VALUE": {
      return {
        ...state,
        inputs:{
            ...state.inputs,
            [action.inputID]:action.inputValue
        }
      };
    }

    default:state
  }
};

export function useForm(initInputs) {
  const [formState, dispatch] = useReducer(reducer, {
    inputs: initInputs,
  });

  function changeHandeler(id, inputValue) {
    dispatch({ type: "GET_VALUE", inputValue, inputID: id });
  }

  return [formState, changeHandeler];
}
