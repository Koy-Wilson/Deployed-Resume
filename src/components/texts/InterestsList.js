import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

const InterestsList = () => {
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
    marginTop: "20%",
    marginBottom: "30%",
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
            <h1 style={header}>Back-End Interests</h1>
            <p style={paragraph}>
                <span style={tab} />
                I embarked on my journey in back-end development, investing the bulk of my early programming years in this domain. <br /> <br />
                <span style={tab} />
                One of my initial projects involved a personal passion project aimed at financial tracking, 
                employing Java and terminal inputs. <br /> <br />
                <span style={tab} />
                My skill set encompasses a range of languages, such as JavaScript with Node.js, Python with Django, 
                C# for API development using .NET, MySQL for database management, and fundamental C for networking purposes.
            </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
            <h1 style={header}>Front-End Interests</h1>
            <p style={paragraph}>
                <span style={tab} />
                In recent years, I've acquired numerous skills in front-end development. <br /> <br />
                <span style={tab} />
                During my software engineering course, I undertook the challenge of constructing a front-end, marking my initial foray into this realm. <br /> <br />
                <span style={tab} />
                Subsequently, I've honed my expertise in front-end web development through React and Svelte, delved into mobile front-end development via SwiftUI,
                and explored game development using C# within Unity's game engine.
            </p>
        </div>
        <div style={textHolder}>
            <h1 style={header}>Technical Interests</h1>
            <p style={paragraph}>
                <span style={tab} />
                Through my involvement in various projects, I've identified my preferred areas of focus. <br /> <br />
                <span style={tab} />
                Although I haven't had the chance to delve into system design or architecture roles in a corporate setting, I've found immense satisfaction in exploring concepts like data networks and rate limiting. <br /> <br />
                <span style={tab} />
                Additionally, I've developed nearly four fully functional parallelized web scrapers and take pleasure in leveraging data science principles to extract valuable insights. <br /> <br />
                <span style={tab} />
                Recently, I've embarked on learning SwiftUI to craft mobile applications, and I'm fascinated by topics like KeyChain in iOS systems and facial recognition. <br /> <br />
                <span style={tab} />
                With all of that being said, I am flexible and would enjoy helping any company where I can.
            </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
            <h1 style={header}>Personal Interests</h1>
            <p style={paragraph}>
                <span style={tab} />
                Outside of my professional endeavors, I have a multitude of personal interests. <br /> <br />
                <span style={tab} />
                I've been an avid fan of video games since childhood, 
                finding relaxation in the laid-back atmosphere of Terraria, the replay value of Call of Duty Zombies and Binding of Isaac, 
                and the intricate design of Borderlands 2. <br /> <br />
                <span style={tab} />
                Recently, I've incorporated weightlifting into my daily routine, kickstarting each day with a productive session. <br /> <br />
                <span style={tab} />
                Furthermore, I find enjoyment in following the Chicago Bears in the NFL and the Oklahoma City Thunder in the NBA.
            </p>
        </div>
      </div>
    </div>
  );
};

export default InterestsList;
