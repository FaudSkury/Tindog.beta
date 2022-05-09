import { useState } from "react";
import classes from "./WelcomePage.module.css";

//components imports
import WelcomePageContent from "../components/WelcomePage/WelcomePage-content";
import WelcomePageHeader from "../components/WelcomePage/WelcomePage-header";
import Modal from "../../shared/components/UI-components/Modal";
import Auth from "../../user/components/auth/Auth";

//component function
const WelcomePage = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <div className={classes["welcome-page"]}>
      {modalIsVisible && <Modal handleModal={handleModal}><Auth /></Modal>}
      <WelcomePageHeader handleModal={handleModal} />
      <WelcomePageContent />
    </div>
  );
};

export default WelcomePage;
