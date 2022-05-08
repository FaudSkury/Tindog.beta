import classes from "./WelcomePage-header.module.css";
import Navigation from "../../../shared/components/Navigation/Navigation";
const WelcomePageHeader = (props) => {
  return (
    <div className={classes["welcome-page__header"]}>
      <Navigation handleModal={props.handleModal} />
    </div>
  );
};

export default WelcomePageHeader;
