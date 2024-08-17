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

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
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
  }
  return (
    <main className="flex flex-col h-screen">
      <div className="flex h-full w-full bg-desktop-pattern bg-redish p-40">
        <div className="w-[45%] h-full flex flex-col gap-6 justify-center">
          <span className="text-white font-bold text-5xl">
            Learn to code by watching others
          </span>
          <p className="text-white font-medium">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </div>
        <div className="w-[45%] h-[105%] flex flex-col items-center justify-between">
          <div className="flex w-[80%] h-[12%] bg-blueish rounded-lg justify-center items-center shadow-md shadow-darkBlue">
            <span className="text-white">
              <span className="font-semibold">Try it free 7 days </span>
              then $20/mo. thereafter
            </span>
          </div>
          <div className="flex w-[80%] h-[80%] bg-white rounded-lg justify-center items-center pt-3">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-col gap-1">
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
                <div className="flex flex-col gap-1">
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
                  )}                </div>
                <div className="flex flex-col gap-1">
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
                <div className="flex flex-col gap-1">
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
                  )}                </div>
                <button type="submit" className="bg-greenish text-white font-semibold h-12 rounded-md">
                  CLAIM YOUR FREE TRIAL
                </button>
                <span className="text-grayishBlue text-xs">
                  By clicking the button, you are agreeing to our <a href="#" className="text-redish font-semibold">Terms and Services</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
