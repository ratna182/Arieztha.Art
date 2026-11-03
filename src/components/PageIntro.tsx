import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

export default function PageIntro({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-sky-900 pb-14 pt-10 text-white sm:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.28),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky-100 sm:text-lg">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
