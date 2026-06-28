import { MonsterDictionary } from "./MonsterDictionary";
import { Monster } from "./Monster";
import { AbilityDictionary } from "./AbilityDictionary";
import { Ability } from "./Ability";
import { MonsterTypeDictionary } from "./MonsterTypeDictionary";
import { MonsterType } from "./MonsterType";
import { MonsterMoveDictionary } from "./MonsterMoveDictionary";
import { MonsterMove } from "./MonsterMove";
import { MapLocationDictionary } from "./MapLocationDictionary";
import { MapLocation } from "./MapLocation";
import monsters from '../../../../public/data/monsters.json';

interface Resistance {
    resistance: number;
    type: string;
}

export class MonsterDatabase {
  
  
  
 
  private static instance: MonsterDatabase = new MonsterDatabase(monsters);


 static getInstance(): MonsterDatabase {
    if (!MonsterDatabase.instance) {
      this.instance = new MonsterDatabase(monsters);
    }

    return MonsterDatabase.instance;
  }

  monsters: MonsterDictionary;
  abilities: AbilityDictionary;
  types: MonsterTypeDictionary;
  moves: MonsterMoveDictionary;
  locations : MapLocationDictionary;


  constructor(data: { 
    monsters: Record<string, Monster>,
    abilities: Record<string, Ability>,
    types: Record<string, MonsterType>,
    moves: Record<string, MonsterMove> 
    locations: Record<string,MapLocation>
  }) {

    // Convert each plain object into a Monster instance
    this.monsters = Object.entries(data.monsters).reduce((acc, [key, value]) => {
      acc[key] = new Monster(value);
      return acc;
    }, {} as MonsterDictionary);


    this.abilities = Object.entries(data.abilities).reduce((acc, [key, value]) => {
      acc[key] = new Ability(value);
      return acc;
    }, {} as AbilityDictionary);

    this.types = Object.entries(data.types).reduce((acc, [key, value]) => {
      acc[key] = new MonsterType(value);
      return acc;
    }, {} as MonsterTypeDictionary);
    
    this.moves = Object.entries(data.moves).reduce((acc, [key, value]) => {
      acc[key] = new MonsterMove(value);
      return acc;
    }, {} as MonsterMoveDictionary);

    this.locations =  Object.entries(data.locations).reduce((acc, [key, value]) => {
      acc[key] = new MapLocation(value);
      return acc;
    }, {} as MapLocationDictionary);


  }



  //Abilities
  
  getAbility(id: string) : Ability {
    return this.abilities[id];
  }
 
   getAbilityKeys() : string[] {
    return Object.keys(this.abilities);
  }

  getAllAbilities() : Ability[] {
    return Object.values(this.abilities);
  }


  getTypesByResistance(
    resistances: Resistance[],
    comparison: (value: number) => boolean
  ): string[] {
    return resistances
        .filter(r => comparison(r.resistance))
        .map(r => r.type);
  }

  getWeaknesses(resistances: Resistance[]) : string[] {
   return this.getTypesByResistance(resistances, r => r > 1 );
  }

  
  getResists(resistances: Resistance[]) : string[] {
   return this.getTypesByResistance(resistances, r => (r < 1 && r != 0) );
  }

  getNotAffectedBy(resistances: Resistance[]) : string[] {
   return this.getTypesByResistance(resistances, r => (r == 0) );
  }

  
  
  ///Moves
  
  
  getMove(id: string) : MonsterMove  {
    return this.moves[id];
  }

  getMoveKeys() : string[] {
    return Object.keys(this.moves);
  }

  getAllMoves() : MonsterMove[] {
    return Object.values(this.moves);
  }
  


  ///MonsterTypes

  getMonsterType(id: string) : MonsterType {
    return this.types[id];
  }

   getTypeKeys() : string[] {
    return Object.keys(this.types);
  }

  getAllTypes() : MonsterType[] {
    return Object.values(this.types);
  }


  ///Monsters


  getAllMonsters(): Monster[] {
    return Object.values(this.monsters);
  }

  getMonsterKeys() : string[] {
    return Object.keys(this.monsters);
  }

  getMonster(name: string): Monster {
    return this.monsters[name];
  }


  //Locations
  
  getAllLocations(): MapLocation[] {
    return Object.values(this.locations)
  }

  getLocation(name: string): MapLocation {
    return this.locations[name];
  }

  getLocationKeys() : string[] {
    return Object.keys(this.locations);
  }




  //Getters

  getAllLocationsWithMonster(id: string): string[] {

  const location : string[] = [];
    this.getAllLocations().forEach(element => {
    if (element.monsters.includes(id)) {
      location.push(element.key);
    }
    });
  return location;
  }


  getAllMonstersWithAbility(ability : Ability) {
    const m : Monster[] = [];
    this.getAllMonsters().forEach(element => {
  if (element.abilities.includes(ability.key)) {
    m.push(element);
  }
  });
  return m;
  }


  getAllMonstersWithType(type: MonsterType) : Monster[] {
    const m : Monster[] = [];
    this.getAllMonsters().forEach(element => {
    if (element.monsterType.includes(type.key)) {
      m.push(element);
    }
    });
  return m;
  }

  getAllMonstersWithMove(move: MonsterMove) : Monster[] {
    
  const m : Monster[] = [];
  this.getAllMonsters().forEach(element => {
  if (element.moves.includes(move.key)) {
    m.push(element);
  }
  });
  return m;

  }

  getMonstersFromKeyList(monsters: string[]) : Monster[] {
    const results : Monster[] = [];

    monsters.forEach(element => {
      results.push(this.getMonster(element));
    });

    return results;
  }

   getMovesFromKeyList(moves: string[]): MonsterMove[] {
    const results : MonsterMove[] = [];

    moves.forEach(element => {
      results.push(this.getMove(element));
    });

    return results;
  }

  getAllMovesWithType(type: MonsterType) : MonsterMove[] {
    const m : MonsterMove[] = [];
    this.getAllMoves().forEach(element => {
    if (element.type == type.key) {
      m.push(element);
    }
    });
    return m;
  }

  

  

  
 
}