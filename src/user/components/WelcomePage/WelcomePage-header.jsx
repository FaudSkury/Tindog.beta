import classes from "./WelcomePage-header.module.css";
import Navigation from "../../../shared/components/UI-components/Navigation/Navigation";
const WelcomePageHeader = () => {
  return (
    <div className={classes["welcome-page__header"]}>
      <Navigation />
    </div>
  );
};

export default WelcomePageHeader;
