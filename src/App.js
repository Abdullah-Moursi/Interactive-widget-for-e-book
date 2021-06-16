import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Modal, ModalHelp } from "./Modal";
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
import correct from "../src/correct.mp3";
import incorrect from "../src/incorrect.mp3";

const App = () => {
  const [curChar, setCurChar] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [text, setText] = useState("");
  const [pale, setPale] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  library.add(fab, faCheckSquare, faTimes, faTimesCircle);

  const choices = ["a", "p"];

  const data = [
    {
      word: `1 tap`,
      missedIndex: 3,
      id: 1,
      img: {
        alt: "tap",
        src: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_1.png",
      },
    },
    {
      word: `2 pat`,
      missedIndex: 2,
      id: 2,
      img: {
        alt: "pat",
        src: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_2.png",
      },
    },
    {
      word: `3 map`,
      missedIndex: 3,
      id: 3,
      img: {
        alt: "map",
        src: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_3.png",
      },
    },
  ];

  // word[missedIndex] === curChar || pale
  // ?  word
  // : word[missedIndex] !== curChar && curChar !== ""
  // ? word.replace(word[missedIndex], curChar)
  // : word.replace(word[missedIndex], " __ ")

  // const wordy = () => {
  // data.map((i, index) => {
  //   i.word[index][i.missedIndex] === curChar || pale ? setText(i.word[index])
  //   : i.word[index][i.missedIndex] !== curChar && curChar !== '' ? setText(i.word[index].replace(i.word[index][i.missedIndex], curChar))  : setText(i.word[index].replace(i.word[index][i.missedIndex], ' __ '))
  // })
  // }

  // const wordy = (i) => {
  //   data.map(({word, missedIndex, id}) => {

  //     if ((word[missedIndex] === curChar || pale) && i === id) setText(word)
  //     if (word[missedIndex] !== curChar && curChar !== '' && i === id) setText(word.replace(word[missedIndex], curChar))
  //     else setText (word.replace(word[missedIndex], ' __ '))
  //     })
  // };

  const eye = () => {
    setCurChar("");
    setPale(true);
  };

  const settingChar = (word, missedIndex) => {
    curChar === word[missedIndex]
      ? (function () {
          // setText(word)
          playAudio(correct);
          setCurChar("");
        })()
      : curChar !== word[missedIndex] &&
        curChar !== "" &&
        (function () {
          // setText(word.replace(word[missedIndex], curChar))
          playAudio(incorrect);
          setTimeout(() => {
            word.replace(word[missedIndex], " __ ");
          }, 500);
        })();
  };

  const refresh = () => {
    setCurChar("");
    setPale(false);
  };
  const playAudio = (audio) => {
    new Audio(audio).play();
  };

  return (
    <div className="App">
      {loading ? (
        <div className="preload">
          {" "}
          <HashLoader color={"#0FA0C5"} loading={loading} size={130} />{" "}
        </div>
      ) : (
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
          <main className="back">
            <div className="container">
              <div className="question-container">
                {choices.map((i, index) => (
                  <button
                    key={index}
                    onClick={() => pale === false && setCurChar(i)}
                    className={`${
                      curChar === i ? "focus" : pale ? "pale" : "question"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
              <div className="option-container">
                <div className="line">
                  <div className="opt-text">
                    {data.map(({ id, word, missedIndex, img }) => (
                      <span
                        key={id}
                        className="optClick"
                      >
                        {word[missedIndex] === curChar ? (
                          <FontAwesomeIcon
                            className="right"
                            icon="check-square"
                          />
                        ) : word[missedIndex] !== curChar && curChar !== "" ? (
                          <FontAwesomeIcon
                            className="false"
                            icon="times-circle"
                          />
                        ) : (
                          ""
                        )}
                        {
                          <span onClick={() => settingChar(word, missedIndex, )}
                            className={`${
                              word[missedIndex] === " __ " || curChar === ""
                                ? ""
                                : word[missedIndex] === curChar
                                ? "answer"
                                : "not-answer"
                            }`}
                          >
                            {" "}
                            {word}
                          </span>
                        }{" "}
                        <img key={id} src={img.src} alt={img.alt} />
                      </span>
                    ))}
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
          </main>
        </Fade>
      )}
    </div>
  );
};

export default App;

//               {/* <span onClick={(id) => settingChar('a', 'p', id)} className="optClick">
//                 {" "}
//                 {text === "a" ? (
//                   <FontAwesomeIcon className="right" icon="check-square" />
//                 ) : text === "  p " ? (
//                   <FontAwesomeIcon className="false" icon="times-circle" />
//                 ) : (
//                   ""
//                 )}
//                 1 t
//                 {
//                   <span
//                     className={`${
//                       text === " __ "
//                         ? ""
//                         : text === "  p "
//                         ? "not-answer"
//                         : "answer"
//                     }`}
//                   >
//                     {text}
//                   </span>
//                 }
//                 p{" "}
//               </span>{" "}
//             </div>
//             <img
//               alt="tap"
//               src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_1.png"
//             />
//           </div>

//           <div className="opt3">
//             <div className="opt-text">
//               <span onClick={(id) => settingChar('a', 'p', id)} className="optClick">
//                 {text === "a" ? (
//                   <FontAwesomeIcon className="right" icon="check-square" />
//                 ) : text === "  p " ? (
//                   <FontAwesomeIcon className="false" icon="times-circle" />
//                 ) : (
//                   ""
//                 )}
//                 3 m
//                 {
//                   <span
//                     className={`${
//                       text === " __ "
//                         ? ""
//                         : text === "  p "
//                         ? "not-answer"
//                         : "answer"
//                     }`}
//                   >
//                     {text}
//                   </span>
//                 }
//                 p
//               </span>{" "}
//             </div>
//             <img
//               alt="map"
//               src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_3.png"
//             />
//           </div>
//         </div>

//         <div className="line">
//           <div className="opt2">
//             <div className="opt-text">
//               <span onClick={(id) => settingChar('p', 'a', id)} className="optClick">
//                 {text === "p" ? (
//                   <FontAwesomeIcon className="right" icon="check-square" />
//                 ) : text === "  a " ? (
//                   <FontAwesomeIcon className="false" icon="times-circle" />
//                 ) : (
//                   ""
//                 )}
//                 2{" "}
//                 {
//                   <span
//                     className={`${
//                       text === " __ "
//                         ? ""
//                         : text === "  a "
//                         ? "not-answer"
//                         : "answer"
//                     }`}
//                   >
//                     {text}
//                   </span>
//                 }
//                 at
//               </span>{" "}
//             </div>
//             <img
//               alt="pat"
//               src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_2.png"
//             />
//           </div>
//         </div> */}

// const settingCharTap = () => {
//   curChar === "a"
//     ? (function() {setTextTap("a"); playAudio(correct); setCurChar('') })()
//     : curChar === "p"
//     ? (function() {setTextTap("  p "); playAudio(incorrect); setTimeout(() => {setTextTap(' __ ')}, 500)})()
//     : setTextTap(" __ ");
// };

// const settingCharMap = () => {
//   curChar === "a"
//     ? (function() {setTextMap("a"); playAudio(correct); setCurChar('')})()
//     : curChar === "p"
//     ? (function() {setTextMap("  p "); playAudio(incorrect);  setTimeout(() => {setTextMap(' __ ')}, 500)})()
//     : setTextMap(" __ ");
// };

// const settingCharPat = () => {
//   curChar === "p"
//   ? (function() {setTextPat("p"); playAudio(correct); setCurChar('')})()
//   : curChar === "a"
//   ? (function() {setTextPat("  a "); playAudio(incorrect);  setTimeout(() => {setTextPat(' __ ')}, 500)})()
//   : setTextPat(" __ ");
// };
