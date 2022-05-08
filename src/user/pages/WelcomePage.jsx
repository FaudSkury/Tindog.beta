import { useState } from "react";
import classes from "./WelcomePage.module.css";

//components imports
import WelcomePageContent from "../components/WelcomePage/WelcomePage-content";
import WelcomePageHeader from "../components/WelcomePage/WelcomePage-header";
import Modal from "../../shared/components/UI-components/Modal";
import Login from "../components/auth/Login";

const WelcomePage = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState();
  const handleModal = (modalType) => {
    switch (modalType) {
      case "Login":
        {
          setModalContent(<Login />);
        }
        break;

      default:
        break;
    }
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <div className={classes["welcome-page"]}>
      {modalIsVisible && (
        <Modal handleModal={handleModal}>{modalContent}</Modal>
      )}
      <WelcomePageHeader handleModal={handleModal} />
      <WelcomePageContent handleModal={handleModal} />
    </div>
  );
};

export default WelcomePage;
