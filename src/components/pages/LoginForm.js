import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../UI/FormInput";
import "./LoginForm.css";

const LoginForm = (props) => {
  const loginHandler = (event) => {
    event.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    // console.log(formValues);
  };

  return (
    <>
      <div className="form_card login_card">
        <form>
          <FormInput
            inputLabel="Email ID:-"
            inputType="email"
            inputName="emailid"
            // inputValue={formValues.emailid}
            // errorMessage={formErrors.emailid}
            // onHandleChange={handleChange}
            customClass={"form_input"}
          />
          <FormInput
            inputLabel="Password:-"
            inputType="password"
            inputName="password"
            // inputValue={formValues.password}
            // errorMessage={formErrors.password}
            // onHandleChange={handleChange}
            customClass={"form_input"}
          />

          <div className="form_input login_btn">
            <button className="form_btn" onClick={loginHandler}>
              Login
            </button>
          </div>
        </form>
      </div>
      <Link className="form_card navigate_signup" to="/signup">
        Create an account
      </Link>
    </>
  );
};

export default LoginForm;
