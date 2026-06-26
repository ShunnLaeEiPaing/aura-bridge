import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Form,
} from "react-bootstrap";
import {
  BsPeople,
  BsLightbulb,
  BsHeart,
  BsArrowRight,
  BsMortarboardFill,
  BsBookFill,
  BsPercent,
  BsSend,
  BsEmojiSmile,
  BsGraphUp,
  BsBullseye,
  BsAward,
  BsPerson,
  BsPeopleFill,
  BsMortarboard
} from "react-icons/bs";
import '../css/programme.css';
import Footer from "./layout/FooterCTA";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const programmePillars = [
  {
    id: "01",
    subtitle: "P3 - P6",
    title: "Primary School",
    tags: ["English", "Math"],
    target: "primary-fees",
    description:
      "Build strong foundations, deepen understanding and develop exam confidence through guided practice and engaging lessons.",
  },
  {
    id: "02",
    subtitle: "Sec 1 - Sec 4",
    title: "Secondary School",
    tags: ["English", "Math"],
    target: "secondary-fees",
    description:
      "Strengthen core concepts, master advanced exam techniques, and achieve consistently better results across all subjects.",
  },
  {
    id: "03",
    subtitle: "Crash Courses & Intensive",
    title: "Exam Preparation",
    tags: ["PSLE", "O-Level"],
    target: "exam-fees",
    description:
      "Targeted revision programmes with timed practices, past-paper drills, and proven strategies to boost final performance.",
  },
  {
    id: "04",
    subtitle: "Assessments",
    title: "Mock Exams",
    tags: ["Detailed Analysis", "Feedback"],
    target: "exam-fees",
    description:
      "Simulate real exam conditions, receive detailed performance breakdowns, and get personalised feedback to close learning gaps.",
  },
];

const differenceCards = [
  {
    icon: <BsPeople />,
    title: "Dedicated Tutors",
    text: "We connect and explain in ways students get.",
    iconClass: "icon-blue"
  },
  {
    icon: <BsLightbulb />,
    title: "Real-World Learning",
    text: "Real-life examples that make concepts click.",
    iconClass: "icon-green"
  },
  {
    icon: <BsBullseye />,
    title: "Track Progress",
    text: "Regular feedback and strategies that drive improvement.",
    iconClass: "icon-purple"
  },
  {
    icon: <BsHeart />,
    title: "We Guide. We Bridge.",
    text: "Your child's success is our mission.",
    iconClass: "icon-blue"
  },
];

const primaryFees = [
  ["P3 - P4", "English", "2 hrs / week", "$248"],
  ["P3 - P4", "Math", "2 hrs / week", "$248"],
  ["P5 - P6", "English", "2 hrs / week", "$288"],
  ["P5 - P6", "Math", "2 hrs / week", "$288"],
];

const secondaryFees = [
  ["Sec 1 - 2", "English", "2 hrs / week", "$308"],
  ["Sec 1 - 2", "Math", "2 hrs / week", "$308"],
  ["Sec 3 - 4", "English", "2 hrs / week", "$348"],
  ["Sec 3 - 4", "E Math", "2 hrs / week", "$348"],
  ["Sec 3 - 4", "A Math", "2 hrs / week", "$368"],
];

const examFees = [
  ["PSLE Final Sprint Crash Course", "8 hrs", "$199"],
  ["PSLE Mock Exam + Review", "4 hrs", "$99"],
  ["Sec 2 Streaming Bootcamp", "8 hrs", "$199"],
  ["O-Level Final Sprint Programme", "8 hrs", "$249"],
];

const discountRows = [
  { icon: <BsPerson />, label: "1 Subject", value: "Standard Fee" },
  { icon: <BsPeople />, label: "2 Subjects", value: "5% OFF", highlight: true },
  { icon: <BsPeopleFill />, label: "3 Subjects", value: "10% OFF", highlight: true },
  {
    icon: <BsMortarboard />,
    label: "Sibling Discount",
    value: "Additional 5% OFF",
    highlight: true,
  },
];

