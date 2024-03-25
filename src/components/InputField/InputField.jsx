import React from "react";
// import './InputField.css';
import styles from "./InputField.module.css";

const InputField = function({ type, fieldName, id, registerFunc }) {
    return (
        <div className={styles.fieldGroup}>
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