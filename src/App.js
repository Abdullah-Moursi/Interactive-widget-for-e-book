import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-modal";
import Modal from "react-modal";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [curChar, setCurChar] = useState("");
  const [textTap, setTextTap] = useState(" __ ");
  const [textMap, setTextMap] = useState(" __ ");
  const [textPat, setTextPat] = useState(" __ ");

  library.add(fab, faCheckSquare, faTimes, faTimesCircle);

  // const [modalIsOpen,setIsOpen] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  // }

  // function closeModal(){
  //   setIsOpen(false);
  // }

  const settingCharTap = () => {
    curChar === "a"
      ? setTextTap("a")
      : curChar === "p"
      ? setTextTap("  NO ")
      : setTextTap(" __ ");
  };

  const settingCharMap = () => {
    curChar === "a"
      ? setTextMap("a")
      : curChar === "p"
      ? setTextMap("  NO ")
      : setTextMap(" __ ");
  };

  const settingCharPat = () => {
    curChar === "p"
      ? setTextPat("p")
      : curChar === "a"
      ? setTextPat("  NO ")
      : setTextPat(" __ ");
  };

  const refresh = () => {
    setTextMap(" __ ");
    setTextPat(" __ ");
    setTextTap(" __ ");
  };

  const eye = () => {
    setTextMap("a");
    setTextPat("p");
    setTextTap("a");
  };

  return (
    <div className="App">
      <Fade right cascade>
        <header>
          <div className="header">
            <div className="title">
              <h1>Complete the words.</h1>
            </div>
            <div className="up-imgs">
              <div className="resource">
                <img
                  //  onClick={() => openModal()}
                  src="https://educationalrc.org/tasks/3/assets/images/resourse_icon.png"
                  className="img-responsive"
                  alt="resource"
                ></img>
              </div>
              <div className="help">
                <img
                  src="https://educationalrc.org/tasks/3/assets/images/help_icon.png"
                  className="img-responsive"
                  alt="help"
                ></img>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="question-container">
            <button
              onClick={() => setCurChar("a")}
              className="question question-1"
            >
              a
            </button>
            <button
              onClick={() => setCurChar("p")}
              className="question question-2"
            >
              p
            </button>
          </div>
          <div className="option-container">
            <div className="line">
              <div className="opt1">
                <div className="opt-text">
                  <span onClick={() => settingCharTap()} className="optClick">
                    {" "}
                    {textTap === "a" ? (
                      <FontAwesomeIcon className='right' icon="check-square" />
                    ) : textTap === "  NO " ? (
                      <FontAwesomeIcon className='false' icon="times-circle" />
                    ) : (
                      ""
                    )}
                    1 t
                    {
                      <span
                        className={`${
                          textTap === " __ "
                            ? ""
                            : textTap === "  NO "
                            ? "not-answer"
                            : "answer"
                        }`}
                      >
                        {textTap}
                      </span>
                    }
                    p{" "}
                  </span>{" "}
                </div>
                <img
                  alt="tap"
                  src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_1.png"
                />
              </div>

              <div className="opt3">
                <div className="opt-text">
                  <span onClick={() => settingCharMap()} className="optClick">
                    {textMap === "a" ? (
                      <FontAwesomeIcon className='right' icon="check-square" />
                    ) : textMap === "  NO " ? (
                      <FontAwesomeIcon className='false' icon="times-circle" />
                    ) : (
                      ""
                    )}
                    3 m
                    {
                      <span
                        className={`${
                          textMap === " __ "
                            ? ""
                            : textMap === "  NO "
                            ? "not-answer"
                            : "answer"
                        }`}
                      >
                        {textMap}
                      </span>
                    }
                    p
                  </span>{" "}
                </div>
                <img
                  alt="map"
                  src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_3.png"
                />
              </div>
            </div>

            <div className="line">
              <div className="opt2">
                <div className="opt-text">
                  <span onClick={() => settingCharPat()} className="optClick">
                    {textPat === "a" ? (
                      <FontAwesomeIcon className='right' icon="check-square" />
                    ) : textPat === "  NO " ? (
                      <FontAwesomeIcon className='false' icon="times-circle" />
                    ) : (
                      ""
                    )}
                    2{" "}
                    {
                      <span
                        className={`${
                          textPat === " __ "
                            ? ""
                            : textPat === "  NO "
                            ? "not-answer"
                            : "answer"
                        }`}
                      >
                        {textPat}
                      </span>
                    }
                    at
                  </span>{" "}
                </div>
                <img
                  alt="pat"
                  src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_2.png"
                />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
            <div className="refresh">
              <img
                onClick={() => refresh()}
                alt="refresh"
                src="https://educationalrc.org/tasks/3/assets/images/replay_icon.png"
              />
            </div>
            <div className="eye">
              <img
                onClick={() => eye()}
                alt="eye"
                src="https://educationalrc.org/tasks/3/assets/images/showAns_icon.png"
              />
            </div>
          </div>
        </footer>
      </Fade>

      {/* <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
         
          
        ></Modal> */}
    </div>
  );
};

export default App;

// const dummy = (
//   <img
//     alt="dummy"
//     src="https://educationalrc.org/tasks/3/assets/images/dummy.jpg"
//   />
// );
