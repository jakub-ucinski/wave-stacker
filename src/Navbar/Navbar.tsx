import React, { useState } from "react";
import Button from "../UI/ Button/Button";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare, faCog } from "@fortawesome/free-solid-svg-icons";
import WaveOptions from "./WaveOptions";

enum NAV_PAGE {
  WAVES,
  SETTINGS,
}

const Navbar = () => {
  const [page, setPage] = useState<NAV_PAGE>(NAV_PAGE.WAVES);

  const selectorHandler = (navPage: NAV_PAGE) => {
    setPage(navPage);
  };

  let main;

  page === NAV_PAGE.WAVES && (main = <WaveOptions />);
  page === NAV_PAGE.SETTINGS && (main = "SETTINGS");

  return (
    <div className={styles.Navbar}>
      <div className={styles.Buttons}>
        <Button
          variant={page === NAV_PAGE.WAVES ? "black" : "white"}
          onClick={selectorHandler.bind(null, NAV_PAGE.WAVES)}
        >
          <FontAwesomeIcon icon={faWaveSquare} />
          {/* TODO : Figure out how to add sine wave instead */}
        </Button>

        <Button
          variant={page === NAV_PAGE.SETTINGS ? "black" : "white"}
          onClick={selectorHandler.bind(null, NAV_PAGE.SETTINGS)}
        >
          <FontAwesomeIcon icon={faCog} />
        </Button>
      </div>

      <div className={styles.Main}>{main}</div>
    </div>
  );
};

export default Navbar;
