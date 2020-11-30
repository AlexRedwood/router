import React from "react";

const ArticleAbout = (props) => {
  return (
    <article className="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center">
      <div className="row about-container px-0">
        <h1 className="text-nowrap text-center my-4 my-md-2 col-12">
          {props.text}
        </h1>
        <img
          className="my-md-5 about-icons col-12 rounded mx-auto"
          src={props.imgsrc}
          alt=""
        ></img>
        <p></p>
      </div>
    </article>
  );
};

export default ArticleAbout;
