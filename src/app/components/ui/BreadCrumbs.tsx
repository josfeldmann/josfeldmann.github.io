type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className={`breadcrumb-item ${
                isCurrentPage ? "active" : ""
              }`}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {!isCurrentPage && item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                item.label
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}