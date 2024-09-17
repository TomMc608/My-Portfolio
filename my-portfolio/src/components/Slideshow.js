// /src/components/Slideshow.js
"use client";

import React, { useState } from "react";
import styles from "./Slideshow.module.css"; // Ensure this CSS module exists

const slides = [
    {
      code: `// Code snippet for slide 1`,
    },
    {
      code: `// Code snippet for slide 2`,
    },
    {
      code: `// Code snippet for slide 3`,
    },
    {
      code: `// Code snippet for slide 4`,
    },
    {
      code: `// Code snippet for slide 5`,
    },
    {
      code: `// Code snippet for slide 6`,
    },
    {
      code: `// Code snippet for slide 7`,
    },
  ];
  
export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slide}>
        <pre className={styles.code}>
          <code>{slide.code}</code>
        </pre>
      </div>
      <div className={styles.buttons}>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}
