import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prePerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    
      let randomPerson = Math.floor(Math.random() * people.length)
      if(randomPerson === index){
        randomPerson = index + 1
      }

      setIndex(checkNumber(randomPerson))
     
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="aurthor">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prePerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random Reviews
      </button>
    </article>
  );
};

export default Reviews;
