import { Monster } from "../data/Monster"
import { MonsterDatabase } from "../data/MonsterDatabase"
import { SingleLineList } from "./SingleLineList";
import TypeButton from "./TypeButton";

interface MonsterResistanceTableProps {
    monster: Monster;
}

export default function MonsterResistanceTable({
    monster,
}: MonsterResistanceTableProps) {
    const db = MonsterDatabase.getInstance();

    const weaknesses = db.getWeaknesses(monster.resistances);
    const resistances = db.getResists(monster.resistances);
    const notAffected = db.getNotAffectedBy(monster.resistances);

    return (
        <div className="table-responsive">
            <table className="table table-sm align-middle mb-0">
                <thead>
                    <tr>
                        {weaknesses.length > 0 && <th>Weaknesses</th>}
                        {resistances.length > 0 && <th>Resistances</th>}
                        {notAffected.length > 0 && <th>Not Affected</th>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {weaknesses.length > 0 && (
                            <td>
                                <SingleLineList
                                    items={weaknesses}
                                    renderItem={(monsterType) => (
                                        <TypeButton
                                            data={db.getMonsterType(monsterType)}
                                        />
                                    )}
                                />
                            </td>
                        )}

                        {resistances.length > 0 && (
                            <td>
                                <SingleLineList
                                    items={resistances}
                                    renderItem={(monsterType) => (
                                        <TypeButton
                                            data={db.getMonsterType(monsterType)}
                                        />
                                    )}
                                />
                            </td>
                        )}

                        {notAffected.length > 0 && (
                            <td>
                                <SingleLineList
                                    items={notAffected}
                                    renderItem={(monsterType) => (
                                        <TypeButton
                                            data={db.getMonsterType(monsterType)}
                                        />
                                    )}
                                />
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}