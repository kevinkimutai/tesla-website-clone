import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
const sectionsData = [
  {
    bgImage: "model-3.jpg",
    titleHeading: "Model 3",
    titleText: "Order Online For Touchless Delivery",
    buttonLeft: "custom order",
    buttonRight: "existing inventory",
  },
  {
    bgImage: "model-y.jpg",
    titleHeading: "Model Y",
    titleText: "Order Online For Touchless Delivery",
    buttonLeft: "custom order",
    buttonRight: "existing inventory",
  },
  {
    bgImage: "model-s.jpg",
    titleHeading: "Model S",
    titleText: "Order Online For Touchless Delivery",
    buttonLeft: "custom order",
    buttonRight: "existing inventory",
  },
  {
    bgImage: "model-x.jpg",
    titleHeading: "Model X",
    titleText: "Order Online For Touchless Delivery",
    buttonLeft: "custom order",
    buttonRight: "existing inventory",
  },
  {
    bgImage: "solar-panel.jpg",
    titleHeading: "Solar Panels",
    titleText: "Lowest Cost Solar Panels in America",
    buttonLeft: "order now",
    buttonRight: "learn more",
  },
  {
    bgImage: "solar-roof.jpg",
    titleHeading: "Solar Roof",
    titleText: "Produce Clean Energy From Your Roof",
    buttonLeft: "order now",
    buttonRight: "learn more",
  },
  {
    bgImage: "accessories.jpg",
    titleHeading: "Accessories",
    buttonLeft: "order now",
    buttonRight: "learn more",
  },
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      {sectionsData.map((sect, index) => (
        <Section key={index} {...sect} />
      ))}
    </>
  );
};

export default HomePage;
