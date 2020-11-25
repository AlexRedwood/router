import React from "react";
import ArticleAbout from "./ArticleAbout";
import swordImg from "../assets/icons/sword-icon.png";
import horseImg from "../assets/icons/horse-icon.svg";
import armorImg from "../assets/icons/armor-icon.png";

const About = () => {
  const data = [
    {
      text: "Sharp swords",
      imgsrc: swordImg,
    },
    {
      text: "sturdy armor",
      imgsrc: horseImg,
    },
    {
      text: "and fast delivery",
      imgsrc: armorImg,
    },
  ];

  const content = data.map((item) => (
    <ArticleAbout text={item.text} imgsrc={item.imgsrc} />
  ));

  return (
    <section className="row container about justify-content-center align-items-center">
      {content}
    </section>
  );
};

export default About;
