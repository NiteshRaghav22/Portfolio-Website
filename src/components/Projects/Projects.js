import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webpage from "../../Assets/Projects/webpage.png";
import netflix from "../../Assets/Projects/netflix.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Build a Netflix clone using ReactJs. Built and design from scratch and fetch data for movies and its trailer from TMDB API key and Youtube. Tested and Deployed on online server through Netlify hosting, Also checked browser and mobile responsiveness."
              ghLink="https://github.com/NiteshRaghav22/Netflix-Clone"
              demoLink="https://netflix-clone-v3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portofolio Website"
              description="Built a User friendly React Portofolio website using HTML, CSS and ReactJS. Built and design from scratch and make features like about, work, resume, contacts. Tested and Deployed on online server, also checked browser and mobile responsiveness."
              ghLink="https://github.com/NiteshRaghav22/Portfolio-Website"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webpage}
              isBlog={false}
              title="Learning Platform Configuration of Product Web Page"
              description="Build a Web Page using HTML, CSS, Bootstrap. Created a product webpage based on paid offerings of career fitment reports and its counsellings with providing insight cards for exploring paid offerings. This is an online TCS iON RIO-45 internship. Tested and Deployed on online server, also checked browser and mobile responsiveness."
              ghLink="https://github.com/NiteshRaghav22/TCS-iON-Rio-45-internship"
              demoLink="https://niteshraghav22.github.io/TCS-iON-Rio-45-internship/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
