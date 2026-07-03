type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const FEATURES: Feature[] = [
  {
    title: "Project Dashboard",
    desc: "Progress, phases, milestones, budget, deadlines and site updates — every project at a glance.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="3" width="7" height="9" />
        <rect x="14" y="3" width="7" height="5" />
        <rect x="14" y="12" width="7" height="9" />
        <rect x="3" y="16" width="7" height="5" />
      </svg>
    ),
  },
  {
    title: "AI Construction Planner",
    desc: "Turn plot size, budget and requirements into structured plans, timelines and cost estimates.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="3.2" />
      </svg>
    ),
  },
  {
    title: "Live Site Monitoring",
    desc: "Watch connected site cameras in real time — activity, snapshots and camera health, access-controlled.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M3 7h11v10H3z" />
        <path d="M14 10l7-3v10l-7-3" />
        <circle cx="8" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "BOQ Estimator",
    desc: "Materials, labour, equipment, GST and wastage — standardized estimates with approval workflow.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="4" y="3" width="16" height="18" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Drawing & Documents",
    desc: "Architectural, structural and CAD files in one place — with versions, approvals and secure sharing.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v4h4" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Payments & Finance",
    desc: "Milestone payments, schedules, receipts and reconciliation — full financial transparency.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="6" width="18" height="12" rx="1" />
        <path d="M3 10h18" />
        <path d="M7 15h3" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    desc: "Role-based access for builders, architects, engineers, finance and homeowners alike.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="8" cy="9" r="3" />
        <circle cx="17" cy="10" r="2.4" />
        <path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M15 19c0-1.9 1.1-3.4 3-3.9" />
      </svg>
    ),
  },
  {
    title: "Progress Tracking",
    desc: "Daily logs, worker attendance, material updates and delay monitoring across every phase.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M3 20h18" />
        <path d="M6 20V11M11 20V6M16 20v-6M21 20V4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            One platform, end to end
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
            Everything a build needs,
            <br />
            in one system
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted">
            Plan, monitor, cost and collaborate through the whole construction
            lifecycle — from the first estimate to the final handover.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group relative flex flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
            >
              <span className="absolute right-6 top-6 font-display text-sm font-bold text-num transition-colors group-hover:text-orange-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-10 w-10 text-orange-500">{f.icon}</span>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ink">
                {f.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
