import React from "react";
import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import correct from "../sounds/correct.mp3";
import incorrect from "../sounds/incorrect.mp3";

const Container = ({
  curChar,
  setCurChar,
  revealed,
  finalData,
  setFinalData,
}) => {
  const choices = ["a", "p"];
  const changeChoice = (char) => {
    if (!revealed) {
      setCurChar(char);
    }
  };

  const playAudio = (audio) => {
    new Audio(audio).play();
  };
  const checkAnswer = (id, word, missedIndex) => {
    const editedQuestion = finalData.find((q) => q.id === id);
    // only invoke function if choice is chosen
    if (curChar && !editedQuestion.answered) {
      const editedData = finalData.map((q) =>
        q.id === editedQuestion.id ? { ...q, answered: true } : q
      );
      setFinalData(editedData);

      if (curChar === word[missedIndex]) {
        playAudio(correct);
      } else {
        playAudio(incorrect);
      }
    }
  };

  return (
    <div className="container">
      <div className="question-container">
        {choices.map((char, index) => (
          <button
            key={index}
            onClick={() => changeChoice(char)}
            className={`${
              curChar === char ? "focused" : revealed ? "revealed" : "question"
            }`}
          >
            {char}
          </button>
        ))}
      </div>
      <div className="option-container">
        {finalData.map(({ id, word, missedIndex, img, answered }, i) => (
          <div key={id} className="optClick">
            {answered ? (
              curChar === word[missedIndex] || revealed ? (
                <FontAwesomeIcon className="right" icon="check-square" />
              ) : (
                <FontAwesomeIcon className="false" icon="times-circle" />
              )
            ) : null}
            <span className="index">{i + 1}</span>
            <span
              className={`${
                answered
                  ? curChar === word[missedIndex] || revealed
                    ? "correct-answer"
                    : "wrong-answer"
                  : ""
              }`}
              onClick={() => checkAnswer(id, word, missedIndex)}
            >
              {answered
                ? curChar === word[missedIndex] || revealed
                  ? word
                  : word.replace(word[missedIndex], curChar)
                : word.replace(word[missedIndex], " __ ")}
            </span>
            <img src={img} alt={word} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
