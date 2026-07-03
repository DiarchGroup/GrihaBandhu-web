const REPLACES = [
  "Spreadsheets",
  "WhatsApp groups",
  "Email chains",
  "Paper trails",
  "Scattered drives",
  "Missed calls",
];

export default function ThesisStrip() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16">
        <h2 className="max-w-xl font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
          The build is one project.
          <br />
          <span className="text-orange-500">The tools shouldn&apos;t be ten.</span>
        </h2>

        <div className="flex flex-wrap gap-3">
          {REPLACES.map((item) => (
            <span
              key={item}
              className="font-body text-sm font-medium text-muted line-through decoration-orange-500/70 decoration-2"
            >
              {item}
            </span>
          ))}
          <span className="font-body text-sm font-semibold text-ink">
            → one platform.
          </span>
        </div>
      </div>
    </section>
  );
}
