import React from "react";
import { HoverText } from "./HoverText";
import { userData, socialLinks } from "@/constants/Data";

const Footer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-primary-white px-10 pb-10 text-primary-black dark:bg-primary-black dark:text-primary-white">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sm sm:text-xl">Phone : {userData.phoneText}</h3>
        <h3 className="text-sm sm:text-xl">Email : {userData.emailText} </h3>
        <h3 className="text-sm sm:text-xl">
          Location : {userData.locationText}
        </h3>
      </div>
      <div className="my-10 flex w-full flex-col items-center justify-evenly sm:flex-row">
        {socialLinks.map((social, i) => (
          <button
            className="cursor-pointer focus:outline-none"
            key={i}
            href={`${social.url}`}
          >
            <a>
              <HoverText text={social.name} width="150px" />
            </a>
          </button>
        ))}
      </div>
      <span>Copyright © 2023 ANAKIN.</span>
    </div>
  );
};

export default Footer;
