type SingleLineListProps = {
    items: string[];
    renderItem?: (item: string) => React.ReactNode;
};

export function SingleLineList({
    items,
    renderItem,
}: SingleLineListProps) {
    if (items.length === 0) return null;

    return (
        <div
    style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
    }}
>
            {items.map((item) => (
                <div key={item}>
                    {renderItem ? renderItem(item) : item}
                </div>
            ))}
        </div>
    );
}