import classes from "./WelcomePage-content.module.css";

const WelcomePageContent = () => {
  return (
    <div className={classes["welcome-page__content"]}>
      <h2>Swipe Right!</h2>

      <button>Create Account</button>
    </div>
  );
};

export default WelcomePageContent;
