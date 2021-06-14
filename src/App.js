import React, { useEffect, useState }  from "react";
import "./App.scss";

const App = () => {
  const [curChar, setCurChar] = useState('')
  const [textTap, setTextTap] =useState('  __  ')
  const [textMap, setTextMap] =useState('  __  ')
  const [textPat, setTextPat] =useState('  __  ')

const settingCharTap = () => {
  curChar === 'a' ? setTextTap('a') : curChar === 'p' ? setTextTap('   wrong!!!   ') : setTextTap('  __  ')
}

const settingCharMap = () => {
  curChar === 'a' ? setTextMap('a') : curChar === 'p' ? setTextMap('   wrong!!!   ') : setTextMap('  __  ')
}

const settingCharPat = () => {
  curChar === 'p' ? setTextPat('p') : curChar === 'a' ? setTextPat('   wrong!!!   ') : setTextPat('  __  ')
}


const refresh = () => {
  setTextMap('  __  ')
  setTextPat('  __  ')
  setTextTap('  __  ')
}

const eye = () => {
  setTextMap('a')
  setTextPat('p')
  setTextTap('a')
}









  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="title">
            <h1>Complete the words.</h1>
          </div>
          <div className="up-imgs">
            <div className="resource">
              <img
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
          <button onClick={() => setCurChar('a')} className="question question-1">a</button>
          <button onClick={() => setCurChar('p')} className="question question-2">p</button>
        </div>
        <div className="option-container">
          <div className="line">
              <div className="opt1">
              <div className="opt-text">
                <span onClick={() => settingCharTap()} className="optClick"> 1  t{textTap}p </span>{" "}
              </div>
              <img
                alt="tap"
                src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_1.png"
              />
              </div>

              <div className="opt2">

             
              <div className="opt-text">
                <span onClick={() => settingCharPat()} className="optClick">2  {textPat}at</span>{" "}
              </div>
              <img
              alt="pat"
              src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_2.png"
            />
            </div>
          </div>


          <div className="line">
            <div className="opt3">
            <div className="opt-text">
            <span onClick={() => settingCharMap()} className="optClick">3  m{textMap}p</span>{" "}
            </div>
            <img
              alt="map"
              src="https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_3.png"
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
  );
};

export default App;



// const dummy = (
  //   <img
  //     alt="dummy"
  //     src="https://educationalrc.org/tasks/3/assets/images/dummy.jpg"
  //   />
  // );