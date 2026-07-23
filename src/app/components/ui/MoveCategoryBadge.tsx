import { MonsterMoveCategory } from "../data/MonsterMoveCategory";



type CatBadgeProps = {
  data: MonsterMoveCategory;
  size?: number;
};

export function MoveCategoryBadge( badgeData : CatBadgeProps) {
  return (
    <div style={{ width: "64px", height: "32px" }}>
  <a
    href={`/${badgeData.data.key}.html`}
    title={badgeData.data.name}
    style={{ display: "block", width: "100%", height: "100%" }}
  >
    <img
      src={`/data/MoveCategories/${badgeData.data.key}.png`}
      alt={badgeData.data.name}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        imageRendering: "pixelated",
      }}
    />
  </a>
</div>
  );
}