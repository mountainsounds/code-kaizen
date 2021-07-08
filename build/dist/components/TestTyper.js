import React, {useState} from "../../_snowpack/pkg/react.v17.0.2.js";
import clsx from "../../_snowpack/pkg/clsx.v1.1.1.js";
import {novice} from "../storage/cmdLineData.js";
export default function TestTyper() {
  console.log("novice: ", novice);
  const [isPractice, setIsPractice] = useState(true);
  let clsxPractice = clsx("option", "option--one", isPractice && "focus");
  let clsxLearn = clsx("option", "option--four", !isPractice && "focus");
  function handlePracticeSwitch(studyType) {
    if (studyType === "practice" && isPractice === false)
      setIsPractice(!isPractice);
    if (studyType === "learn" && isPractice === true)
      setIsPractice(!isPractice);
  }
  return /* @__PURE__ */ React.createElement("main", {
    className: "mainSection"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "practiceStatusContainer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: clsxPractice,
    tabIndex: "0",
    onClick: () => handlePracticeSwitch("practice")
  }, " Practice "), /* @__PURE__ */ React.createElement("div", {
    className: clsxLearn,
    tabIndex: "0",
    onClick: () => handlePracticeSwitch("learn")
  }, " Learn ")), /* @__PURE__ */ React.createElement("div", {
    className: "test-container"
  }, /* @__PURE__ */ React.createElement("h2", null, " VS Code "), /* @__PURE__ */ React.createElement("button", {
    id: "word"
  }, "Begin"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "text",
    autoComplete: "off",
    placeholder: "Answer...",
    autoFocus: true
  }), /* @__PURE__ */ React.createElement("p", {
    className: "time-container"
  }, "Remaining time: ", /* @__PURE__ */ React.createElement("span", {
    id: "time"
  }, "10s")), /* @__PURE__ */ React.createElement("p", {
    className: "score-container"
  }, "# Correct: ", /* @__PURE__ */ React.createElement("span", {
    id: "score"
  }, "0")), /* @__PURE__ */ React.createElement("div", {
    id: "end-game-container",
    className: "end-game-container"
  })));
}
