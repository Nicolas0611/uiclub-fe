const HERO_GRADIENT =
  "relative mb-10 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.08] via-background to-violet-500/[0.06] shadow-[0_1px_0_0_rgba(255,84,128,0.06)_inset] dark:border-primary/20 dark:from-primary/15 dark:via-neutral-950 dark:to-violet-950/40";

export type FigmaHeroStat = {
  label: string;
  value: string;
  valueClassName?: string;
  /** Applied to the grid cell wrapper (e.g. responsive col-span) */
  className?: string;
};

export type FigmaHeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Must match `id` on the heading for `aria-labelledby` */
  headingId?: string;
  stats?: FigmaHeroStat[];
  className?: string;
};

const DEFAULT_CONTENT = {
  eyebrow: "Figma · Community",
  title: "Figma files",
  description:
    "Browse community files linked to components and design systems—ready to inspect and align your UI with the libraries you already rely on.",
  headingId: "figma-page-heading",
} as const;

function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0 0 0 / 0.04) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-primary/25 blur-3xl dark:bg-primary/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/15"
      />
    </>
  );
}

function FigmaHero({
  eyebrow = DEFAULT_CONTENT.eyebrow,
  title = DEFAULT_CONTENT.title,
  description = DEFAULT_CONTENT.description,
  headingId = DEFAULT_CONTENT.headingId,
  className,
}: FigmaHeroProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={[HERO_GRADIENT, className].filter(Boolean).join(" ")}
    >
      <HeroBackdrop />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h1
            id={headingId}
            className="text-2xl md:text-3xl lg:text-4xl leading-tight"
          >
            {title}
          </h1>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FigmaHero;
