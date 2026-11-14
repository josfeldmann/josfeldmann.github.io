export class Stat {
  key: string;
  name: string;
  color: string;
  description: string;
  

  constructor(data: {
    key: string;
    name: string;
    color: string;
    description : string;
  }) {
    this.key = data.key;
    this.name = data.name;
    this.color = data.color;
    this.description = data.description;
    }
}