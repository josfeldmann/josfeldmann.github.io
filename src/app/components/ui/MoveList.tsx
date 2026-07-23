import { MonsterDatabase } from "../data/MonsterDatabase";
import { MonsterMove } from "../data/MonsterMove";
import { MonsterType } from "../data/MonsterType";
import { MoveCategoryBadge } from "./MoveCategoryBadge";
import TypeButton from "./TypeButton";

type MoveListProps = {
  moves: MonsterMove[];
}


export default function MoveList( { moves  } : MoveListProps) {
  const moveList = Object.values(moves);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Type
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Category
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Power
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {moveList.map((move) => (
            <tr key={move.key} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <a href={`/moves/${move.key}.html`}>
                {move.name}
                </a>
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <TypeButton data={MonsterDatabase.getInstance().getMonsterType(move.type)}/>
              </td>

              <td className="border border-gray-300 px-4 py-2 capitalize">
                <MoveCategoryBadge data={MonsterDatabase.getInstance().getMoveCategory(move.category)} />
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {move.power}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {move.description || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}