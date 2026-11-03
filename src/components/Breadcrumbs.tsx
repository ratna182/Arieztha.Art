import Link from "next/link";

export interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-sky-100">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="text-sky-200 underline-offset-2 transition-colors hover:text-white hover:underline"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-sky-300">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