const ProgrammeTable = ({ icon, title, columns, rows }) => {
  return (
    <div className="programme-table-card mb-4" data-aos="fade-up">
      <div className="programme-table-header">
        <div className="d-flex align-items-center gap-3">
          <span className="programme-table-icon">{icon}</span>
          <h3 className="mb-0">{title}</h3>
        </div>
      </div>

      <div className="table-responsive">
        <Table className="programme-table mb-0">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={
                      cellIndex === row.length - 1 ? "fee-cell fw-bold" : ""
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

const Programme = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    level: "",
    message: "",
  });

  useEffect(() => {
    if (location.hash === "#enquire") {
      const element = document.getElementById("enquire");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/.netlify/functions/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send email");
    }

    alert("Email sent successfully!");

    // Reset the form
    setFormData({
      name: "",
      mobile: "",
      email: "",
      course: "",
      level: "",
      message: "",
    });

  } catch (err) {
    console.error("Full error:", err);
    alert(err.message);
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="our-programme-section mt-5">
      <Container>
        {/* Top Hero Section */}
        <div className="programme-hero-section">
          <Row className="align-items-center g-5">
            <Col lg={6} data-aos="fade-right">
              <div className="programme-hero-content">
                <div className="programme-pill">
                  <span className="programme-pill-dot"></span>
                  OUR PROGRAMMES
                </div>

                <h1 className="programme-hero-title">
                  Empowering
                  <br />
                  Every Student
                  <br />
                  <span className="underline-wrap">
                    to Excel
                  </span>
                </h1>

                <p className="programme-hero-text text-gray-900">
                  From primary foundations to O-Level mastery - our structured
                  programmes build confidence, strengthen understanding, and
                  deliver results.
                </p>

                <div className="programme-hero-actions">
                  <a href="#programme-pillars" className="programme-btn-dark">
                    VIEW PROGRAMMES <BsArrowRight />
                  </a>
                  <a href="#enquire" className="programme-btn-light">
                    GET IN TOUCH
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={6} data-aos="fade-left">
              <div className="programme-hero-image-wrap">
                <img
                  src="./program.png"
                  alt="Student studying"
                  className="programme-hero-image"
                />

                <div className="students-badge">
                  <div className="students-badge-icon">
                    <BsAward />
                  </div>
                  <div>
                    <h4>All of</h4>
                    <p>STUDENTS EMPOWERED</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Programme Pillars */}
        <div className="mb-5 mt-4" id="programme-pillars">
          <p className="section-kicker">THE FOUNDATION</p>
          <h2 className="section-title-main mb-4">Programme Pillars</h2>

          <Row className="g-4">
            {programmePillars.map((item, index) => (
              <Col lg={6} key={item.id}>
                <Card
                  className={`pillar-card h-100 ${item.highlighted ? "highlighted" : ""
                    }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card.Body className="pillar-body">
                    <p className="pillar-level text-blue-800">{item.subtitle}</p>
                    <h3
                      className={`pillar-title ${item.highlighted ? "text-warning-custom" : ""
                        }`}
                    >
                      {item.title}
                    </h3>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, i) => (
                        <span className="pillar-tag" key={i}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="pillar-description">{item.description}</p>

                    <a href={`#${item.target}`} className="learn-more-link">
                      LEARN MORE <BsArrowRight />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Kinetic Difference */}
        <div className="difference-section text-center py-5">
          <p className="section-kicker">WHY CHOOSE US</p>
          <h2 className="section-title-main mb-5">The Kinetic Difference</h2>

          <Row className="g-4 justify-content-center">
            {differenceCards.map((card, index) => (
              <Col lg={3} md={6} key={index}>
                <div
                  className={`difference-item h-100 ${card.active ? "active" : ""
                    }`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className={`difference-icon ${card.iconClass}`}>
                    {card.icon}
                  </div>

                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Programme Fees */}
        <div className="fees-section py-5">
          <p className="section-kicker">INVESTMENT</p>
          <h2 className="section-title-main">Programme Fees</h2>

          <p className="section-description mb-5">
            Transparent pricing with no hidden costs. All fees are monthly unless otherwise stated.
          </p>

          <div className="fees-grid">

            <div className="fees-card" id='primary-fees'>
              <ProgrammeTable
                icon={<BsMortarboardFill />}
                title="Primary School Programmes"
                columns={["Level", "Subject", "Duration", "Monthly Fee"]}
                rows={primaryFees}
              />
            </div>

            <div className="fees-card" id='secondary-fees'>
              <ProgrammeTable
                icon={<BsBookFill />}
                title="Secondary School Programmes"
                columns={["Level", "Subject", "Duration", "Monthly Fee"]}
                rows={secondaryFees}
              />
            </div>

            <div className="fees-card" id='exam-fees'>
              <ProgrammeTable
                icon={<BsBullseye />}
                title="Exam Preparation Programmes"
                columns={["Programme", "Duration", "Fee"]}
                rows={examFees}
              />
            </div>

          </div>
        </div>

        {/* Family Discounts */}
        <div className="discount-section py-5">
          <Row className="align-items-center g-5">
            <Col lg={5} data-aos="fade-right">
              <p className="section-kicker">SAVE MORE</p>
              <h2 className="section-title-main">Family Discounts</h2>
              <p className="section-description">
                We believe in making quality education accessible. Enrol in
                multiple subjects or bring a sibling to enjoy additional savings.
              </p>

              <div className="discount-note">
                <BsPercent />
                <span>Discounts stack - combine subject + sibling savings!</span>
              </div>
            </Col>

            <Col lg={7} data-aos="fade-left">
              <div className="discount-list">
                {discountRows.map((item, index) => (
                  <div
                    key={index}
                    className={`discount-row ${item.highlight ? "highlight" : ""
                      }`}
                  >
                    <div className="discount-left">
                      <span className="discount-emoji">{item.icon}</span>
                      <span className="discount-label">{item.label}</span>
                    </div>
                    <div className="discount-value">{item.value}</div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {/* CTA / Enquiry */}
        <div className="enquiry-section py-5" id="enquire">
          <div className="enquiry-wrapper text-center" data-aos="fade-up">
            <div className="journey-pill">Begin The Journey</div>
            <h2 className="enquiry-title">
              Don't Just Study Hard.
              <br />
              <span>Study Smart.</span>
            </h2>

          </div>
          <div className="enquiry-form-card mx-auto">
            <Form onSubmit={sendEmail}>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label className="mini-label text-start">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Tan"
                  className="custom-input"
                  name="name"
    placeholder="John Tan"
    value={formData.name}
    onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Mobile Number */}
              <Form.Group className="mb-3">
                <Form.Label className="mini-label text-start">Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile"
    value={formData.mobile}
    onChange={handleChange}
                  placeholder="e.g. 8080 9898"
                  className="custom-input"
                  required
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label className="mini-label text-start">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@mail.com"
                  className="custom-input"
                  name="email"
    value={formData.email}
    onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Courses */}
              <Form.Group className="mb-3">
                <Form.Label className="mini-label text-start">Courses</Form.Label>
                <Form.Select className="custom-input" required name="course"
    value={formData.course}
    onChange={handleChange}>
                  <option>Select a Course</option>
                  <option>Primary School</option>
                  <option>Secondary School</option>
                  <option>Exam Preparation</option>
                </Form.Select>
              </Form.Group>

              {/* Children Education Level */}
              <Form.Group className="mb-3">
                <Form.Label className="mini-label text-start">Your Children Education Level</Form.Label>
                <Form.Control
                  type="text"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  placeholder="Pri 1 - JC"
                  className="custom-input"
                  required
                />
              </Form.Group>

              {/* Additional Information */}
              <Form.Group className="mb-4">
                <Form.Label className="mini-label text-start">Additional Information</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Group>

              {/* Submit Button */}
              <Button className="enquire-btn w-100" type="submit">
                {loading ? "Sending..." : <>Submit <BsSend /></>}
              </Button>
            </Form>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="final-cta py-4" data-aos="zoom-in">
          <div className="benefits-row">
            <div className="benefit-item">
              <div className="benefit-icon">
                <BsEmojiSmile />
              </div>
              <div>
                <h5>Better Understanding</h5>
                <p>We simplify complex topics.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <BsEmojiSmile />
              </div>
              <div>
                <h5>Stronger Confidence</h5>
                <p>We build belief from within.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <BsGraphUp />
              </div>
              <div>
                <h5>Better Results</h5>
                <p>When understanding improves, results follow.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Programme;