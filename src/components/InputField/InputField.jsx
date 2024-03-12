import React from "react";
import './InputField.css';

const InputField = function(type, fieldName, id) {
    return (
        <div className="field-group">
              <input
                {...register(fieldName)}
                type={type}
                id={id}
                required
              />
              <span>{fieldName.toUpperCase()}</span>
        </div>
    )
}

export default InputField;