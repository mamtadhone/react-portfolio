import Skills from "../components/Skills";

function Home() {
  return (
    <div className="home">
      <figure className="image">
        <img src="/images/mamta.jpeg" alt="Mamta's photo" />
        <figcaption className="figure-caption">
          <strong>Fullstack Developer | Designer | Creator</strong>
        </figcaption>
      </figure>
      <div className="description">
        <p>
          Hi! I'm <strong>Mamta Dhone</strong>
        </p>
        <p>
          a passionate web developer with a knack for creating beautiful and
          functional websites. Welcome to my portfolio!
        </p>
        <p>
          “I’m a software developer who loves turning ideas into interactive
          experiences. I focus on creating applications that feel effortless to
          use and powerful behind the scenes. My work blends creativity with
          engineering discipline—clean code, scalable architecture, and
          thoughtful design—all aimed at delivering solutions that make an
          impact.”
        </p>
      </div>
      <div>
        <div className="key-skills">
          <strong>My key skills are:</strong>
        </div>
        <div>
          <Skills />
        </div>
      </div>
      <div>
        <div className="projects-title">
          <strong>projects worked on: </strong>
        </div>
        <button>View Projects</button>
      </div>
    </div>
  );
}

export default Home;
