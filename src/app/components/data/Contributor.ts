
export class Contributor {

  contributorKey: string;
  contributorName: string;
  contributorDescription: string;
  contributorLink: string;
  tuxemonLink: string;
  associatedMonsters: string[];

  constructor( data: {
  contributorKey: string,
  contributorName: string,
  contributorDescription: string,
  contributorLink: string,
  tuxemonLink: string,
  associatedMonsters: string[]
  }
) {
  this.contributorKey = data.contributorKey
  this.contributorName = data.contributorName
  this.contributorDescription = data.contributorDescription
  this.contributorLink = data.contributorLink
  this.tuxemonLink = data.tuxemonLink;
  this.associatedMonsters = data.associatedMonsters
}

}
