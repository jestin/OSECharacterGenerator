/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function DetailsScreen(props) {
  const [characterName, setCharacterName] = useState(null);
  const [alignment, setAlignment] = useState(null);
  const [appearance, setAppearance] = useState(null);
  const [personality, setPersonality] = useState(null);
  const [background, setBackground] = useState(null);
  const [misfortune, setMisfortune] = useState(null);

  const choose = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const handleName = event => {
    setCharacterName(event.currentTarget.value);
  };

  const handleAlignment = event => {
    setAlignment(event.currentTarget.value);
  };

  const getName = () => {
    const firstNames = [
      "Balthazar",
      "Basil",
      "Bertram",
      "Blaxton",
      "Chadwick",
      "Clovis",
      "Jules",
      "Leopold",
      "Merrick",
      "Mortimer",
      "Ogden",
      "Orion",
      "Destrian",
      "Ellis",
      "Erasmus",
      "Faustus",
      "Finn",
      "Fitzhugh",
      "Oswald",
      "Percival",
      "Quentin",
      "Redmaine",
      "Reinhold",
      "Florian",
      "Fox",
      "Godwin",
      "Giles",
      "Hannibal",
      "Jasper",
      "Joffrey",
      "Jiles",
      "Silas",
      "Stilton",
      "Stratford",
      "Tenpiece",
      "Waverly",
      "Webster",
      "Adelaide",
      "Alma",
      "Barsaba",
      "Beatrix",
      "Bianca",
      "Cleopha",
      "Morgot",
      "Minerva",
      "Nerissa",
      "Odette",
      "Olga",
      "Orchid",
      "Clover",
      "Constance",
      "Damaris",
      "Daphne",
      "Demona",
      "Elsbeth",
      "Pepper",
      "Phoebe",
      "Piety",
      "Poppy",
      "Silence",
      "Sybil",
      "Esme",
      "Fern",
      "Hester",
      "Hippolyta",
      "Jessamine",
      "Jilly",
      "Trillby",
      "Tuesday",
      "Ursula",
      "Vivian",
      "Wendy",
      "Zora"
    ];

    const lastNames = [
      "Belvedere",
      "Bithesea",
      "Calaver",
      "Carvolo",
      "De Rippe",
      "Drolle",
      "La Marque",
      "Malmora",
      "Miter",
      "Oblington",
      "Onymous",
      "Phillifent",
      "Dunlow",
      "Edevane",
      "Erelong",
      "Febland",
      "Fernsby",
      "Fisk",
      "Portendorfer",
      "Romatet",
      "Rothery",
      "Skorbeck",
      "Slora",
      "Southwark",
      "Gastrell",
      "Girdwood",
      "Gorgon",
      "Grimeson",
      "Gruger",
      "Hitheryon",
      "Stavish",
      "Vandermeer",
      "Wellbelove",
      "Westergren",
      "Wexley",
      "Wilberforce",

      "Barrow",
      "Beetleman",
      "Berrycloth",
      "Birdwhistle",
      "Bobich",
      "Chips",
      "Knibbs",
      "Midnighter",
      "Needle",
      "Nethercoat",
      "Pestle",
      "Relish",
      "Coffin",
      "Crumpling",
      "Culpepper",
      "Dankworth",
      "Digworthy",
      "Dreggs",
      "Rumbold",
      "Rummage",
      "Sallow",
      "Saltmarsh",
      "Silverless",
      "Skitter",
      "Gimble",
      "Graveworm",
      "Greelish",
      "Hardwick",
      "Hatman",
      "Hovel",
      "Slee",
      "Slitherly",
      "Stoker",
      "Tarwater",
      "Tumbler",
      "Villin"
    ];

    let fullName = `${choose(firstNames)} ${choose(lastNames)}`;

    setCharacterName(fullName);
  };

  const getAppearance = () => {
    const appearances = [
      "aquiline",
      "athletic",
      "barrel-chested",
      "boney",
      "brawny",
      "brutish",
      "bullnecked",
      "chiseled",
      "coltish",
      "corpulent",
      "craggy",
      "delicate",
      "furrowed",
      "gaunt",
      "gorgeous",
      "grizzled",
      "haggard",
      "handsome",
      "hideous",
      "lanky",
      "pudgy",
      "ripped",
      "rosy",
      "scrawny",
      "sinewy",
      "slender",
      "slumped",
      "solid",
      "square-jawed",
      "statuesque",
      "towering",
      "trim",
      "weathered",
      "willowy",
      "wiry",
      "wrinkly"
    ];

    setAppearance(choose(appearances));
  };

  const getBackground = () => {
    let bgs = [];
    bgs = bgs.concat(Array(3).fill("Animal trainer"));
    bgs = bgs.concat(Array(2).fill("Armorer"));
    bgs = bgs.concat(Array(4).fill("Baker"));
    bgs = bgs.concat(Array(3).fill("Blacksmith"));
    bgs = bgs.concat(Array(1).fill("Bookbinder"));
    bgs = bgs.concat(Array(4).fill("Bowyer/fletcher"));
    bgs = bgs.concat(Array(4).fill("Brewer"));
    bgs = bgs.concat(Array(3).fill("Butcher"));
    bgs = bgs.concat(Array(3).fill("Carpenter"));
    bgs = bgs.concat(Array(3).fill("Chandler"));
    bgs = bgs.concat(Array(3).fill("Cooper"));
    bgs = bgs.concat(Array(2).fill("Coppersmith"));
    bgs = bgs.concat(Array(10).fill("Farmer"));
    bgs = bgs.concat(Array(4).fill("Fisher"));
    bgs = bgs.concat(Array(4).fill("Furrier"));
    bgs = bgs.concat(Array(1).fill("Glassblower"));
    bgs = bgs.concat(Array(4).fill("Hunter"));
    bgs = bgs.concat(Array(3).fill("Jeweller"));
    bgs = bgs.concat(Array(3).fill("Lorimer"));
    bgs = bgs.concat(Array(1).fill("Cartographer"));
    bgs = bgs.concat(Array(3).fill("Mason"));
    bgs = bgs.concat(Array(3).fill("Miner"));
    bgs = bgs.concat(Array(3).fill("Potter"));
    bgs = bgs.concat(Array(2).fill("Roper"));
    bgs = bgs.concat(Array(3).fill("Sailor"));
    bgs = bgs.concat(Array(3).fill("Shipwright"));
    bgs = bgs.concat(Array(3).fill("Tailor"));
    bgs = bgs.concat(Array(3).fill("Tanner"));
    bgs = bgs.concat(Array(3).fill("Thatcher"));
    bgs = bgs.concat(Array(3).fill("Lumberjack"));
    bgs = bgs.concat(Array(2).fill("Vinter"));
    bgs = bgs.concat(Array(1).fill("Noble bastard"));

    setBackground(choose(bgs));
  };

  const getPersonality = () => {
    var traits = [
      "boorish",
      "aggressive",
      "arrogant",
      "cruel",
      "compulsive",
      "rude",
      "paranoid",
      "greedy",
      "hateful",
      "ambitious",
      "insane",
      "intolerant",
      "lustful",
      "pessimistic",
      "absent-minded",
      "amiable",
      "nervous",
      "eccentric",
      "bookish",
      "chill",
      "mischievous",
      "loquacious",
      "homesick",
      "humble",
      "curious",
      "flirtatious",
      "foolhardy",
      "flamboyant",
      "stoic",
      "gregarious",
      "secretive",
      "naive",
      "proud",
      "taciturn",
      "superstitious",
      "devoted",
      "friendly",
      "faithful",
      "eloquent",
      "brave",
      "cautious",
      "celibate",
      "generous",
      "cheerful",
      "confident",
      "polite",
      "resolute",
      "persuasive",
      "industrious",
      "strict",
      "merciful",
      "gentle-hearted",
      "protective",
      "helpful",
      "honorable",
      "loyal",
      "shrewd",
      "pure",
      "jealous",
      "vengeful",
      "shrewd",
      "impulsive",
      "charitable",
      "daring",
      "reckless",
      "ambitious"
    ];
    let num = 2;
    let selectedPersonalities = [];
    for (let i = 0; i < num; i++) {
      let trait = choose(traits);
      selectedPersonalities.push(trait);
      traits = traits.filter(k => k !== trait);
    }

    setPersonality(selectedPersonalities.join(", "));
  };

  const getMisfortune = () => {
    const misfortunes = [
      "abandoned",
      "addicted",
      "blackmailed",
      "burgled",
      "challenged",
      "framed",
      "haunted",
      "humiliated",
      "impoverished",
      "kidnapped",
      "lost",
      "condemned",
      "cursed",
      "injured",
      "defrauded",
      "demoted",
      "depressed",
      "mobbed",
      "overworked",
      "unemployed",
      "poisoned",
      "pursued",
      "rejected",
      "discredited",
      "dismissed",
      "disowned",
      "exiled",
      "famished",
      "forgotten",
      "replaced",
      "robbed",
      "sick",
      "sued",
      "suspected",
      "transformed",
      "shunned",
      "forsaken",
      "damned",
      "murdered",
      "followed",
      "misunderstood",
      "unappreciated",
      "unpopular",
      "destitute"
    ];

    let randomMisfortune = choose(misfortunes);
    setMisfortune(randomMisfortune);
  };

  return (
    <div className="details-screen-container">
      <div id="print-wrapper">
        <h3 className="header-default">Character Details</h3>

        <div className="character-details-form">
          <label className="form-label form-label--name">
            <div className="form-text">Choose Name:</div>
            <input
              className="form-input"
              type="text"
              value={characterName}
              onChange={handleName}
            />
            <button
              className="button button--random-name"
              onClick={getName}
              type="button"
            >
              Random Name
            </button>
          </label>

          <div className="form-label form-label--alignment">
            <div className="form-text">Select Alignment:</div>

            <div className="alignment-button-container">
              <button
                type="button"
                value="lawful"
                className={
                  alignment === "lawful"
                    ? "button button--alignment button--alignment--selected"
                    : "button button--alignment"
                }
                onClick={e => handleAlignment(e, "value")}
              >
                Lawful
              </button>
              <button
                type="button"
                value="neutral"
                className={
                  alignment === "neutral"
                    ? "button button--alignment button--alignment--selected"
                    : "button button--alignment"
                }
                onClick={e => handleAlignment(e, "value")}
              >
                Neutral
              </button>
              <button
                type="button"
                value="chaotic"
                className={
                  alignment === "chaotic"
                    ? "button button--alignment button--alignment--selected"
                    : "button button--alignment"
                }
                onClick={e => handleAlignment(e, "value")}
              >
                Chaotic
              </button>
            </div>
          </div>

          <div className="form-label form-label--optional-details">
            <div type="button" className="form-text">
              Optional Details
            </div>

            {!appearance && (
              <button
                type="button"
                className="button button--optional-details"
                onClick={getAppearance}
              >
                Roll Appearance
              </button>
            )}

            {appearance && (
              <div className="details-result">
                <span className="details-result--name"> Appearance: </span>
                <span className="details-result--data"> {appearance}</span>
              </div>
            )}

            {!personality && (
              <button
                type="button"
                className="button button--optional-details"
                onClick={getPersonality}
              >
                Roll Personality
              </button>
            )}

            {personality && (
              <div className="details-result">
                <span className="details-result--name">Personality:</span>
                <span className="details-result--data">{personality}</span>
              </div>
            )}

            {!background && (
              <button
                type="button"
                className="button button--optional-details"
                onClick={getBackground}
              >
                Roll Background
              </button>
            )}

            {background && (
              <div className="details-result">
                <span className="details-result--name">Background:</span>
                <span className="details-result--data">{background}</span>
              </div>
            )}

            {!misfortune && (
              <button
                type="button"
                className="button button--optional-details"
                onClick={getMisfortune}
              >
                Roll Misfortune
              </button>
            )}

            {misfortune && (
              <div className="details-result">
                <span className="details-result--name">Misfortune:</span>
                <span className="details-result--data">{misfortune}</span>
              </div>
            )}
          </div>
        </div>

        <button
          className="button button--character-sheet"
          onClick={() => {
            let stateObject = {
              characterName: characterName,
              alignment: alignment,
              appearance: appearance,
              background: background,
              personality: personality,
              misfortune: misfortune
            };
            props.updateParentState(stateObject);
            props.showCharacterSheetScreen();
          }}
        >
          Go to Character Sheet
        </button>
      </div>
    </div>
  );
}