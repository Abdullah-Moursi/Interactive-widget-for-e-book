import React from "react";
import { Modal, ModalHelp } from "./Modal";
import "../App.scss";

const Header = ({ isOpen, setIsOpen, isOpenHelp, setIsOpenHelp }) => {
  return (
    <header>
      <div className="header">
        <div className="title">
          <h1>Complete the words.</h1>
        </div>
        <div className="up-imgs">
          <div className="resource">
            <img
              onClick={() => setIsOpen(true)}
              src="https://educationalrc.org/tasks/3/assets/images/resourse_icon.png"
              className="img-responsive"
              alt="resource"
            ></img>
            <Modal
              dummy="portal"
              open={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <img
                className="portalImg"
                alt="dummy"
                src="https://educationalrc.org/tasks/3/assets/images/dummy.jpg"
              />
            </Modal>
          </div>
          <div className="help">
            <img
              onClick={() => setIsOpenHelp(true)}
              src="https://educationalrc.org/tasks/3/assets/images/help_icon.png"
              className="img-responsive"
              alt="help"
            ></img>

            <ModalHelp
              help="portalHelp"
              open={isOpenHelp}
              onClose={() => setIsOpenHelp(false)}
            >
              <h1>Help content goes here</h1>
            </ModalHelp>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
