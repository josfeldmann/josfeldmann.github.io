import Image from "next/image";
import { Contributor } from "../data/Contributor";

type ContributorBadgeProps = {
  contributor: Contributor;
};

export function ContributorTag({
  contributor
}: ContributorBadgeProps) {
  const imageSrc =`/data/Contributors/${contributor.contributorKey}.png`;
  const url = `/contributors/${contributor.contributorKey}.html`;

  const badgeContent = (
    <span
      className={[
        "d-inline-flex",
        "align-items-center",
        "gap-2",
        "px-2",
        "py-1",
        "rounded-pill",
        "border",
        "bg-light",
        "text-dark",
        "text-decoration-none",
      ].join(" ")}
      title={contributor.contributorDescription}
    >
      <img
        src={imageSrc}
        width={24}
        height={24}
        className="rounded-circle flex-shrink-0"
      />

      <span className="text-nowrap">
        {contributor.contributorName}
      </span>
    </span>
  );


  return (
    <a
      href={url}
      className="text-decoration-none"
    >
      {badgeContent}
    </a>
  );
}