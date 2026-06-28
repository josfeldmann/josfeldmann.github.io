import { Monster } from "../data/Monster";
import { MonsterDatabase } from "../data/MonsterDatabase";
import { MonsterType } from "../data/MonsterType";


type TypeButtonProps = {
  data: MonsterType;
  size?: number;
};

export default function TypeButton({
  data,
  size = 192,
}: TypeButtonProps) {

  return (
<a href={`/types/${data.key}.html`}>
<div
    style={{
        borderRadius: "3px",
        minWidth: "60px",
        display: "inline-block",
        backgroundColor: "#" + data.color,
        padding: "4px",
        border: "1px solid #000",
        color: "white",
        textAlign: "center",
        textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    }}
>
    {data.name}
</div>
</a>
);
}