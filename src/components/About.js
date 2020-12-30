import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    console.log(body);
    body.classList.add("coverfull");
    return () => body.classList.remove("coverfull");
  }, []);

  return (
    <section className="mh-30 px-0 row container about justify-content-center align-items-center">
      <article className="about-content col-12 row justify-content-center align-items-center">
        <div className="col-12">
          <h1 className="brand mb-5 text-center">Crusade Calls</h1>
        </div>
        <div className="col-12 text-center">
          <p>
            Did you hear <strong>that</strong>?
          </p>
          <p>
            <strong>Yep</strong>, It's <span className="crusade">Crusade</span>{" "}
            and It's calling <span className="crusade">you</span>! Time to take
            Jerusalem, don't you think?
          </p>
          <p>
            We are a small family company from the western part of the Czech
            republic, engaged in forging quality weapons and armor.
          </p>
          <p>
            We are here for <span className="crusade">you</span> to be the
            strongest force on the battlefield (and also most fashionable).
          </p>

          <p>
            Joke aside, come and we promise that you will not be dissapointed by
            our stuff (by the way we have ale and a good one!)
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
