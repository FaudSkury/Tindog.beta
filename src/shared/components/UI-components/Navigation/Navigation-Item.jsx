import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation-item.module.css";

const NavigationItem = (props) => {
  const [isMousedOver, setIsMousedOver] = useState(false);
  const handleMouseOver = () => {
    setIsMousedOver(true);
  };
  const handleMouseOut = () => {
    setIsMousedOver(false);
  };
  return (
    <li
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={classes["navigation-item"]}
    >
      <Link className={classes["navigation-item__link"]} to={props.to}>
        {props.name}
      </Link>
    </li>
  );
};

export default NavigationItem;
