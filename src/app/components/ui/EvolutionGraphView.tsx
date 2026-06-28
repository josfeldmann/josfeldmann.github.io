import { MonsterDatabase } from "../data/MonsterDatabase"
import { EvolutionGraph } from "../data/EvolutionGraph";
import MonsterBadge from "./MonsterBadge";

type EvolutionGraphViewProps = {
    graph: EvolutionGraph | null;
};

export default function EvolutionGraphView({
    graph,
}: EvolutionGraphViewProps) {
    const db = MonsterDatabase.getInstance();

    if (graph == null) return;

    return (
        <div
            className="position-relative mx-auto"
            style={{
                width: graph?.width,
                height: graph?.height,
            }}
        >
            <svg
                className="position-absolute top-0 start-0"
                width={graph?.width}
                height={graph?.height}
            >
                {graph?.arrows.map((arrow, index) => (
                    <line
                        key={index}
                        x1={arrow.startx}
                        y1={arrow.starty}
                        x2={arrow.endx}
                        y2={arrow.endy}
                        stroke="black"
                        strokeWidth={3}
                    />
                ))}
            </svg>

            {graph?.nodes.map((node, index) => (
                <div
                    key={`${node.key}-${index}`}
                    className="position-absolute"
                    style={{
                        left: node.x,
                        top: node.y,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <MonsterBadge
                        data={db.getMonster(node.key)}
                        scale={1}
                    />
                </div>
            ))}
        </div>
    );
}