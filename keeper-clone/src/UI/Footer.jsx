import "./Footer.css";

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <section className="footer-section">
      <footer>
        <p>J-M Note-Taking © {year}</p>
      </footer>
    </section>
  );
};

export default Footer;
