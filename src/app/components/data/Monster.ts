import { EvolutionGraph } from "./EvolutionGraph";
import { MonsterDatabase } from "./MonsterDatabase";

export class Monster {
  
  monsterKey: string;
  monsterName: string;
  monsterID: number;
  monsterType: string[];
  baseStats: {
    HP: number;
    ATTACK: number;
    DEFENSE: number;
    SPECIALATTACK: number;
    SPECIALDEFENSE: number;
    SPEED: number;
  };
  abilities: string[];
  moves: string[];
  evolutions: string | null;
  resistances: {
        resistance: number;
        type: string;
    }[];
  shortDescription: string;
  longDescription: string;

  evolutionGraph: EvolutionGraph | null;
  tuxemonLink : string;
  contributors : { contributorKey: string, credit: string  }[];
  title : string;

  constructor(data: {
    monsterKey : string;
    monsterName: string;
    monsterID: number;
    monsterType: string[];
    baseStats: {
      HP: number;
      ATTACK: number;
      DEFENSE: number;
      SPECIALATTACK: number;
      SPECIALDEFENSE: number;
      SPEED: number;
    };
    abilities: string[];
    moves: string[];
    evolutions: string | null;
    resistances:  {
        resistance: number;
        type: string;
    }[];
    shortDescription: string;
    longDescription: string;
    evolutionGraph : EvolutionGraph | null;
    contributors : { contributorKey: string, credit: string  }[];
    tuxemonLink : string,
    title: string,
  }) {
    this.monsterKey = data.monsterKey;
    this.monsterName = data.monsterName;
    this.monsterID = data.monsterID;
    this.monsterType = data.monsterType;
    this.baseStats = data.baseStats;
    this.abilities = data.abilities;
    this.moves = data.moves;
    this.evolutions = data.evolutions;
    this.resistances = data.resistances;
    this.shortDescription = data.shortDescription;
    this.longDescription = data.longDescription;
    this.evolutionGraph = data.evolutionGraph;
    this.contributors = data.contributors;
    this.tuxemonLink = data.tuxemonLink;
    this.title = data.title;
  }


  
}