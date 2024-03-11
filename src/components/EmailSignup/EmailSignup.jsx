import { useState } from "react";
import { useForm } from "react-hook-form";
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
      <form className="email-signup fs-500 bg-grey" onSubmit={handleSubmit(onSubmit)} style={{marginInline: '2em'}}>
      <div className="email-form-heading">
        <p> Join The StreetKreeps Family </p>
        <h2> Stay Updated </h2>
        <p>~ Receive The Latest News On Promotions, Updates, Events, & More! ~</p>
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
          <span>
            I agree to receive emails from StreetKreeps and accept all terms and conditions
          </span>
        </div>
        <button className="bg-red" type="submit">Sign Me Up</button>
        {/* Display the submitted form data */}
        {data && <p>Submitted: {JSON.stringify(data)}</p>}
      </form>
  </>
  );
}
