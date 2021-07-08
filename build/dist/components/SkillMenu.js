import React, {useState} from "../../_snowpack/pkg/react.v17.0.2.js";
import clsx from "../../_snowpack/pkg/clsx.v1.1.1.js";
export default function SkillMenu() {
  const [currentSkill, setCurrentSkill] = useState("cmdLine");
  let cmdClsx = clsx("skillMenu-list-item", currentSkill === "cmdLine" && "active");
  let vsCodeClsx = clsx("skillMenu-list-item", currentSkill === "vsCode" && "active");
  let gitClsx = clsx("skillMenu-list-item", currentSkill === "git" && "active");
  let handleSkillChange = (newSkill) => {
    if (newSkill === currentSkill)
      return;
    setCurrentSkill(newSkill);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "skillMenu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("h3", null, "Skills")), /* @__PURE__ */ React.createElement("ul", {
    className: "skillMenu-list"
  }, /* @__PURE__ */ React.createElement("li", {
    onClick: () => handleSkillChange("cmdLine"),
    className: cmdClsx
  }, /* @__PURE__ */ React.createElement("span", null, "Command Line")), /* @__PURE__ */ React.createElement("li", {
    onClick: () => handleSkillChange("vsCode"),
    className: vsCodeClsx
  }, /* @__PURE__ */ React.createElement("span", null, "VS Code")), /* @__PURE__ */ React.createElement("li", {
    onClick: () => handleSkillChange("git"),
    className: gitClsx
  }, /* @__PURE__ */ React.createElement("span", null, "Git"))));
}
