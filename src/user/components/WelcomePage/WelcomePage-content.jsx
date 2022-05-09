import classes from "./WelcomePage-content.module.css";

import Button from "../../../shared/components/UI-components/Button";

const WelcomePageContent = (props) => {
  return (
    <div className={classes["welcome-page__content"]}>
      <h2>Swipe Right!</h2>
    </div>
  );
};

export default WelcomePageContent;
