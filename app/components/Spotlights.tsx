function AiPlannerVisual() {
  const inputs = [
    "Plot 30 × 40 ft",
    "Budget ₹45 L",
    "2 floors",
    "3 bedrooms",
    "Vastu-aligned",
  ];
  const outputs = [
    { label: "Estimated timeline", value: "13 months" },
    { label: "Preliminary cost", value: "₹42.8 L" },
    { label: "BOQ line items", value: "1,240" },
    { label: "Suggested rooms", value: "8 spaces" },
  ];

  return (
    <div className="rounded-sm border border-line bg-paper p-6 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-line pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Plan generated
        </span>
      </div>

      <p className="mt-5 font-body text-[11px] font-semibold uppercase tracking-wider text-faint">
        Your brief
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {inputs.map((chip) => (
          <span
            key={chip}
            className="rounded-sm border border-line bg-paper-2 px-3 py-1.5 font-body text-xs font-medium text-ink"
          >
            {chip}
          </span>
        ))}
      </div>

      <p className="mt-6 font-body text-[11px] font-semibold uppercase tracking-wider text-faint">
        Generated estimate
      </p>
      <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line">
        {outputs.map((o) => (
          <div key={o.label} className="bg-paper p-4">
            <div className="font-display text-2xl font-extrabold text-orange-500">
              {o.value}
            </div>
            <div className="mt-1 font-body text-[11px] font-medium uppercase tracking-wide text-muted">
              {o.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 font-body text-[11px] leading-relaxed text-faint">
        AI suggestions are a starting point. Every plan is reviewed by a
        licensed architect or engineer before execution.
      </p>
    </div>
  );
}

function MonitoringVisual() {
  const cams = [
    { name: "Ground floor — East", live: true },
    { name: "Rebar yard", live: true },
    { name: "Main gate", live: true },
    { name: "Terrace slab", live: false },
  ];

  return (
    <div className="rounded-sm border border-line bg-paper p-6 shadow-2xl">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Site cameras
        </span>
        <span className="font-body text-[11px] font-medium text-faint">
          3 of 4 online
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {cams.map((cam) => (
          <div
            key={cam.name}
            className="relative aspect-video overflow-hidden rounded-sm border border-line bg-paper-2"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, var(--color-line-strong) 0, var(--color-line-strong) 6px, transparent 6px, transparent 14px)",
              }}
            />
            <span
              className={`absolute left-2 top-2 flex items-center gap-1.5 rounded-sm px-1.5 py-0.5 font-body text-[9px] font-bold uppercase tracking-wide ${
                cam.live
                  ? "bg-orange-500 text-ink"
                  : "bg-line text-muted"
              }`}
            >
              {cam.live && (
                <span className="h-1.5 w-1.5 rounded-full bg-paper" />
              )}
              {cam.live ? "Live" : "Offline"}
            </span>
            <span className="absolute bottom-2 left-2 font-body text-[10px] font-medium text-ink">
              {cam.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

type Block = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: React.ReactNode;
  flip?: boolean;
};

const BLOCKS: Block[] = [
  {
    eyebrow: "AI Construction Planner",
    title: "Describe the build. Get a plan.",
    body: "Feed in plot dimensions, budget, floors and preferences — the planner returns a structured plan, timeline, cost estimate and an initial BOQ you can refine.",
    points: [
      "Room allocation and layout suggestions",
      "Preliminary timelines and cost estimates",
      "Vastu and material preferences respected",
    ],
    visual: <AiPlannerVisual />,
  },
  {
    eyebrow: "Live Site Monitoring",
    title: "See the site without being on it.",
    body: "Connect site cameras and give the right people a secure live view — no credentials shared. Track activity, capture snapshots and check camera health from anywhere.",
    points: [
      "Multi-camera live view and snapshots",
      "Viewer tracking and secure access controls",
      "Camera health and activity monitoring",
    ],
    visual: <MonitoringVisual />,
    flip: true,
  },
];

export default function Spotlights() {
  return (
    <section id="projects" className="bg-paper-2">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-24 px-6 py-24 lg:gap-32 lg:px-10 lg:py-32">
        {BLOCKS.map((b) => (
          <div
            key={b.eyebrow}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <div className={b.flip ? "lg:order-2" : ""}>
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                {b.eyebrow}
              </p>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
                {b.title}
              </h2>
              <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted">
                {b.body}
              </p>
              <ul className="mt-7 flex flex-col gap-3">
                {b.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 font-body text-sm text-ink"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-orange-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={b.flip ? "lg:order-1" : ""}>{b.visual}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
