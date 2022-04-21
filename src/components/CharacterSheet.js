import React from "react";
import classOptionsData from "../data/classOptionsData";
import { joinDuplicates } from "../utilities/utilities";
import { abilityScoreNames } from "../constants/constants";

// export default function

const CharacterSheet = React.forwardRef((props, ref) => {
  const {
    abilityScores,
    character,
    characterStatistics,
    characterClass,
    characterEquipment,
    characterModifiers
  } = props;

  const alignmentCapitalized = character.alignment
    ? character.alignment.charAt(0).toUpperCase() + character.alignment.slice(1)
    : "Alignment";

  const languageText = character.hasLanguages
    ? `${alignmentCapitalized}, Common, ${character.languages.join(", ")}`
    : `${alignmentCapitalized}, Common`;

  const characterFields = [
    ["Background Skill", character.background],
    ["Appearance", character.appearance],
    ["Personality", character.personality],
    ["Misfortune", character.misfortune],
    ["Languages", languageText]
  ];

  const getCharacterFields = () => {
    return characterFields.map(field => {
      const fieldDescription = field[0];
      const fieldValue = field[1];

      return (
        <div
          key={fieldDescription}
          className={`character-container ${fieldValue}`}
        >
          <span className="charsheet-value-name">{fieldDescription}</span>
          <span className="charsheet-value">{fieldValue}</span>{" "}
        </div>
      );
    });
  };

  return (
    <div ref={ref} className="character-sheet-component">
      <h3 className="character--name">{character.name}</h3>
      <h4 className="character--subheader"> Level 1 {characterClass.name}</h4>
      <div className="character-sheet">
        <div className="character-top-container">{getCharacterFields()}</div>

        <div className="ability-scores-container">
          <div className="strength character-container">
            <span className="charsheet-value-name"> Strength </span>
            <span className="charsheet-value">
              {" "}
              {abilityScores.strength}
              {characterModifiers.strengthModMelee !== "0" && (
                <span> ({characterModifiers.strengthModMelee})</span>
              )}
            </span>
          </div>

          <div className="intelligence character-container">
            <span className="charsheet-value-name"> Intelligence </span>
            <span className="charsheet-value">
              {" "}
              {abilityScores.intelligence}{" "}
            </span>
          </div>

          <div className="wisdom character-container">
            <span className="charsheet-value-name"> Wisdom </span>
            <span className="charsheet-value">
              {" "}
              {abilityScores.wisdom}
              {abilityScores.wisdomMod !== "0" && (
                <span> ({characterModifiers.wisdomMod})</span>
              )}
            </span>
          </div>

          <div className="dexterity character-container">
            <span className="charsheet-value-name"> Dexterity </span>
            <span className="charsheet-value">
              {" "}
              {abilityScores.dexterity}
              {characterModifiers.dexterityModMissiles !== "0" && (
                <span> ({characterModifiers.dexterityModMissiles})</span>
              )}
            </span>
          </div>

          <div className="constitution character-container">
            <span className="charsheet-value-name"> Constitution </span>
            <span className="charsheet-value">
              {" "}
              {abilityScores.constitution}
              {characterModifiers.constitutionMod !== "0" && (
                <span> ({characterModifiers.constitutionMod})</span>
              )}
            </span>
          </div>

          <div className="charisma character-container">
            <span className="charsheet-value-name"> Charisma </span>
            <span className="charsheet-value">
              {" "}
              {abilityScores.charisma}
              {characterModifiers.charismaModNPCReactions !== "0" && (
                <span> ({characterModifiers.charismaModNPCReactions})</span>
              )}
            </span>
          </div>
        </div>

        <div className="charsheet-saving-throws-container">
          <div className="character-container">
            <span className="charsheet-value-name">Saving Throws</span>
            <span className="charsheet-value charsheet-value--saving-throws">
              <div>
                <span>Death</span> <span>{characterClass.savingThrows[0]}</span>
              </div>
              <div>
                <span>Wands</span> <span>{characterClass.savingThrows[1]}</span>
              </div>
              <div>
                <span>Paralysis</span>{" "}
                <span>{characterClass.savingThrows[2]}</span>
              </div>
              <div>
                <span>Breath</span>{" "}
                <span>{characterClass.savingThrows[3]}</span>
              </div>
              <div>
                <span>Spells</span>{" "}
                <span>{characterClass.savingThrows[4]}</span>
              </div>
            </span>
          </div>

          <div className="character-container">
            <span className="charsheet-value-name">Abilities</span>
            <span className="charsheet-value character-sheet--class-ability">
              <ul>
                {characterClass.abilities.map((item, index) => {
                  return (
                    <li key={index} className="character-sheet--class-ability">
                      {" "}
                      {item}{" "}
                    </li>
                  );
                })}
              </ul>
            </span>
          </div>

          {character.hasSpells && (
            <div className="character-container">
              <span className="charsheet-value-name">Spells</span>
              <span className="charsheet-value character-sheet--class-ability">
                {character.spells}
              </span>
            </div>
          )}
        </div>

        <div className="character-sheet-ability-list">
          <div className="hit-points character-container">
            <span className="charsheet-value-name">Hit Points</span>{" "}
            <span className="charsheet-value">
              {characterStatistics.hitPoints}
            </span>
          </div>
          <div className="armor-class character-container">
            <span className="charsheet-value-name">Armour Class</span>{" "}
            <span className="charsheet-value">
              {characterStatistics.armourClass}
            </span>
          </div>
          <div className="character-container">
            <span className="charsheet-value-name">Weapons</span>

            <span className="charsheet-value charsheet--weapons">
              {joinDuplicates(characterEquipment.weapons).map((item, index) => {
                return (
                  <span key={index} className="charsheet--weapon-item">
                    {" "}
                    {item}{" "}
                  </span>
                );
              })}
            </span>
          </div>

          <div className="character-container">
            <span className="charsheet-value-name">Armour</span>

            <span className="charsheet-value charsheet--armour">
              {characterEquipment.armour.map((item, index) => {
                return (
                  <span key={index} className="charsheet--armour-item">
                    {" "}
                    {item}{" "}
                  </span>
                );
              })}
            </span>
          </div>

          <div className="character-container">
            <span className="charsheet-value-name">Gear</span>

            <span className="charsheet-value charsheet--gear">
              {joinDuplicates(characterEquipment.adventuringGear).map(
                (item, index) => {
                  return (
                    <span key={index} className="charsheet--gear-item">
                      {" "}
                      {item}{" "}
                    </span>
                  );
                }
              )}
            </span>
          </div>

          <div className="character-container">
            <span className="charsheet-value-name">Gold</span>

            <span className="charsheet-value charsheet--gold">
              {characterEquipment.gold}gp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

CharacterSheet.displayName = "Character Sheet";

export default CharacterSheet;
