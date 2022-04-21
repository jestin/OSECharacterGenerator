import React, { useState } from "react";
import ClassDescription from "./ClassDescription";
import ClassOptionsButton from "./ClassOptionsButton";
import classOptionsData from "../data/classOptionsData";

export default function ClassOptions(props) {
  const { characterClass, abilityScores, changeCharacterClass } = props;

  const [advancedClassesDisplay, setAdvancedClassesDisplay] = useState(false);

  const listBasicClassOptions = () => {
    let basicCharacters = [];
    for (let i = 0; i < 7; i++) {
      let item = classOptionsData[i];
      basicCharacters.push(
        <ClassOptionsButton
          key={item.name}
          characterClass={item}
          abilityScores={abilityScores}
          changeCharacterClass={changeCharacterClass}
        ></ClassOptionsButton>
      );
    }

    return basicCharacters;
  };

  const listAdvancedClassOptions = () => {
    let advancedCharacters = [];
    for (let i = 7; i < classOptionsData.length; i++) {
      let item = classOptionsData[i];
      advancedCharacters.push(
        <ClassOptionsButton
          key={item.name}
          characterClass={item}
          abilityScores={abilityScores}
          changeCharacterClass={changeCharacterClass}
        ></ClassOptionsButton>
      );
    }
    return advancedCharacters;
  };

  return (
    <div className="class-options-container container">
      <div className="basic-class-container">{listBasicClassOptions()}</div>
      <h3 className="advanced-classes-header">
        Advanced Classes
        <input
          type="checkbox"
          value="Advanced Classes"
          className="checkbox"
          checked={advancedClassesDisplay}
          onChange={() => setAdvancedClassesDisplay(!advancedClassesDisplay)}
        ></input>
      </h3>
      <div className="advanced-class-container">
        {advancedClassesDisplay ? listAdvancedClassOptions() : ""}
      </div>

      <ClassDescription characterClass={characterClass}></ClassDescription>
    </div>
  );
}