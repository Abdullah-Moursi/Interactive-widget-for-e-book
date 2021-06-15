import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import {Modal, ModalHelp} from "./Modal";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(' __ ')
  const [pale, setPale] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  library.add(fab, faCheckSquare, faTimes, faTimesCircle);

  const choices = ['a' ,'p'];
  


  const data = [
    { word: `1 t  ${text}  p`, right: "a", wrong:'p', id: 1, img: {
      alt: 'tap',
      src: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_1.png"
    }
  },
    { word: `2    ${text}  at`, right: "p", wrong:'a', id: 2, img: {
      alt: 'pat',
      src: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_2.png"
    }
},
    { word: `3 m  ${text}  p`, right: "a", wrong:'p', id: 3, img : {
      alt: 'map',
      src:"https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_3.png"
    }
   },
  ];

  const eye = () =>  {
    data.map(({right}) => (
      setText(right)
    ))
      setCurChar("")
      setPale(true)  
  }
  const settingChar = (right, wrong) => {

    curChar === right
      ? (function() {setText(right); playAudio(correct); setCurChar('') })()
      : curChar === wrong
      && (function() {setText(wrong); playAudio(incorrect); setTimeout(() => {setText(' __ ')}, 500)})() 
  };






  const refresh = () => {
    setText(" __ ");
    setCurChar("");
    setPale(false)
  };
  const playAudio = (audio) => {
    new Audio(audio).play();
  }






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
                <Modal dummy="portal" open={isOpen} onClose={() => setIsOpen(false)}>
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
        <div className="back">
        <div className="container">
          <div className="question-container">
            {choices.map((i) => (
              <button 
              onClick={pale === false ? () => setCurChar(i) :''}
              className={`${curChar === i ? "focus" : pale? 'pale' : "question"}`}
              >
                {i}
              </button>
            ))}
          </div>
          <div className="option-container">
            <div className="line">
              <div className="opt1">
                <div className="opt-text">

                  {data.map((i) => (
                    <span 
                    key={i.id}
                    className="optClick">
                      {text === i.right ? (
                       <FontAwesomeIcon className="right" icon="check-square" />
                      ) : text === i.wrong ? (
                        <FontAwesomeIcon className="false" icon="times-circle" />
                      ) : (
                        ""
                      )} 
                      {
                        <span  onClick={() => settingChar(i.right, i.wrong)} className={`${
                          text === " __ " ? '' :text === i.wrong ? 'not-answer' : 'answer'
                        }`}
                        >       {i.word}
                        </span>
                    }
                          <img src={i.img.src} alt={i.img.alt} />
                   
                    </span>
                  ))}



                  
                </div>
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
  ) }

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