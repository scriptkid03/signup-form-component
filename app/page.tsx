"use client";
import { useState } from "react";

export default function Home() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { firstName: "", lastName: "", email: "", password: "" };
    let hasError = false;

    if (!formValues.firstName) {
      newErrors.firstName = "First Name cannot be empty";
      hasError = true;
    }
    if (!formValues.lastName) {
      newErrors.lastName = "Last Name cannot be empty";
      hasError = true;
    }
    if (!formValues.email) {
      newErrors.email = "Email cannot be empty";
      hasError = true;
    } else if (!validateEmail(formValues.email)) {
      newErrors.email = "Looks like this is not an email";
      hasError = true;
    }
    if (!formValues.password) {
      newErrors.password = "Password cannot be empty";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Form submitted successfully!");
    }
  };

  return (
    <main className="flex flex-col min-h-screen md:h-screen">
      <div className="flex flex-col lg:flex-row h-full w-full bg-desktop-pattern bg-redish">
        <div className="flex justify-center items-center h-full w-full lg:w-1/2 p-8 lg:p-0">
          <div className="w-full lg:w-10/12 md:w-3/4 flex flex-col gap-8 md:pl-36 md:justify-center">
            <span className="text-white font-bold text-4xl lg:text-5xl text-center lg:text-left">
              Learn to code by watching others
            </span>
            <p className="text-white font-medium text-center lg:text-left">
              See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full lg:w-1/2 p-8 lg:p-0">
          <div className="w-full lg:w-10/12 flex flex-col justify-center items-center gap-10 md:pr-36 md:-ml-10">
            <div className="flex w-full py-4 bg-blueish rounded-lg justify-center items-center shadow-md shadow-darkBlue">
              <span className="text-white px-5">
                <span className="font-semibold">Try it free 7 days </span>
                then $20/mo. thereafter
              </span>
            </div>
            <div className="flex w-full bg-white rounded-lg items-center p-8">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col w-full gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      className={`w-full h-12 rounded-md border p-4 ${
                        errors.firstName ? "border-red-500" : "border-grayishBlue"
                      }`}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs">{errors.firstName}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      className={`w-full h-12 rounded-md border p-4 ${
                        errors.lastName ? "border-red-500" : "border-grayishBlue"
                      }`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs">{errors.lastName}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={`w-full h-12 rounded-md border p-4 ${
                        errors.email ? "border-red-500" : "border-grayishBlue"
                      }`}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs">{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleInputChange}
                      className={`w-full h-12 rounded-md border p-4 ${
                        errors.password ? "border-red-500" : "border-grayishBlue"
                      }`}
                      placeholder="Password"
                    />
                    {errors.password && (
                      <span className="text-red-500 text-xs">{errors.password}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-greenish text-white font-semibold h-12 rounded-md"
                  >
                    CLAIM YOUR FREE TRIAL
                  </button>
                  <span className="text-grayishBlue text-xs">
                    By clicking the button, you are agreeing to our{" "}
                    <a href="#" className="text-redish font-semibold">
                      Terms and Services
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
