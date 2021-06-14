import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Modal from "./Modal";
import ModalHelp from "./ModalHelp";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HashLoader from "react-spinners/HashLoader";
import correct from '../src/correct.mp3';
import incorrect from '../src/incorrect.mp3';


const App = () => {
  const [curChar, setCurChar] = useState("");
  const [textTap, setTextTap] = useState(" __ ");
  const [textMap, setTextMap] = useState(" __ ");
  const [textPat, setTextPat] = useState(" __ ");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  library.add(fab, faCheckSquare, faTimes, faTimesCircle);


  const playCorrect = () => {
    new Audio(correct).play();
  }

  const playIncorrect = () => {
    new Audio(incorrect).play();
  }

  const settingCharTap = () => {
    curChar === "a"
      ? (function() {setTextTap("a"); playCorrect(); setCurChar('')})()
      : curChar === "p"
      ? (function() {setTextTap("  p "); playIncorrect()})()
      : setTextTap(" __ ");
  };

  const settingCharMap = () => {
    curChar === "a"
      ? (function() {setTextMap("a"); playCorrect(); setCurChar('')})()
      : curChar === "p"
      ? (function() {setTextMap("  p "); playIncorrect()})()
      : setTextMap(" __ ");
  };

  const settingCharPat = () => {
    curChar === "p"
    ? (function() {setTextPat("p"); playCorrect(); setCurChar('')})()
    : curChar === "a"
    ? (function() {setTextPat("  a "); playIncorrect()})()
    : setTextPat(" __ ");
  };

  const refresh = () => {
    setTextMap(" __ ");
    setTextPat(" __ ");
    setTextTap(" __ ");
    setCurChar("");
  };

  const eye = () => {
    setTextMap("a");
    setTextPat("p");
    setTextTap("a");
    setCurChar("");
  };

  return (
    <div className="App">
      {
        loading ? <div className='preload'> <HashLoader color={'#0FA0C5'} loading={loading} size={130} /> </div>
        :
        <Fade right cascade>
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
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
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
                  open={isOpenHelp}
                  onClose={() => setIsOpenHelp(false)}
                >
                  <h1>Help content goes here</h1>
                </ModalHelp>
              </div>
            </div>
          </div>
        </header>
        <div className="back">
        <div className="container">
          <div className="question-container">
            <button
              onClick={() => setCurChar("a")}
              className={`${curChar === "a" ? "focus" : "question"}`}
            >
              a
            </button>
            <button
              onClick={() => setCurChar("p")}
              className={`${curChar === "p" ? "focus" : "question"}`}
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
                      <FontAwesomeIcon className="right" icon="check-square" />
                    ) : textTap === "  p " ? (
                      <FontAwesomeIcon className="false" icon="times-circle" />
                    ) : (
                      ""
                    )}
                    1 t
                    {
                      <span
                        className={`${
                          textTap === " __ "
                            ? ""
                            : textTap === "  p "
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
                      <FontAwesomeIcon className="right" icon="check-square" />
                    ) : textMap === "  p " ? (
                      <FontAwesomeIcon className="false" icon="times-circle" />
                    ) : (
                      ""
                    )}
                    3 m
                    {
                      <span
                        className={`${
                          textMap === " __ "
                            ? ""
                            : textMap === "  p "
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
                    {textPat === "p" ? (
                      <FontAwesomeIcon className="right" icon="check-square" />
                    ) : textPat === "  a " ? (
                      <FontAwesomeIcon className="false" icon="times-circle" />
                    ) : (
                      ""
                    )}
                    2{" "}
                    {
                      <span
                        className={`${
                          textPat === " __ "
                            ? ""
                            : textPat === "  a "
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
        </div>

      </Fade>
      }
    
    </div>
  );
};

export default App;
