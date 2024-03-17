import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import './EmailSignup.css'; // Import CSS file

export default function EmailSignup() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [data, setData] = useState("");
 
  const onSubmit = (data) => {
    // const formData = new FormData();
    setData(data);
  }

  return (
    <>
      <form 
        className="email-signup" 
        onSubmit={handleSubmit(onSubmit)} 
        
      >
        <div className="email-form-heading">
          <p>Join The StreetKreeps Family</p>
          <h2>Stay Updated</h2>
          <p>~ Receive The Latest News On Promotions, Updates, Events, & More! ~</p>
        </div>

        <InputField 
          type="text" 
          fieldName="fullName" 
          id="fullName" 
          registerFunc={register}
        />
        <InputField 
          type="email" 
          fieldName="email" 
          id="email" 
          registerFunc={register}
        />
            {/* {errors.email && <span className="error">Email address is required</span>} */}
        <div className="terms-group">
          <input
            {...register("agreeTerms")}
            type="checkbox"
            id="agreeTerms"
          />
          <span>
            I agree to receive emails from StreetKreeps and accept all terms and conditions
          </span>
        </div>
        <button className="subscribe-btn" type="submit">Subscribe</button>

        {/* Display the submitted form data */}
        {data && <p>Submitted: {JSON.stringify(data)}</p>}
      </form>
  </>
  );
}
