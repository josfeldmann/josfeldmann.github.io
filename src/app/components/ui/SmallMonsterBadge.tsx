import Image from "next/image";
import { Contributor } from "../data/Contributor";
import { Monster } from "../data/Monster";

type SmallMonsterBadgeProps = {
  monster: Monster;
};

export function SmallMonsterBadge({
  monster
}: SmallMonsterBadgeProps) {
  const imageSrc =`/data/Monster-Images/${monster.monsterKey}.png`;
  const url = `/monsters/${monster.monsterKey}.html`;

  const badgeContent = (
    <span
      className={[
        "d-inline-flex",
        "align-middle",
        "align-items-center",
        "gap-2",
        "px-2",
        "py-1",
        "border",
        "bg-light",
        "text-dark",
        "text-decoration-none",
        
      ].join(" ")}
    >
      <img
        src={imageSrc}
        width={64}
        height={64}
        style={{
        position: "relative",
        zIndex: 1,
        objectFit: "contain",
        imageRendering: "pixelated"
      }}
        className="flex-shrink-0"
      alt={`${monster.monsterName} - ${monster.title} Novamon`}

      />

      <span className="text-nowrap">
        {monster.monsterName}
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