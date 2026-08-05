import { Monster } from "../data/Monster";
import { MonsterDatabase } from "../data/MonsterDatabase";


type SplitBadgeProps = {
  data: Monster;
  scale: number;
};

export default function MonsterBadge({
  data,
  scale = 2,
}: SplitBadgeProps) {

    const db = MonsterDatabase.getInstance();

    const type1 = db.getMonsterType(data.monsterType[0]);
    let type2 = type1;
    if (data.monsterType.length > 1) {
        type2 = db.getMonsterType(data.monsterType[1]);
    }

  return (
    <div id = {data.monsterKey + "card"} 
  style={{
    position: "relative",
    overflow: "hidden",
    
    width: 96 * scale,
    height: 96 * scale,

    //opacity: 0,
    //animation: "fadeIn 0s forwards",
    //animationDelay: "0.25s",
  }}
>
  {/* Top Half */}
  <div
    style={{
      backgroundColor: "#" + type1.color,
      height: "50%",
      width: "100%",
      borderRadius: (scale * 20) + "px " + (scale * 20) + "px 0px 0px"
    }}
  />

  {/* Bottom Half */}
  <div
    style={{
      backgroundColor: "#" + type2.color,
      height: "50%",
      width: "100%",
      borderRadius: "0px 0px " + (scale * 20) + "px " + (scale * 20) + "px"
    }}
  />

  {/* Overlay */}
  <a
    href={`/monsters/${data.monsterKey}.html`}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      textDecoration: "none",
    }}
  >
    {/* Frame */}
    <img
      src="/data/MonsterFrame.png"
      fetchPriority="high"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        imageRendering: "pixelated",
        
      }}
    />

    {/* Monster */}
    <img
      src={`/data/Monster-Images/${data.monsterKey}.png`}
      style={{
        position: "relative",
        zIndex: 1,
        width: scale * 64,
        height: scale * 64,
        objectFit: "contain",
        
        imageRendering: "pixelated"
      }}
      alt={`${data.monsterName} - ${data.title} Novamon`}
    />

    {/* Name */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        color: "white",
        fontWeight: "bold",
        textShadow: "1px 1px 4px black",
      }}
    >
      {data.monsterName}
    </div>
  </a>
</div>
  );
}