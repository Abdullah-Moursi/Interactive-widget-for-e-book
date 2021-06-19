import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faTimes,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import HashLoader from "react-spinners/HashLoader";

import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const data = [
  {
    word: `tap`,
    missedIndex: 1,
    id: 1,
    answered: false,
    img: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_1.png",
  },
  {
    word: `pat`,
    missedIndex: 0,
    id: 2,
    answered: false,
    img: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_2.png",
  },
  {
    word: `map`,
    missedIndex: 1,
    id: 3,
    answered: false,
    img: "https://educationalrc.org/tasks/3/assets/images/p19e24/p19ex24q1_3.png",
  },
];

const App = () => {
  library.add(fab, faCheckSquare, faTimes, faTimesCircle);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [curChar, setCurChar] = useState("");
  const [finalData, setFinalData] = useState(data);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="preload">
          <HashLoader color={"#0FA0C5"} loading={loading} size={130} />
        </div>
      ) : (
        <Fade right cascade>
          <Header
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isOpenHelp={isOpenHelp}
            setIsOpenHelp={setIsOpenHelp}
          />
          <main className="back">
            <Container
              curChar={curChar}
              setCurChar={setCurChar}
              revealed={revealed}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <Footer
              setFinalData={setFinalData}
              setCurChar={setCurChar}
              setRevealed={setRevealed}
              data={data}
              finalData={finalData}
            />
          </main>
        </Fade>
      )}
    </div>
  );
};

export default App;
