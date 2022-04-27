import React, { useState, useEffect } from 'react'
import LandingScreen from './LandingScreen'
import {
  abilityScoreNames,
  defaultAbilityScoresState
} from '../constants/constants'
import { getPrimeReqMod, updateAbilityModifiers, d6 } from '../utilities/utilities'
import AbilityScreen from './AbilityScreen'
import classOptionsData from '../data/classOptionsData'
import ClassScreen from './ClassScreen'
import EquipmentScreen from './EquipmentScreen'
import DetailsScreen from './DetailsScreen'
import CharacterSheetScreen from './CharacterSheetScreen'
import { getRandomNumbers } from '../API/getRandomNumbers'
import CharacterStorageScreen from './CharacterStorageScreen'
import { v4 as uuidv4 } from 'uuid'
import { Dice } from '../utilities/DiceBox'
import { isMobile } from 'react-device-detect'

export default function CharacterGenerator() {
  const [character, setCharacter] = useState({
    id: null,
    name: null,
    languages: [],
    hasLanguages: null,
    personality: null,
    misfortune: null,
    appearance: null,
    backgroundSkill: null,
    alignment: null
  })

  const [abilityScores, setAbilityScores] = useState(defaultAbilityScoresState)

  const [characterModifiers, setCharacterModifiers] = useState({
    primeReq: '0',
    strengthModMelee: '0',
    strengthModDoors: '0',
    intelligenceModLanguages: '0',
    intelligenceModLiteracy: '',
    intelligenceModExtraLanguageCount: '0',
    wisdomMod: '0',
    dexterityModAC: '0',
    dexterityModMissiles: '0',
    dexterityModInitiative: '0',
    constitutionMod: '0',
    charismaModNPCReactions: '0',
    charismaModRetainersMax: '0',
    charismaModLoyalty: '0'
  })

  const [characterStatistics, setCharacterStatistics] = useState({
    hitPoints: null,
    armourClass: null,
    spell: null,
    hasSpells: false,
    unarmouredAC: null
  })

  const [pointBuy, setPointBuy] = useState(0)

  const [characterClass, setCharacterClass] = useState({
    name: null,
    primeReqs: []
  })

  const [screen, setScreen] = useState({
    equipmentScreen: false,
    abilityScreen: true,
    classScreen: false,
    detailsScreen: false,
    characterSheetScreen: false,
    characterStorageScreen: false
  })

  const [characterEquipment, setCharacterEquipment] = useState({
    armour: [],
    weapons: [],
    adventuringGear: [],
    gold: null
  })

  const [loadingRandomNumbers, setLoadingRandomNumbers] = useState(true)
  const [randomNumbers, setRandomNumbers] = useState([])

  const [characterRolled, setCharacterRolled] = useState(false)
  const [rollButtonHover, setRollButtonHover] = useState(false)

  const [pendingRoll, setPendingRoll] = useState('')

  const loadRandomNumbers = async function() {
    const randomNumbers = await getRandomNumbers()
    if (randomNumbers) {
      setRandomNumbers(randomNumbers)
    }
    setLoadingRandomNumbers(false)
  }

  useEffect(() => {
    loadRandomNumbers()
  }, [])

  useEffect(() => {
    if (characterRolled) {
      const newCharacterModifiers = updateAbilityModifiers(abilityScores)
      const primeReqValue = getPrimeReqMod(abilityScores, characterClass)
      newCharacterModifiers.primeReq = primeReqValue
      setCharacterModifiers(newCharacterModifiers)
    }
  }, [abilityScores, characterClass])

  const rollAttribute = (e) => {
    const attribute = e.target.value

    const newCharacterAbilityScores = { ...abilityScores }

    if (isMobile && attribute === 'all') {
      abilityScoreNames.forEach((score) => {
        const dieResult = d6(3, randomNumbers)
        newCharacterAbilityScores[score] = dieResult
        newCharacterAbilityScores[`${score}Original`] = dieResult
      })

      setAbilityScores(newCharacterAbilityScores)
      return
    }

    if (isMobile) {
      const dieResult = d6(3, randomNumbers)
      newCharacterAbilityScores[attribute] = dieResult
      newCharacterAbilityScores[`${attribute}Original`] = dieResult
      setAbilityScores(newCharacterAbilityScores)
      return
    }

    if (!isMobile && attribute === 'all') {
      setPendingRoll('all')
      Dice.show().roll('3d6', { theme: '#ff0000' })
      Dice.roll('3d6', { theme: '#061577' })
      Dice.roll('3d6', { theme: '#09720e' })
      Dice.roll('3d6', { theme: '#000000' })
      Dice.roll('3d6', { theme: '#654200' })
      Dice.roll('3d6', { theme: '#8b1876' })
    } else {
      setPendingRoll(attribute)
      Dice.show().roll('3d6')
    }
  }

  Dice.onRollComplete = (rollResults) => {
    setPendingRoll(null)
    const newAbilityScores = { ...abilityScores }
    if (pendingRoll === 'all') {
      abilityScoreNames.forEach((attr, i) => {
        newAbilityScores[attr] = rollResults[i]?.value
        newAbilityScores[`${attr}Original`] = rollResults[i]?.value
      })
    } else {
      newAbilityScores[pendingRoll] = rollResults[0].value
      newAbilityScores[`${pendingRoll}Original`] = rollResults[0].value
    }

    setPointBuy(0)
    setAbilityScores(newAbilityScores)
  }

  const rollCharacter = () => {
    const newID = uuidv4()

    setCharacter({ ...character, id: newID })
    setRollButtonHover(false)
    setCharacterClass({ name: null, primeReqs: [] })
    setCharacterRolled(true)

    setAbilityScores(defaultAbilityScoresState)
    setScreen({ ...screen, AbilityScreen: true })
    setPointBuy(0)
  }

  const changeCharacterClass = (event) => {
    const characterClass = classOptionsData.find(
      (obj) => obj.name === event.target.value
    )

    setCharacterClass(characterClass)
  }

  return (
    <div className={`wrapper ${rollButtonHover ? 'wrapper-alt' : ''}`}>
      <LandingScreen
        rollButtonHover={rollButtonHover}
        setRollButtonHover={setRollButtonHover}
        loadingRandomNumbers={loadingRandomNumbers}
        setLoadingRandomNumbers={setLoadingRandomNumbers}
        characterRolled={characterRolled}
        setCharacterRolled={setCharacterRolled}
        rollCharacter={rollCharacter}
        screen={screen}
        setScreen={setScreen}
      ></LandingScreen>
      <div
        className={'character-menu container'}
        style={{ display: characterRolled ? 'flex' : 'none' }}
      >
        {screen.abilityScreen && characterRolled && (
          <AbilityScreen
            characterRolled={characterRolled}
            characterClass={characterClass}
            abilityScores={abilityScores}
            changeCharacterClass={changeCharacterClass}
            setAbilityScores={setAbilityScores}
            pointBuy={pointBuy}
            setPointBuy={setPointBuy}
            characterModifiers={characterModifiers}
            rollCharacter={rollCharacter}
            rollAttribute={rollAttribute}
            screen={screen}
            setScreen={setScreen}
          ></AbilityScreen>
        )}

        {screen.classScreen && (
          <ClassScreen
            screen={screen}
            setScreen={setScreen}
            characterClass={characterClass}
            character={character}
            setCharacter={setCharacter}
            characterModifiers={characterModifiers}
            characterStatistics={characterStatistics}
            setCharacterStatistics={setCharacterStatistics}
          ></ClassScreen>
        )}

        {screen.equipmentScreen && (
          <EquipmentScreen
            characterClass={characterClass}
            screen={screen}
            setScreen={setScreen}
            characterModifiers={characterModifiers}
            characterStatistics={characterStatistics}
            setCharacterStatistics={setCharacterStatistics}
            characterEquipment={characterEquipment}
            setCharacterEquipment={setCharacterEquipment}
            randomNumbers={randomNumbers}
          />
        )}

        {screen.detailsScreen && (
          <DetailsScreen
            screen={screen}
            setScreen={setScreen}
            character={character}
            setCharacter={setCharacter}
            characterClass={characterClass}
            characterModifiers={characterModifiers}
          ></DetailsScreen>
        )}

        {screen.characterSheetScreen && (
          <CharacterSheetScreen
            screen={screen}
            setScreen={setScreen}
            character={character}
            characterStatistics={characterStatistics}
            characterClass={characterClass}
            characterEquipment={characterEquipment}
            characterModifiers={characterModifiers}
            abilityScores={abilityScores}
            setCharacterRolled={setCharacterRolled}
          ></CharacterSheetScreen>
        )}

        {screen.characterStorageScreen && (
          <CharacterStorageScreen
            screen={screen}
            setScreen={setScreen}
            character={character}
            setCharacter={setCharacter}
            characterStatistics={characterStatistics}
            setCharacterStatistics={setCharacterStatistics}
            characterClass={characterClass}
            setCharacterClass={setCharacterClass}
            characterEquipment={characterEquipment}
            setCharacterEquipment={setCharacterEquipment}
            characterModifiers={characterModifiers}
            setCharacterModifiers={setCharacterModifiers}
            abilityScores={abilityScores}
            setAbilityScores={setAbilityScores}
            setCharacterRolled={setCharacterRolled}
          ></CharacterStorageScreen>
        )}
      </div>
    </div>
  )
}
