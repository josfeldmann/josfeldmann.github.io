import type { ComponentType, CSSProperties } from "react";

export type GridItemProps<T> = {
  item: T;
};

type FlexibleGridProps<T> = {
  items: T[];
  ItemComponent: ComponentType<GridItemProps<T>>;
  getKey: (item: T) => string | number;
  minimumItemWidth?: number;
  gap?: number;
  style?: CSSProperties;
};

export function FlexibleGrid<T>({
  items,
  ItemComponent,
  getKey,
  minimumItemWidth = 128,
  gap = 16,
  style,
}: FlexibleGridProps<T>) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minimumItemWidth}px, 1fr))`,
        gap: `${gap}px`,
        alignItems: "start",
        ...style,
      }}
    >
      {items.map((item) => (
        <ItemComponent key={getKey(item)} item={item} />
      ))}
    </div>
  );
}