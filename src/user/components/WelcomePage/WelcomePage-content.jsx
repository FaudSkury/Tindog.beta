import classes from "./WelcomePage-content.module.css";

import Button from "../../../shared/components/UI-components/Button";

const WelcomePageContent = (props) => {
  const handleClick = (event) => {
    props.handleModal(event.target.id);
  };
  return (
    <div className={classes["welcome-page__content"]}>
      <h2>Swipe Right!</h2>
      <Button id="Create Account" onClick={handleClick} className="nav">
        Create Account
      </Button>
    </div>
  );
};

export default WelcomePageContent;
