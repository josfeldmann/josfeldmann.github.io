import { Monster } from "../data/Monster";

type SmallMonsterBadgeProps = {
  monster: Monster | null;
  pointDirection?: "left" | "right";
};

export function SmallMonsterBadge({
  monster,
  pointDirection
}: SmallMonsterBadgeProps) {

  if (monster == null) return <></>
  const imageSrc = `/data/Monster-Images/${monster.monsterKey}.png`;
  const url = `/monsters/${monster.monsterKey}.html`;

  const pointSize = 16;

  const rectangleBorderStyle: React.CSSProperties =
    pointDirection === "right"
      ? {
          borderTop: "1px solid var(--bs-border-color)",
          borderBottom: "1px solid var(--bs-border-color)",
          borderLeft: "1px solid var(--bs-border-color)"
          // No right border
        }
      : pointDirection === "left"
      ? {
          borderTop: "1px solid var(--bs-border-color)",
          borderBottom: "1px solid var(--bs-border-color)",
          borderRight: "1px solid var(--bs-border-color)"
          // No left border
        }
      : {
          border: "1px solid var(--bs-border-color)"
        };

  return (
    <a
      href={url}
      className="text-decoration-none d-inline-block align-middle"
    >
      <span
        style={{
          position: "relative",
          display: "inline-flex",
          marginLeft: pointDirection === "left" ? pointSize : 0,
          marginRight: pointDirection === "right" ? pointSize : 0
        }}
      >
        {/* Left point */}
        {pointDirection === "left" && (
          <>
            {/* Point border */}
            <span
              style={{
                position: "absolute",
                zIndex: 0,
                left: -pointSize - 1,
                top: -1,
                width: 0,
                height: 0,

                borderTop: "38px solid transparent",
                borderBottom: "38px solid transparent",
                borderRight: `${pointSize + 1}px solid var(--bs-border-color)`
              }}
            />

            {/* Point fill */}
            <span
              style={{
                position: "absolute",
                zIndex: 1,
                left: -pointSize,
                top: 0,
                width: 0,
                height: 0,

                borderTop: "37px solid transparent",
                borderBottom: "37px solid transparent",
                borderRight: `${pointSize}px solid var(--bs-light)`
              }}
            />
          </>
        )}

        {/* Main rectangle */}
        <span
          className={[
            "d-inline-flex",
            "align-items-center",
            "gap-2",
            "px-2",
            "py-1",
            "bg-light",
            "text-dark",
            "text-decoration-none"
          ].join(" ")}
          style={{
            ...rectangleBorderStyle,
            position: "relative",
            zIndex: 2
          }}
        >
          <img
            src={imageSrc}
            width={64}
            height={64}
            style={{
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

        {/* Right point */}
        {pointDirection === "right" && (
          <>
            {/* Point border */}
            <span
              style={{
                position: "absolute",
                zIndex: 0,
                right: -pointSize - 1,
                top: -1,
                width: 0,
                height: 0,

                borderTop: "38px solid transparent",
                borderBottom: "38px solid transparent",
                borderLeft: `${pointSize + 1}px solid var(--bs-border-color)`
              }}
            />

            {/* Point fill */}
            <span
              style={{
                position: "absolute",
                zIndex: 1,
                right: -pointSize,
                top: 0,
                width: 0,
                height: 0,

                borderTop: "37px solid transparent",
                borderBottom: "37px solid transparent",
                borderLeft: `${pointSize}px solid var(--bs-light)`
              }}
            />
          </>
        )}
      </span>
    </a>
  );
}