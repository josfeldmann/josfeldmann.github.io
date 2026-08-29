import { Monster } from "../data/Monster";
import MonsterBadge from "./MonsterBadge";

type GridProps<T> = {
  items: T[];
  maxColumns?: number;
  gap?: number;
  minColumnWidth?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
};

function Grid<T>({
  items,
  maxColumns = 5,
  gap = 16,
  minColumnWidth = 180,
  renderItem,
}: GridProps<T>) {
  return (
    <div
      style={{
        display: "grid",

        // Add columns only when they fit on the screen.
        gridTemplateColumns: `repeat(
          auto-fit,
          minmax(min(100%, ${minColumnWidth}px), 1fr)
        )`,

        gap: `${gap}px`,

        // Prevent the grid from ever growing beyond maxColumns.
        maxWidth: `${
          maxColumns * minColumnWidth + (maxColumns - 1) * gap
        }px`,

        width: "100%",
        margin: "0 auto",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}

type MonsterGridProps = {
  monsters: Monster[];
  columns?: number;
};

export default function MonsterGrid({
  monsters,
  columns = 5,
}: MonsterGridProps) {
  return (
    <Grid
      items={monsters}
      maxColumns={columns}
      minColumnWidth={180}
      renderItem={(monster) => (
        <MonsterBadge data={monster} scale={2} />
      )}
    />
  );
}