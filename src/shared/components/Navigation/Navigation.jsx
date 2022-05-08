import Logo from "../UI-components/Logo";
import NavigationItem from "./Navigation-Item";
import Button from "../UI-components/Button";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const handleClick = (event) => {
    props.handleModal(event.target.id);
  };

  return (
    <div className={classes["navigation"]}>
      <Logo />
      <nav className={classes["navigation-wrapper"]}>
        <ul className={classes["navigation-list"]}>
          <NavigationItem to="/products" name="Products" />
          <NavigationItem to="/about" name="Learn More" />
        </ul>
        <ul className={classes["navigation-list"]}>
          <Button id="Login" onClick={handleClick} className="nav">
            Login
          </Button>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
