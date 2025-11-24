import { useState } from "react";
import { div, exp } from "three/tsl";

function Carousel() {
  const projects = [
    {
      title: "HTML Portfolio",
      description:
        "A clean, semantic, and responsive personal portfolio webpage built using HTML and CSS, showcasing my bio, projects, and contact information. Deployed using GitHub Pages.",
      tech: "HTML, CSS",
    },
    {
      title: "Week 2 – JavaScript",
      description: "Built DOM-based interactive features.",
      tech: "JavaScript",
    },
    {
      title: "Week 3 – React Basics",
      description: "Components, Props, and State.",
      tech: "React",
    },
    {
      title: "Week 4 – API App",
      description: "Created weather app using APIs.",
      tech: "React, Fetch API",
    },
    {
      title: "Week 5 – Node.js",
      description: "Learned backend basics.",
      tech: "Node.js",
    },
    {
      title: "Week 6 – Express Auth",
      description: "JWT Authentication project.",
      tech: "Node, Express, JWT",
    },
    {
      title: "Week 7 – MySQL",
      description: "Connected Express with MySQL.",
      tech: "Sequelize, MySQL",
    },
    {
      title: "Week 8 – Fullstack App",
      description: "Built full CRUD app.",
      tech: "React + Node + MySQL",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setIndex((index + 1) % projects.length);
  };

  const current = projects[index];

  return (
    <div className="carousal-container">
      <button onClick={prev} className="carousalBtn">
        ⬅ Prev
      </button>

      <div className="carousal-content">
        <div className="project-title">{current.title}</div>
        <p>{current.description}</p>
        <p>
          <strong>Tech:</strong> {current.tech}
        </p>
      </div>

      <button onClick={next} className="carousalBtn">
        Next ➡
      </button>
    </div>
  );
}

export default Carousel;
