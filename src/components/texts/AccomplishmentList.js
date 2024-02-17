import React, { useEffect, useRef, useState } from "react";

const AccomplishmentList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, []);

  const parent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    padding: "10%",
  };

  const textHolder = {
    background: "white",
    border: "4px solid black",
    color: "black",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const paragraph = {
    textAlign: "left",
    fontSize: "20px",
    marginLeft: "5%",
    marginRight: "5%",
  };

  const containerStyle = {
    height: "100vh",
    overflowY: "auto",
  };

  const tab = {
    display: "inlineBlock",
    marginLeft: "40px",
  };

  const header = {
    marginBottom: "-10px"
  }

  return (
    <div style={containerStyle} ref={parentRef}>
      <div style={parent}>
        <div style={textHolder}>
          <h1 style={header}>President's Honor Roll: Fall 2023</h1>
          <p style={paragraph}>
            <span style={tab} />
            I was honored to be included in the University of Oklahoma's President's Honor Roll for the Fall 2023 semester, among a total of 4,290 students. <br />
            <span style={tab} />
            This semester marked the conclusion of my undergraduate studies, culminating in the attainment of my bachelor's degree in December 2023. <br />
            <span style={tab} />
            Among the courses I undertook during this period were Mentored Research Experience, Data Networks, Capstone, and Parallel Distributed Networking Programming.
          </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
          <h1 style={header}>Intern MVP: Paycom</h1>
          <p style={paragraph}>
            <span style={tab} />
            I had the privilege of being chosen as one of the 11 interns to receive the Paycom MVP designation. <br />
            <span style={tab} />
            Out of a pool of 198 interns, I was selected for demonstrating exceptional dedication and performance throughout my summer internship. <br />
            <span style={tab} />
            The selection process was conducted by our full-time mentors, and I am truly grateful for this recognition among such a talented group of interns.
          </p>
        </div>
        <div style={textHolder}>
          <h1 style={header}>President's Honor Roll: Spring 2023</h1>
          <p style={paragraph}>
            <span style={tab} />
            I was honored to be included on the President's Honor Roll for the Spring 2023 semester, alongside 3,832 fellow students. <br />
            <span style={tab} />
            This semester presented significant challenges, notably due to my enrollment in 18 credit hours. <br />
            <span style={tab} />
            Among the demanding courses I undertook were 
            Applied Statistical Methods, Blockchains & Cryptocurrencies, Computer Security, Algorithm Analysis, and Theory of Computation.
          </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
          <h1 style={header}>President's Honor Roll: Fall 2022</h1>
          <p style={paragraph}>
            <span style={tab} />
            Enrolled in the President's Honor Roll for the Fall 2022 semester among 4,007 students, 
            I immersed myself in coursework focusing on professional programming environments. <br />
            <span style={tab} />
            Among these classes were Database Management Systems, Software Engineering, and Intro to Operating Systems.  <br />
            <span style={tab} />
            Throughout these courses, I engaged in numerous projects designed to simulate the development of enterprise-level software applications, 
            providing valuable hands-on experience in real-world scenarios.
          </p>
        </div>
        <div style={textHolder}>
          <h1 style={header}> President's Honor Roll: Spring 2022</h1>
          <p style={paragraph}>
            <span style={tab} />
            I was privileged to be among the 3,515 students recognized on the President's Honor Roll for the Spring 2022 semester. <br />
            <span style={tab} />
            This semester marked the beginning of my exploration into the foundational aspects of programming. <br />
            <span style={tab} />
            My demanding coursework encompassed subjects such as Data Structures, Computer Organization, and Linear Algebra. <br />
            <span style={tab} />
            These courses have enhanced my cognitive abilities, with many of the concepts proving invaluable in interviews and personal projects.
          </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
          <h1 style={header}>President's Honor Roll: Spring 2021</h1>
          <p style={paragraph}>
            <span style={tab} />
            I achieved recognition on the University of Oklahoma's President's Honor Roll for the Fall 2021 semester, among a cohort of 3,818 outstanding students. <br />
            <span style={tab} />
            During this semester, I delved deeply into the technical aspects of computing, 
            tackling challenging coursework including Calculus II, Physics, and Discrete Mathematics, further enriching my academic journey.
          </p>
        </div>
        <div style={textHolder}>
          <h1 style={header}>President's Honor Roll: Fall 2020</h1>
          <p style={paragraph}>
            <span style={tab} />
            I earned a place on the University of Oklahoma's President's Honor Roll for the Fall 2020 semester, among 4,137 students recognized. <br />
            <span style={tab} />
            This honor required maintaining an "A" grade in all courses while enrolled in a minimum of 12 credit hours. <br />
            <span style={tab} />
            Despite facing challenges, including the transition to online learning, I successfully navigated through this period, 
            demonstrating resilience and commitment to academic excellence.
          </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
          <h1 style={header}>Distinguished Scholar: University of Oklahoma</h1>
          <p style={paragraph}>
            <span style={tab} />
            I was awarded a scholarship to the University of Oklahoma in
            recognition of my achievements in high school. <br />
            <span style={tab} />
            To qualify as a distinguished scholar, I needed to meet specific
            criteria, such as scoring 29-30 on the ACT or 1330-1380 on the SAT,
            and maintaining a GPA of 3.5 or being in the top 10% of my class.{" "}
            <br />
            <span style={tab} />This scholarship served as a motivating
            factor for me throughout my college journey, highlighting the
            significance of academic excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentList;
