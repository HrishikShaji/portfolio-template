import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useContext } from "react";
import PreLoader from "@/components/PreLoader";

export default function Home() {
  // Initialize state variables
  const [toggle, setToggle] = useState(false); // State variable for dark mode toggle
  const [loading, setLoading] = useState(true); // State variable to keep track of loading state

  // Use local storage to persist the toggle state between page reloads
  useEffect(() => {
    const storedToggle = JSON.parse(localStorage.getItem("toggle")); // Retrieve toggle value from local storage
    setToggle(storedToggle || false); // Set toggle state to the retrieved value or false if no value is found
  }, []);

  // Function to handle the toggle state change
  const handleToggle = (newToggle) => {
    setToggle(newToggle); // Update the toggle state
    localStorage.setItem("toggle", JSON.stringify(newToggle)); // Save the new toggle state to local storage
  };

  // Use a timer to simulate a loading state for 5.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500); // Set loading state to false after 5.5 seconds
    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  // Render the component
  return (
    <div className={toggle ? "dark" : ""}>
      {" "}
      {/* Set the class name to "dark" if toggle is true */}
      <Head>
        {/* Set the page title and meta tags */}
        <title>Anakin - Personal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Render the page content */}
      <main className="bg-primary-white dark:bg-primary-black">
        {loading ? ( // Render the PreLoader component if loading is true
          <PreLoader />
        ) : (
          <>
            {" "}
            {/* Use React fragments to wrap multiple components without a parent element */}
            <Navbar onToggle={handleToggle} initialToggle={toggle} />{" "}
            {/* Render the Navbar component */}
            <Hero /> {/* Render the Hero component */}
            <About /> {/* Render the About component */}
            <Education /> {/* Render the Education component */}
            <Experience /> {/* Render the Experience component */}
            <Services /> {/* Render the Services component */}
            <Skills /> {/* Render the Skills component */}
            <Portfolio /> {/* Render the Portfolio component */}
            <Testimonials /> {/* Render the Testimonials component */}
            <Contact /> {/* Render the Contact component */}
            <Footer /> {/* Render the Footer component */}
          </>
        )}
      </main>
    </div>
  );
}
