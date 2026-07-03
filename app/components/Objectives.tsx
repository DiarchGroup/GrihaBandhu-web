const OBJECTIVES = [
  {
    title: "One source of truth",
    desc: "Every drawing, cost, payment and update lives in one place — no more hunting across apps.",
  },
  {
    title: "Transparency by default",
    desc: "Live progress and finances keep builders and homeowners on the same page, always.",
  },
  {
    title: "Fewer delays",
    desc: "Real-time visibility surfaces blockers early, before they slip the whole schedule.",
  },
  {
    title: "Decisions with data",
    desc: "AI-assisted planning and estimates turn guesswork into grounded, reviewable numbers.",
  },
];

export default function Objectives() {
  return (
    <section className="bg-paper-2 text-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Why teams switch
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            A construction OS, not
            <br />
            another tool to juggle
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {OBJECTIVES.map((o, i) => (
            <div key={o.title} className="border-t-2 border-ink pt-5">
              <span className="font-display text-2xl font-extrabold text-orange-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight">
                {o.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
