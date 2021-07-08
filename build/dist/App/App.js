import React from "../../_snowpack/pkg/react.v17.0.2.js";
import SkillMenu from "../components/SkillMenu.js";
import TestTyper from "../components/TestTyper.js";
import DifficultyPicker from "../components/DifficultyPicker.js";
export default function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "nav-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "active"
  }, "Code Kaizen")), /* @__PURE__ */ React.createElement("main", {
    className: "app-container"
  }, /* @__PURE__ */ React.createElement(SkillMenu, null), /* @__PURE__ */ React.createElement(TestTyper, null), /* @__PURE__ */ React.createElement(DifficultyPicker, null)));
}
