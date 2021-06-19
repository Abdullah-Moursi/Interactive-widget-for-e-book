import React from "react";
import "../App.scss";

const Footer = ({ setFinalData, setCurChar, setRevealed, data, finalData }) => {
  const replay = () => {
    setFinalData(data);
    setCurChar("");
    setRevealed(false);
  };

  const reveal = () => {
    const revealedData = finalData.map((q) => {
      return { ...q, answered: true };
    });
    setFinalData(revealedData);
    setCurChar("");
    setRevealed(true);
  };
  return (
    <footer>
      <div className="footer">
        <div className="replay">
          <img
            onClick={() => replay()}
            alt="replay"
            src="https://educationalrc.org/tasks/3/assets/images/replay_icon.png"
          />
        </div>
        <div className="reveal">
          <img
            onClick={reveal}
            alt="reveal"
            src="https://educationalrc.org/tasks/3/assets/images/showAns_icon.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
