function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        @ {new Date().getFullYear()} NewsExplorer
      </p>
      <div className="footer__links">
        <a href="https://practicum.com">Practicum</a>
        <a href="https://github.com">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
