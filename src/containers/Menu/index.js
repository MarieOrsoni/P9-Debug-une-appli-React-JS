/* eslint-disable no-return-assign */
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => {
  const [activeSection, setActiveSection] = useState(window.location.hash);
  useEffect(() => {
    const handleHasChange = () => setActiveSection(window.location.hash);
    window.addEventListener("hashchange", handleHasChange);

    return () => {
      window.removeEventListener("hashchange", handleHasChange);
    };
  }, []);

  return (
    <nav>
      <Logo />
      <ul>
        <li className={activeSection === "#nos-services" ? "active" : ""}>
          <a href="#nos-services">Nos services</a>
        </li>
        <li className={activeSection === "#nos-realisation" ? "active" : ""}>
          <a href="#nos-realisations">Nos réalisations</a>
        </li>
        <li className={activeSection === "#notre-equipe" ? "active" : ""}>
          <a href="#notre-equipe">Notre équipe</a>
        </li>
      </ul>
      <Button
        title="contact"
        onClick={() => (window.document.location.hash = "#contact")}
        className={activeSection === "#contact" ? "active-button" : ""}
      >
        Contact
      </Button>
    </nav>
  );
};
export default Menu;
