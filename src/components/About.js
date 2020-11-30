import React from "react";
import ArticleAbout from "./ArticleAbout";
import swordImg from "../assets/icons/sword-icon.png";
import horseImg from "../assets/icons/horse-icon.svg";
import armorImg from "../assets/icons/armor-icon.png";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  const data = [
    {
      text: "Sharp swords",
      imgsrc: swordImg,
    },
    {
      text: "sturdy armor",
      imgsrc: armorImg,
    },
    {
      text: "and fast delivery",
      imgsrc: horseImg,
    },
  ];

  const content = data.map((item) => (
    <ArticleAbout key={uuidv4()} text={item.text} imgsrc={item.imgsrc} />
  ));

  return (
    <section className="px-0 row container about justify-content-center align-items-center">
      {content}
    </section>
  );
};

export default About;
