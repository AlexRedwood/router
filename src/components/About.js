import React from "react";

const About = () => {
  return (
    <section className="mh-30 px-0 row container about justify-content-center align-items-center">
      <article className="about-content col-12 row justify-content-center align-items-center">
        <div className="col-12 d-flex justify-content-center">
          <h1 className="brand mb-5 text-center justify-content-center align-items-center">
            CRUSADE CALLS
          </h1>
        </div>

        <div className="d-flex flex-column col-12 text-center justify-content-center align-items-center">
          <br></br>
          <p className="mb-3 text-justify">
            <span className="important">We are</span> a small family company
            from the western part of the Czech republic, engaged in{" "}
            <span className="important">forging quality weapons and armor</span>
            . We are here <span className="important">for you</span> to be the
            strongest force on the battlefield (and also most fashionable). Joke
            aside, come and we promise that you will not be dissapointed by our
            stuff (by the way <span className="important">we have ale</span> and
            a good one!)
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
