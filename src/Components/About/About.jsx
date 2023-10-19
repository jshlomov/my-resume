import "./About.css";
import myPicture from "../../imgs/myPicWithoutBG2.png";
import React from "react";

function About() {
  return (
    <div className="About">
      <div className="Container">
        <h1>Welcome!</h1>
        <p>
          Hello, and welcome to my corner of the internet! I am Yonatan Shlomov,
          a final year computer science student with a passion for technology,
          problem solving and innovation.
        </p>
        <p>
          During my academic journey, I had the privilege of diving deep into
          various aspects of computer science, from algorithm design to software
          engineering, and from artificial intelligence to web development. I
          have always enjoyed the challenge of translating complex problems into
          elegant and efficient solutions.
        </p>
        <p>
          What really excites me is the way technology can be harnessed to
          positively impact the world. I strongly believe in the potential of
          technology to address real-world challenges and improve people's
          lives.
        </p>
        <p>
          As I approach graduation, I am eager to embark on the next phase of my
          journey, where I hope to contribute my skills, creativity and
          enthusiasm to important projects. Whether it is developing innovative
          software solutions, conducting innovative research or collaborating
          with diverse teams, I am ready to embrace the challenges and
          opportunities that the world of technology has to offer.
        </p>
        <p>
          I'm excited to connect with other tech enthusiasts, potential
          collaborators, and anyone interested in the world of computer science.
          Feel free to explore my portfolio or get in touch. Let's shape the
          future together!
        </p>
      </div>
      <img className="myPicture" src={myPicture} alt="picture" />
    </div>
  );
}

export default About;
