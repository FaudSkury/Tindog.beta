import classes from "./WelcomePage.module.css";

//components imports
import WelcomePageContent from "../components/WelcomePage/WelcomePage-content";
import WelcomePageHeader from "../components/WelcomePage/WelcomePage-header";


const WelcomePage = () => {
  return <div className={classes["welcome-page"]}>
    <WelcomePageHeader />
    <WelcomePageContent />
  </div>;
};

export default WelcomePage;
