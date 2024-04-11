import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import SUPABASE from "../../config/supabaseClient";
import styles from './EmailSignup.module.css';

export default function EmailSignup() {
  const { register, handleSubmit, formState: {errors}, reset } = useForm();
  const [ submitting, setSubmitting ] = useState(false);
 
  const onSubmit = async (formData) => {
    try {
      const { data, error } = await SUPABASE.from("emails").insert([
          {
            email: formData.email,
            name: formData.fullName,
            created_at: new Date().toISOString()
          }
      ]);

      if (error) {
        console.log(error);
        throw error;
      }
      else {
        console.log("Data inserted sucessfully: ", data);
        reset();
      }
    }
    catch (error) {
      console.error("Error inserting data: ", error.message);
    }
    finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form 
        className={styles.emailSignup} 
        onSubmit={handleSubmit(onSubmit)} 
        
      >
        <div className={styles.emailFormHeading}>
          <p>Join The StreetKreeps Family</p>
          <h2>Stay Updated</h2>
          <p>~ Receive The Latest News On Promotions, Updates, Events, & More! ~</p>
        </div>

        <div className={styles.field}>
          <InputField
            type="text"
            fieldName="fullName"
            id="fullName"
            registerFunc={register}
          />
        </div>
        <div className={styles.field}>
          <InputField
            type="email"
            fieldName="email"
            id="email"
            registerFunc={register}
          />
        </div>
            {/* {errors.email && <span className="error">Email address is required</span>} */}
        <div className={styles.termsGroup}>
          <input
            {...register("agreeTerms")}
            type="checkbox"
            id="agreeTerms"
          />
          <span>
            I agree to receive emails from StreetKreeps and accept all terms and conditions
          </span>
        </div>
        <button type="submit" disabled={submitting}>Subscribe</button>

        {/* Display the submitted form data */}
        {/* {errors && (<p className={styles.error}>Error: {errors.message}</p>)} */}
      </form>
  </>
  );
}
