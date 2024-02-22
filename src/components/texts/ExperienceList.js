import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

const ExperienceList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [allowScroll, setAllowScroll] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAllowScroll(true)
          }, 750)
        } else {
          setIsVisible(false);
          setAllowScroll(false)
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

  const desktopParent = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    padding: "10%",
  };

  const mobileParent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    marginTop: "10%",
    marginBottom: "10%",
  }

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
    marginTop: isMobile ? "2.5%" : "0%",
    marginBottom: isMobile ? "2.5%" : "0%",
    width: isMobile ? "95%" : "100%"
  };

  const paragraph = {
    textAlign: "left",
    fontSize: "20px",
    marginLeft: "5%",
    marginRight: "5%",
  };

  const containerStyle = {
    height: "100vh",
    overflowY: allowScroll ? "auto" : "hidden",
  };

  const tab = {
    display: "inlineBlock",
    marginLeft: "40px",
  };

  const header = {
    fontSize: isMobile ? "30px" : '',
    marginBottom: "-10px"
  }

  return (
    <div style={containerStyle} ref={parentRef}>
      <div style={isMobile ? mobileParent : desktopParent}>
        <div style={textHolder}>
            <h1 style={header}>William Kerber Scholar : OU</h1>
            <h2 style={header}>August 2023-Present</h2>
            <p style={paragraph}>
                <span style={tab} />
                As a William Kerber Scholar at the University of Oklahoma, 
                I had the privilege of tutoring students across all undergraduate courses for the School of Computer Science. <br /> <br />
                <span style={tab} />
                This experience provided me with valuable opportunities to deepen my grasp of programming fundamentals, 
                as I needed to have a solid understanding in order to effectively explain concepts to others. <br /> <br />
                <span style={tab} />
                Additionally, I honed secondary skills in communication and mentoring as I assisted students in navigating their academic challenges.
            </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
            <h1 style={header}>Software Developer Intern : Paycom</h1>
            <h2 style={header}>May 2022-August 2023</h2>
            <p style={paragraph}>
                <span style={tab} />
                During my tenure at Paycom, I significantly bolstered my comprehension of programming fundamentals within a professional setting. <br /> <br />
                <span style={tab} />
                As part of the internship program, I engaged in structured reading and discussions centered on a book focusing on clean code principles. <br /> <br />
                <span style={tab} />
                Collaborating within sizable teams of interns, we successfully delivered projects within the designated internship duration.  <br /> <br />
                <span style={tab} />
                Notably, I had the privilege of leading discussions on clean code sessions during my internship, 
                a role I was personally selected for by the managerial team within the developer department, which was a remarkable opportunity.
            </p>
        </div>
        <div style={textHolder}>
            <h1 style={header}>Campus Ambassador : Paycom</h1>
            <h2 style={header}>August 2022-December 2023</h2>
            <p style={paragraph}>
                <span style={tab} />
                Chosen as one of six interns to represent Paycom at the University of Oklahoma campus, 
                I participated in various events and presentations organized by academic classes and student clubs, 
                including OU AI, ACM, and MISSA. <br /> <br />
                <span style={tab} />
                This experience provided me with a diverse set of skills, 
                including adept time management to balance multiple events and opportunities, 
                and honed my public speaking abilities as I addressed audiences of up to 100 students at a time.
            </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
            <h1 style={header}>Sales/Tech : Computer Connection</h1>
            <h2 style={header}>May 2021-April 2022</h2>
            <p style={paragraph}>
                <span style={tab} />
                I had the privilege of working at a local Oklahoma City shop where I gained invaluable insights into technology fundamentals. <br /> <br />
                <span style={tab} />
                I received hands-on training in assembling computers and diagnosing potential issues before, during, and after the build process. <br /> <br />
                <span style={tab} />
                This experience laid the groundwork for developing my secondary skills, 
                particularly in effectively communicating technical concepts and troubleshooting to customers who may not share the same level of expertise.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
