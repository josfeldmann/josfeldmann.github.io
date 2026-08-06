import { Contributor } from "../data/Contributor";
import type { GridItemProps } from "./FlexibleGrid";

export function ContributorBadge({
  item: contributor,
}: GridItemProps<Contributor>) {
  return (
    <a
      href={`/credits/${contributor.contributorKey}.html`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "inherit",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <img
        src={`/data/Contributors/${contributor.contributorKey}.png`}
        alt={contributor.contributorName}
        width={128}
        height={128}
        style={{
          display: "block",
          width: "128px",
          height: "128px",
          objectFit: "cover",
          imageRendering: "pixelated",
        }}
      />

      <span
        style={{
          marginTop: "8px",
          fontWeight: "bold",
        }}
      >
        {contributor.contributorName}
      </span>
    </a>
  );
}