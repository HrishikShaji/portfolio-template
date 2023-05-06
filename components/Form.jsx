import React from "react";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { HoverText } from "./HoverText";
import { motion } from "framer-motion";
import { staggerVariants, staggerItems } from "@/constants/constants";

const Form = () => {
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ikeo0mb",
        "template_kncxfde",
        form.current,
        "o-8cgX5xaEI_lfbcr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues({ username: "", email: "", message: "" });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [formErrors, formValues, isSubmit]);

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
  return (
    <div className="w-full md:w-[50%] relative flex flex-col justify-center items-center">
      {Object.keys(formErrors).length === 0 && isSubmit && showMessage && (
        <div className="absolute  top-10 w-[50%] h-20 flex justify-center items-center">
          <p>MESSAGE SENT</p>
        </div>
      )}
      <motion.form
        variants={staggerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        ref={form}
        onSubmit={handleSubmit}
        className="mt-[100px] flex flex-col  w-full h-full"
      >
        <motion.input
          variants={staggerItems}
          type="text"
          placeholder="Name"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          className="w-full border-b-4  p-3 text-xl focus:outline-none dark:bg-primary-black sm:my-3 sm:mr-1"
        />
        <p>{formErrors.username}</p>
        <motion.input
          variants={staggerItems}
          type="email"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="border-b-4 bg-primary-white p-3 text-xl focus:outline-none dark:bg-primary-black"
        />
        <p>{formErrors.email}</p>
        <motion.textarea
          variants={staggerItems}
          type="text"
          placeholder="Message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          className="my-3 border-b-4 bg-primary-white p-3 text-xl focus:outline-none dark:bg-primary-black"
        />
        <p>{formErrors.message}</p>
        <motion.div
          variants={staggerItems}
          className="flex h-full w-full items-center justify-center"
        >
          <button className="my-3 focus:outline-none text-primary-black dark:text-primary-white ">
            <HoverText text="SUBMIT" width="100px" />
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Form;
