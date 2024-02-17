import React, { useEffect, useRef, useState } from "react";

const ProjectsLists = () => {
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
          <h1 style={header}>Internet of Pings</h1>
          <p style={paragraph}>
            <span style={tab} />
            During Hacklahoma at OU in 2024,
            I collaborated with three fellow students to develop an interactive website providing a fundamental explanation of Internet functionality. <br />
            <span style={tab} />
            Our inspiration stemmed from one team member's prior experience with routers and switches during high school. <br />
            <span style={tab} />
            Leveraging the Svelte framework alongside TypeScript files, 
            we constructed a functional network capable of incorporating various node types (routers, switches, machines) to illustrate data transmission processes. <br />
            <span style={tab} /> 
            With additional time, we envisioned enhancing its dynamism by enabling node manipulation and incorporating animations to depict packet movement within the network.
          </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
            <h1 style={header}>BetGenius</h1>
            <p style={paragraph}>
                <span style={tab} />
                Engaged in research aimed at developing a prediction model for forecasting player statistics in NBA and CFL games,
                my research partner and I were drawn to this project due to our shared passion for professional sports. <br />
                <span style={tab} />
                Employing BeautifulSoup, we've been scraping web pages containing game data to systematically store all pertinent stats in a database. <br />
                <span style={tab} />
                Presently, we're focused on experimenting with predictive techniques to anticipate these statistics for individual players in forthcoming matches.
            </p>
        </div>
        <div style={textHolder}>
            <h1 style={header}>Event Planning App</h1>
            <p style={paragraph}>
                <span style={tab} />
                As part of a collaborative effort with a team of 16 other interns, I contributed to the development of a user-friendly app tailored for Paycom's recruiters. <br />
                <span style={tab} />
                This comprehensive app comprised both web and mobile interfaces designed to streamline the recruitment process. <br />
                <span style={tab} />
                During recruiting events, candidates could effortlessly navigate to the app to provide the requested information as per recruiters' requirements. <br />
                <span style={tab} />
                Likewise, invited candidates could access a web or mobile page to view details about exclusive events. <br />
                <span style={tab} />
                Recruiters benefited from the app's functionalities, enabling them to conveniently invite users, schedule events, and access vital information on the go.
            </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
          <h1 style={header}>Distributed Cart Pole AI</h1>
          <p style={paragraph}>
            <span style={tab} />
            In my distributed operating systems course, our objective was to develop an agent capable of playing Cart Pole from the OpenAI gymnasium environments. <br />
            <span style={tab} />
            Our challenge was to distribute this capability across multiple systems to enhance efficiency. <br />
            <span style={tab} />
            To achieve this, we implemented networking protocols to transmit tensors between multiple machines. <br />
            <span style={tab} />
            Upon completing calculations, we transmitted the results back to the master machine to maintain a record of total successes.
          </p>
        </div>
        <div style={textHolder}>
          <h1 style={header}>SoKK Asset Manager</h1>
          <p style={paragraph}>
            <span style={tab} />
            In my software engineering class, our assignment was to form a team with two other students and develop a project of our choice. <br />
            <span style={tab} />
            Our project focused on tracking a store's assets, enabling stores to add new products for sale along with their respective quantities in stock. <br />
            <span style={tab} />
            In a corporate setting, this system could automatically update inventory levels upon purchases and notify managers when products reach low quantities.
          </p>
        </div>
        <div />
        <div />
        <div style={textHolder}>
          <h1 style={header}>Candidate Finder</h1>
          <p style={paragraph}>
            <span style={tab} />
            In collaboration with four other interns, we developed a service aimed at identifying potential product buyers within a city. <br />
            <span style={tab} />
            Our approach involved retrieving information about companies within the city that were not already present in a database. <br />
            <span style={tab} />
            Leveraging Puppeteer and JavaScript, we systematically queried data about these companies and stored the results in a CSV format. <br />
            <span style={tab} />
            A significant aspect of our project was its ability to parallelize tasks, which greatly improved efficiency. <br />
            <span style={tab} />
            Initially, the process took approximately 20 hours to complete, but through optimization, we managed to reduce it to around 3 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLists;
