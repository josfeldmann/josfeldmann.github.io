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
import { ContributorDictionary } from "./ContributorDictionary";
import { Contributor } from "./Contributor";
import { MonsterMoveCategoryDictionary } from "./MonsterMoveCategoryDictionary";
import { MonsterMoveCategory } from "./MonsterMoveCategory";
import { TagDictionary } from "./TagDictionary";
import { Tag } from "./Tag";

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
  contributors : ContributorDictionary;
  moveCategories: MonsterMoveCategoryDictionary;
  tags : TagDictionary;


  constructor(data: { 
    monsters: Record<string, Monster>,
    abilities: Record<string, Ability>,
    types: Record<string, MonsterType>,
    moves: Record<string, MonsterMove> 
    locations: Record<string,MapLocation>
    contributors : Record<string, Contributor>
    moveCategories : Record<string, MonsterMoveCategory>
    tags : Record<string, Tag>
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

    this.contributors =  Object.entries(data.contributors).reduce((acc, [key, value]) => {
      acc[key] = new Contributor(value);
      return acc;
    }, {} as ContributorDictionary);


    this.moveCategories =  Object.entries(data.moveCategories).reduce((acc, [key, value]) => {
      acc[key] = new MonsterMoveCategory(value);
      return acc;
    }, {} as MonsterMoveCategoryDictionary);

    this.tags =  Object.entries(data.tags).reduce((acc, [key, value]) => {
      acc[key] = new MonsterMoveCategory(value);
      return acc;
    }, {} as TagDictionary);

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

  //Tags

  getAllTags() : Tag[] {
    return Object.values(this.tags);
  }

  getTag(key : string) : Tag {
    return this.tags[key];
  }

  getTagKeys() : string[] {
    return Object.keys(this.tags);
  }



  //Type resistances

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

  getAllTypeKeys() : string[] {
    return Object.keys(this.types);
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

  getContributor(name: string) : Contributor {
    return this.contributors[name];
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

  getAllContributors() : Contributor[] {
    return Object.values(this.contributors);
  }


  getAllMoveCategories() : MonsterMoveCategory[] {
    return Object.values(this.moveCategories);
  }


  getMoveCategory(name: string): MonsterMoveCategory {
    return this.moveCategories[name];
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



  getAllMonstersFromContributor(contributor: Contributor) {
    
    const m : Monster[] = [];
    this.getAllMonsters().forEach(element => {
  
      element.contributors.forEach(cc => {
        if (cc.contributorKey == contributor.contributorKey) {
          if (!m.includes(element))m.push(element); 
        }
      });

    });
  return m;

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


  getContributorsFromMonster(contributors: { contributorKey: string; credit: string; }[]): { contributor:Contributor, credit:string }[] {
    const results : { contributor:Contributor, credit:string }[] = [];

    contributors.forEach(element => {
      const v =this.getContributor(element.contributorKey);
      
      results.push({
        contributor: v,
        credit: element.credit
      });
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

  getAllMovesWithTag(tag: Tag) : MonsterMove[] {
    const m : MonsterMove[] = [];
    this.getAllMoves().forEach(element => {
    if (element.tags.includes(tag.key)) {
      m.push(element);
    }
    });
    return m;
  }

  getAllMovesWithCategory(cat : string ) {
    const m : MonsterMove[] = [];
    this.getAllMoves().forEach(element => {
    if (element.category.includes(cat)) {
      m.push(element);
    }
    });
    return m;
  }






  

  

  
 
}