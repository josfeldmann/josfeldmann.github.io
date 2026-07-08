import { Contributor } from "../data/Contributor"
import { ContributorTag } from "./ContributorTag";

type ContributorCredit = {
  contributor: Contributor;
  credit: string;
};

type ContributorCreditsListProps = {
  contributorCredits: ContributorCredit[];
};

export function ContributorCreditsList({
  contributorCredits,
}: ContributorCreditsListProps) {
  if (contributorCredits.length === 0) {
    return null;
  }

  return (
    <ul>
      {contributorCredits.map(({ contributor, credit }) => (
        <li key={`${contributor.contributorKey}-${credit}`}>
          {`${credit} : `}
          <ContributorTag contributor={contributor}/>
          
        </li>
      ))}
    </ul>
  );
}