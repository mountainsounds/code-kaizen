import React from "react";
import LearningTaskMenu from "./components/LearningTaskMenu.js";
import TestTyper from "./components/TestTyper.js";
import DifficultyPicker from "./components/DifficultyPicker.js";
export const App = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    class: "nav-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    class: "active"
  }, "Code Kaizen")), /* @__PURE__ */ React.createElement("main", {
    class: "app-container"
  }, /* @__PURE__ */ React.createElement(LearningTaskMenu, null), /* @__PURE__ */ React.createElement(TestTyper, null), /* @__PURE__ */ React.createElement(DifficultyPicker, null)));
};
