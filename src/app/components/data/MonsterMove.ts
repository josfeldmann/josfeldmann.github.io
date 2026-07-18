export class MonsterMove {
  key: string;
  name: string;
  description: string;
  type : string;

  category : string;
  power: number;

  tags: string[];
  

  constructor(data: {
    key: string;
    name: string;
    description: string;
    type : string;
    power : number;
    category : string;
    tags : string[]
  }) {
    this.key = data.key;
    this.description = data.description;
    this.name = data.name;
    this.type = data.type;
    this.category = data.category;
    this.power = data.power;
    if (data.tags != null) {
      this.tags = data.tags;
    } else {
      this.tags = [];
    }
    }
}

