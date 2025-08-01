"use client"; // This marks the file as a client-side component

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Image from "next/image";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="fullstackhero"
        style={{
          position: "relative",
          minHeight: "100vh",
          paddingTop: "140px",
          paddingBottom: "80px",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Keeps image in the background
          }}
        >
          <Image
            src="/Services/ss1/fullstackbolt1.png" // Path to your image
            alt="Full Stack"
            layout="fill" // Makes the image cover the entire section
            objectFit="cover" // Ensures the image covers the section without distortion
            objectPosition="center" // Keeps the image centered
          />
        </div>

        {/* Hero Text */}
        <Container
          style={{ textAlign: "left", paddingLeft: "6vw", paddingTop: "50vh" }}
        >
          <h1>Code to Deployment—We Handle It All</h1>
          <p className="lead">
            From user interface to server-side logic, we build robust, secure,
            and scalable digital products.{" "}
          </p>
        </Container>
      </section>

      {/* Solutions */}
      {/* Solutions */}
      <section id="solutions" className="py-5">
        <Container>
          <h2 className="text-center mb-4"> Fullstack Development </h2>
          <p className="text-center text-muted mb-5">
            In the digital era, having a seamless and high-performing
            application is critical for success. At Kodeo Software Technology,
            we offer full stack development solutions that cover everything from
            elegant UI/UX design to powerful backend infrastructure. Our team is
            proficient in the latest frontend technologies like React, Angular,
            and Vue.js, as well as backend frameworks such as Node.js, Django,
            Laravel, and Spring Boot. We build web and mobile applications that
            are responsive, secure, and scalable. Whether you're launching a
            startup product or modernizing enterprise software, we ensure your
            system is built with maintainability and performance in mind. APIs,
            databases, deployment pipelines, cloud integration—we handle it all.
            Partner with us to create digital solutions that are fast,
            functional, and future-ready.
          </p>

          <Row>
            {[
              {
                title: "Frontend Development",
                image: "/kodeo-data/services-updated/fullstack/frontend-dev.png", // Use appropriate image path
                points: [
                  "Build interactive, responsive UIs using React, Angular, or Vue.js.",
                  "Ensure accessibility, speed, and mobile-first design with pixel-perfect layout.",
                  "Deliver intuitive navigation and seamless user experiences.",
                ],
              },
              {
                title: "Backend Development",
                image: "/kodeo-data/services-updated/fullstack/backend1.png", // Use appropriate image path
                points: [
                  "Design scalable backend systems using Node.js, Django, Flask, or Laravel.",
                  "Securely manage databases, business logic, and authentication.",
                  "Develop microservices and RESTful APIs for modular architecture.",
                ],
              },
              {
                title: "Database Management",
                image: "/kodeo-data/services-updated/fullstack/data.png", // Use appropriate image path
                points: [
                  "Work with SQL (MySQL, PostgreSQL) & NoSQL (MongoDB, Firebase).",
                  "Design schemas for fast retrieval, indexing, and storage optimization.",
                  "Ensure data integrity, backups, and high availability.",
                ],
              },
              {
                title: "API & Integration Services",
                image: "/Services/ss1/API.jpeg", // Optional image
                points: [
                  "Develop RESTful APIs and GraphQL endpoints for data exchange.",
                  "Integrate third-party services like Stripe, Twilio, and Firebase.",
                  "Automate workflows using webhooks and middleware.",
                ],
              },
            ].map((item, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold mb-3">
                      {item.title}
                    </Card.Title>
                    <ul style={{ paddingLeft: "18px" }}>
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          style={{ fontSize: "0.9rem", marginBottom: "6px" }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Development Process */}

      <section id="process" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Development Process</h2>

          {[
            {
              title: "Requirement Gathering & Planning",
              description:
                "Collaborate with stakeholders to define goals, target users, and tech stack. Establish feature lists, timelines, and delivery milestones.",
              icons: ["🎯", "📋"],
            },
            {
              title: "UI/UX Design",
              description:
                "Design wireframes, mock-ups, and clickable prototypes. Focus on usability, branding, and accessibility guidelines.",
              icons: ["🎨", "🧩"],
            },
            {
              title: "Frontend Development",
              description:
                "Develop responsive UIs using HTML, CSS, JavaScript, React, or Angular. Ensure cross-browser compatibility and performance optimization.",
              icons: ["💻", "📱"],
            },
            {
              title: "Backend Development",
              description:
                "Create APIs, authentication systems, and server-side logic. Integrate with databases, business rules, and third-party services.",
              icons: ["🔐", "🔧"],
            },
          ].map((step, i) => (
            <Row key={i} className="mb-4 align-items-center">
              <Col md={6}>
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </Col>
              <Col md={6}>
                <Row>
                  {step.icons.map((icon, j) => (
                    <Col xs={6} key={j} className="mb-3">
                      <div className="text-center">
                        <span style={{ fontSize: "2rem" }}>{icon}</span>
                        <p className="mt-2">
                          {step.title.split(" ")[0]} {j + 1}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Let's Get Started Section */}

      <section className="form-section py-5 px-4  text-dark"

        style={{ backgroundColor: "#0a0a23", color: "#fff" }}
      >
        <Container>
          <Row className="flex-column-reverse flex-md-row align-items-center">
            {/* Left: Form Card */}

            <Col md={6}>
              <div
                style={{
                  minHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    background: "rgba(80, 26, 120, 0.25)", // translucent purple
                    // padding: "25px",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    transition: "0.3s ease",
                    padding: "25px 25px",
                    borderRadius: "15px", // or any px value you like


                  }}
                >
                  <h3 className="fw-bold text-white mb-1">Let’s Get Started</h3>
                  <p className="text-white-50 mb-3" style={{ fontSize: "0.9rem" }}>
                    Just give a try with our 30-minute free consultation
                  </p>

                  <Form>

                    <Form.Group className="mb-2" controlId="formName"
                    >
                      <Form.Label className="text-white" style={{ borderRadius: "12px" }}
                      >Your Name</Form.Label>
                      <Form.Control type="text" className="modern-input" style={{ borderRadius: "35px" }}
                      />
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2" controlId="formPhone">
                          <Form.Label className="text-white">Phone Number</Form.Label>
                          <Form.Control type="text" className="modern-input" style={{ borderRadius: "35px" }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2" controlId="formEmail">
                          <Form.Label className="text-white">Email ID</Form.Label>
                          <Form.Control type="email" className="modern-input" style={{ borderRadius: "35px" }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-2" controlId="formIdea">
                      <Form.Label className="text-white">
                        Your Idea or Requirements
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        className="modern-input"
                        style={{ borderRadius: "40px" }}
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="w-100 py-3 fw-bold neon-button"
                      style={{
                        background: "linear-gradient(90deg, #fa0965ff 0%, #ff039aff 100%)", // 🌸 Pink shades
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontSize: "1rem",
                        // boxShadow: "0 0 15px rgba(255,110,196,0.6), 0 0 30px rgba(120,115,245,0.6)",
                        transition: "0.3s ease-in-out",
                        borderRadius: "35px", // or any px value you like

                      }}

                    >
                      🚀 Submit
                    </Button>
                  </Form>

                </div>
              </div>
            </Col>


            {/* Right: Image */}
            <Col xs={12} md={6} className="mb-4 mb-md-0">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "429px", // Match form height approx.
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/kodeo-data/services-updated/fullstack/downside1.png"
                  alt="form-img"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
              </div>



            </Col>

          </Row>
        </Container>
      </section>

    </>
  );
}
