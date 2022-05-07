import Logo from "../Logo";

import classes from "./Navigation.module.css";

import NavigationItem from "./Navigation-Item";

const Navigation = () => {
  return (
    <div className={classes["navigation"]}>
      <Logo />
      <nav className={classes["navigation-wrapper"]}>
        <ul className={classes["navigation-list"]}>
          <NavigationItem to="/products" name="Products" />
          <NavigationItem to="/about" name="Learn More" />
        </ul>
        <ul className={classes["navigation-list"]}>
          <NavigationItem to="/login" name="Login" />
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
