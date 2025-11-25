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
      title: "Multipage website - First Smile",
      description:
        "First Smile - Baby Products Shop - is a responsive baby products e-commerce website built with HTML and CSS. The project focuses on a playful, kid-friendly design while maintaining simplicity, accessibility, and scalability.",
      tech: "Frontend: HTML5 (Semantic tags), CSS3 (Flexbox, flex alignment, border styling, CSS variables, pseudo elements, transition)",
    },
    {
      title: "Website using bootstrap",
      description:
        "This is a simple and responsive baby products shop website. It is made by the beginners to make you smile with your baby's smile build a website using HTML, CSS, and Bootstrap. The design is playful and easy to use for everyone.",
      tech: "Bootstrap, HTML5, CSS3",
    },
    {
      title: "The Interactive TODO List",
      description:
        "A simple and elegant TODO List web application built using HTML, CSS, and JavaScript.You can add, edit, and delete tasks — all inside a neat and responsive layout that works perfectly on mobile, tablet, and desktop screens.",
      tech: "HTML5, CSS3, JavaScript",
    },
    {
      title: "Group Project - worldexplorer",
      description:
        "A responsive web application for exploring countries around the world. Built with Bootstrap, semantic HTML, and modern JavaScript, it allows users to view, search, and filter country data fetched from a public API.",
      tech: "HTML5, CSS3, JavaScript, License: MIT",
    },
    {
      title: "Full Stack Notes Application",
      description:
        "A simple full-stack Note-Taking Application built with Node.js and Express, allowing users to add, modify, and delete notes. The app has a clean, responsive interface and is deployed live on Render.com.",
      tech: "Node.js, Express.js, HTML, CSS, JavaScript, Render.com for deployment",
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
