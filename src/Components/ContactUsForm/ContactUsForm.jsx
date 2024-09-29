"use client"
import { useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import Input from "../Input/Input";
import { useForm } from "../../hooks/useForm";

import "./ContactUsForm.css";

export default function ContactUsForm() {
  const [emptyValue, setEmptyValue] = useState(false);
  const [formState, changeHandeler] = useForm({
    emailForm: { value: "" },
    day: { value: "" },
    typePet: { value: "" },
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    fetch("https://pets-2c950-default-rtdb.firebaseio.com/request.json", {
      method: "POST",
      headers: { "Content-json": "application/json" },
      body: JSON.stringify(formState.inputs),
    }).then((res) => {
      res.ok && setEmptyValue(!emptyValue);
    });
  };

  return (
    <div className="contact-us-form p-5 gray-b">
      <form>
        <h5 className="orng-t">PLANNING A VACATION?</h5>
        <h2>Contact Us</h2>

        <div className="form-inputs d-flex flex-column gap-3">
          <SelectInput
            id="typePet"
            changeHandeler={changeHandeler}
            emptyValue={emptyValue}
          />

          <Input
            type="number"
            id="day"
            changeHandeler={changeHandeler}
            emptyValue={emptyValue}
          />

          <Input
            type="email"
            id="emailForm"
            changeHandeler={changeHandeler}
            emptyValue={emptyValue}
          />

          <button
            className="btn-c2 w-100 d-block"
            onClick={(e) => onSubmitForm(e)}
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
