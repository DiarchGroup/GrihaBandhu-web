const ROLES = [
  "Builders",
  "Homeowners",
  "Architects",
  "Structural Engineers",
  "Interior Designers",
  "Project Managers",
  "Site Supervisors",
  "Real Estate Developers",
  "Administrators",
];

export default function Roles() {
  return (
    <section id="about" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Role-based access
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Built for everyone
              <br />
              on the site
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted">
              Every stakeholder sees exactly what their role needs — nothing
              more. One project, one source of truth, the right view for each
              person.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
            {ROLES.map((role, i) => (
              <li
                key={role}
                className="group flex items-center gap-3 bg-paper px-5 py-6 transition-colors hover:bg-paper-2"
              >
                <span className="font-display text-xs font-bold text-num transition-colors group-hover:text-orange-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-sm font-medium text-ink">
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
