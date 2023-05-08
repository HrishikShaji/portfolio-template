import React from "react"; // Importing React library
import { useEffect, useRef, useState } from "react"; // Importing useEffect, useRef and useState hooks from React
import emailjs from "@emailjs/browser"; // Importing emailjs library
import { HoverText } from "./HoverText"; // Importing HoverText component
import { motion } from "framer-motion"; // Importing motion library from framer-motion
import { staggerVariants, staggerItems } from "@/constants/constants"; // Importing constants

const Form = () => {
  // Define initial values and states using useState hook
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef(); // Using useRef hook to get a reference to the form element in the DOM

  // Handle changes in form fields and update the formValues state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    emailjs // Use emailjs library to send the form data via email
      .sendForm(
        "service_ikeo0mb",
        "template_kncxfde",
        form.current,
        "o-8cgX5xaEI_lfbcr"
      );

    setFormErrors(validate(formValues)); // Set formErrors state by calling the validate function
    setIsSubmit(true); // Set isSubmit state to true to indicate that the form has been submitted
    setFormValues(initialValues); // Reset the form values to their initial values
  };

  // Use useEffect hook to show a success message when the form is successfully submitted
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowMessage(true); // Set showMessage state to true to display the success message
      setTimeout(() => {
        setShowMessage(false); // Set showMessage state back to false after 3 seconds
      }, 3000);
    }
  }, [formErrors, formValues, isSubmit]);

  // Define a validate function to check if form fields are valid
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Name is required!!!";
    }
    if (!values.email) {
      errors.email = "Email is required!!!";
    }
    if (!values.message) {
      errors.message = "Message is required!!!";
    }
    return errors;
  };
  // This component renders a form with inputs for name, email, and message, and a submit button.
  return (
    <div className="w-full md:w-[50%] relative flex flex-col justify-center items-center">
      {/* This conditional statement renders a success message if there are no form errors and the form has been submitted. */}
      {showMessage && (
        <div className="absolute top-10 w-[50%] h-20 flex justify-center items-center">
          <p>MESSAGE SENT</p>
        </div>
      )}
      {/* The form uses the `motion` library for animation effects. */}
      <motion.form
        variants={staggerVariants} // Animation variants
        initial="hidden" // Initial state of animation
        whileInView="show" // State of animation when in view
        viewport={{ once: true }} // Animation is only triggered once when viewport changes
        ref={form} // Form reference for submission
        onSubmit={handleSubmit} // Submission handler function
        className="mt-[100px] flex flex-col w-full h-full"
      >
        {/* Input for name */}
        <motion.input
          variants={staggerItems} // Animation variants
          type="text" // Input type
          placeholder="Name" // Input placeholder text
          name="username" // Input name attribute
          value={formValues.username} // Input value from state
          onChange={handleChange} // Input change handler function
          className="w-full border-b-4 p-3 text-xl focus:outline-none dark:bg-primary-black sm:my-3 sm:mr-1"
        />
        <p>{formErrors.username}</p> {/* Error message for name input */}
        {/* Input for email */}
        <motion.input
          variants={staggerItems} // Animation variants
          type="email" // Input type
          placeholder="Email" // Input placeholder text
          name="email" // Input name attribute
          value={formValues.email} // Input value from state
          onChange={handleChange} // Input change handler function
          className="border-b-4 bg-primary-white p-3 text-xl focus:outline-none dark:bg-primary-black"
        />
        <p>{formErrors.email}</p> {/* Error message for email input */}
        {/* Input for message */}
        <motion.textarea
          variants={staggerItems} // Animation variants
          type="text" // Input type
          placeholder="Message" // Input placeholder text
          name="message" // Input name attribute
          value={formValues.message} // Input value from state
          onChange={handleChange} // Input change handler function
          className="my-3 border-b-4 bg-primary-white p-3 text-xl focus:outline-none dark:bg-primary-black"
        />
        <p>{formErrors.message}</p> {/* Error message for message input */}
        {/* Submit button */}
        <motion.div
          variants={staggerItems} // Animation variants
          className="flex h-full w-full items-center justify-center"
        >
          <button className="my-3 focus:outline-none text-primary-black dark:text-primary-white ">
            <HoverText text="SUBMIT" width="100px" /> {/* Button text */}
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

// Export the Form component as the default export
export default Form;
