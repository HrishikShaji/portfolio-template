import React from "react";
import { HoverText } from "./HoverText";
import { userData, socialLinks } from "@/constants/Data";

// Define the Footer component
const Footer = () => {
  // Render the Footer component
  return (
    // The outer div styles the footer, including the background color and padding
    <div className="flex h-full w-full flex-col items-center justify-center bg-primary-white px-10 pb-10 text-primary-black dark:bg-primary-black dark:text-primary-white">
      {/* This div contains the contact information */}
      <div className="flex flex-col items-center justify-center">
        {/* Render the phone number */}
        <h3 className="text-sm sm:text-xl">Phone : {userData.phoneText}</h3>
        {/* Render the email address */}
        <h3 className="text-sm sm:text-xl">Email : {userData.emailText} </h3>
        {/* Render the location */}
        <h3 className="text-sm sm:text-xl">
          Location : {userData.locationText}
        </h3>
      </div>
      {/* This div contains social media links */}
      <div className="my-10 flex w-full flex-col items-center justify-evenly sm:flex-row">
        {/* Map over the socialLinks array to render each link */}
        {socialLinks.map((social, i) => (
          // Render a button for each link
          <button
            className="cursor-pointer focus:outline-none"
            key={i}
            href={`${social.url}`}
          >
            {/* Render the name of the social media site */}
            <a>
              <HoverText text={social.name} width="150px" />
            </a>
          </button>
        ))}
      </div>
      {/* Render the copyright notice */}
      <span>Copyright © 2023 Anakin.All Rights Reserved.</span>
    </div>
  );
};

// Export the Footer component as the default export
export default Footer;
