import "./Footer.css";
import githubIcon from "../../assets/githubLogo.svg";
import LinkedInIcon from "../../assets/LinkedInLogo.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2026 NewsExplorer, powered by News API
      </p>

      <div className="footer__right">
        <nav className="footer__nav">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </nav>

        <div className="footer__social">
          <a
            href="https://github.com"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a
            href="https://linkedin.com"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
