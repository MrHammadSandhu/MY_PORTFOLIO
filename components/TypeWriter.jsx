"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const TypeWriter = ({ phrases, className = "" }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0); // Tracks the current phrase
  const [displayedText, setDisplayedText] = useState(""); // Tracks the text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Determines if the phrase is being deleted
  const [typingSpeed, setTypingSpeed] = useState(100); // Speed of typing/removal

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]; // Get the current phrase

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause after fully typing the phrase
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText === "") {
      // Move to the next phrase after deletion
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Update the displayed text
      const updateText = () => {
        const nextText = isDeleting
          ? currentPhrase.slice(0, displayedText.length - 1) // Remove characters
          : currentPhrase.slice(0, displayedText.length + 1); // Add characters

        setDisplayedText(nextText);
        setTypingSpeed(isDeleting ? 50 : 100); // Set speed dynamically
      };

      const timeout = setTimeout(updateText, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  // Framer Motion animation variants (on load only)
  const containerVariants = {
    initial: { opacity: 0, y: 50 }, // Starts below
    animate: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } }, // Slides up to original position
  };

  const textVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className={`${className} inline-block w-full text-light font-bold capitalize`}
        variants={textVariants}
      >
        <motion.span
          className="inline-block"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: 0, duration: 1.5 }}
        >
          {displayedText}
        </motion.span>
        <motion.span
          className="blinking-cursor"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          |
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default TypeWriter;
