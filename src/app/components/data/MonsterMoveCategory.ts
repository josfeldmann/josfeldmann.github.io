export class MonsterMoveCategory {
    key: string;
    description: string;
    name: string;
    color: string;

constructor(data: {
    key: string;
    name: string;
    description: string;
    color: string;
  }) {
    this.key = data.key;
    this.description = data.description;
    this.name = data.name;
    this.color = data.color;
    }



}