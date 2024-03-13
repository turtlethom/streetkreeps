import React from "react";
import './InputField.css';

const InputField = function({ type, fieldName, id, registerFunc }) {
    return (
        <div className="field-group">
              <input
                {...registerFunc(fieldName)}
                type={type}
                id={id}
                required
              />
              <span>{fieldName.toUpperCase()}</span>
        </div>
    )
}

export default InputField;