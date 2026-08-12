import authorSelfie from "../../assets/authorSelfie.jpg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={authorSelfie} alt="Author" className="about__image" />
      </div>

      <div className="about__content">
        <h2 className="about__title">About the Author</h2>
        <p className="about__text">
          Hi, I'm Ziah - a front-end developer passionate about building clean,
          responsive interface and crafting meaning user experiences.
        </p>
        <p className="about__text">
          NewsExplorer is a project focused on React architecture, component
          design, and state management. In the past year, studying with
          TripleTen I have learned many langauges including HTML, CSS,
          JavaScript, and JSX as well as back-end technology!
        </p>
      </div>
    </section>
  );
}

export default About;
