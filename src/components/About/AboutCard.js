import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitesh Raghav </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />I have done B.Tech in Mechanical Engineering from IMS Engineering College, Ghaziabad and graduated with 7.3 CGPA.
            <br />
            <br />
            <span className="purple">  My Skills:-</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Programming language:</span> Java, Python, HTML, CSS, JavaScript, SQL

            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Frameworks:</span> ReactJS
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Databases:</span> Mysql

            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nitesh Raghav</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
