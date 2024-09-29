"use client"
import{ useState, useReducer, useEffect } from "react";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

import "./Input.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT": {
      return {
        ...state,
        value: action.value,
      };
    }

    default:
      state;
  }
};

export default function Input({ type, changeHandeler, id, emptyValue }) {
  const [counter, setCounter] = useState("");
  const [inputState, dispatch] = useReducer(reducer, {
    value: "",
  });

  let { value } = inputState;

  useEffect(() => {
    changeHandeler(id, value);
  }, [value]);

  useEffect(() => {
    changeHandeler(id, counter);
  }, [counter]);

  useEffect(() => {
    setCounter('')
    dispatch({ type: "CHANGE_INPUT", value: "" });
  }, [emptyValue]);

  const changeCount = (action) => {
    if (counter < 100) {
      action == "up" && setCounter(+counter + 1);
    }

    if (counter > 0) {
      action == "down" && setCounter(+counter - 1);
    }
  };

  return (
    <>
      {type === "number" && (
        <div className="d-flex gap-1">
          <input
            className="input"
            type="number"
            placeholder="Days"
            value={counter}
            onChange={(e) => setCounter(e.target.value)}
          />
          <div className="d-flex flex-column justify-content-center gap-1">
            <div
              className="white-b change-count"
              onClick={() => changeCount("up")}
            >
              <CaretUpFill />
            </div>
            <div
              className="white-b change-count"
              onClick={() => changeCount("down")}
            >
              <CaretDownFill />
            </div>
          </div>
        </div>
      )}

      {type === "email" && (
        <input
          className="input"
          type="email"
          placeholder="email"
          value={value}
          onChange={(e) =>
            dispatch({ type: "CHANGE_INPUT", value: e.target.value })
          }
        />
      )}
    </>
  );
}