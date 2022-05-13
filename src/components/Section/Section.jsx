import React from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

import "./Section.css";

const Section = ({
  bgImage,
  titleHeading,
  titleText,
  buttonLeft,
  buttonRight,
}) => {
  return (
    <Fade cascade="true" fraction="0.3">
      <div
        className="section"
        style={{
          backgroundImage: "url(/images/" + bgImage + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="section__title-group">
          <h1>{titleHeading}</h1>
          <h3>{titleText}</h3>
        </div>

        <div className="section__button-group">
          <button>{buttonLeft}</button>
          <button>{buttonRight}</button>
        </div>
        <MdKeyboardArrowDown className="section__arrow-icon bounce-top" />
      </div>
    </Fade>
  );
};

export default Section;
