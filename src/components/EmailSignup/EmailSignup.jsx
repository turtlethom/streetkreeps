import { useState } from "react";
import { useForm } from "react-hook-form";
import './EmailSignup.css'; // Import CSS file

export default function EmailSignup() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [data, setData] = useState("");
 
  const onSubmit = (data) => {
    setData(data)
  }

  return (
    <form className="email-signup fs-500 bg-black" onSubmit={handleSubmit(onSubmit)}>
      <div className="email-form-heading">
        <h2 className="fs-800">Signup To Our Newsletter</h2>
        <p>Stay Up To Date On Promotions, Updates, Events, & More!</p>
      </div>

          <div className="field-group">
            <input
              {...register("fullName")}
              type="text" 
              id="fullName"
              required
            />
            <span>Full Name</span>
          </div>
          <div className="field-group">
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              required
            />
            <span>Email</span>
          </div>

            {/* {errors.email && <span className="error">Email address is required</span>} */}
      <div className="terms-group">
        <input 
          {...register("agreeTerms")} 
          type="checkbox" 
          id="agreeTerms"
        />
        <label htmlFor="agreeTerms">I agree to receive emails from StreetKreeps and accept all terms and conditions.</label>
      </div>

      <button type="submit">Sign Me Up</button>
    </form>
  );
}
