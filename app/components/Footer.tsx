import Image from "next/image";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      "Project Dashboard",
      "AI Planner",
      "Live Monitoring",
      "BOQ Estimator",
      "Payments",
    ],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Contact", "Security", "Status"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Guides", "Case studies", "Support", "Pricing"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Griha Bandhu"
              width={2038}
              height={771}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-muted">
              The AI-powered construction operating system — planning,
              monitoring, finance and collaboration in one platform.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-faint">
                {col.heading}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-faint">
            © 2026 Griha Bandhu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-xs text-faint transition-colors hover:text-ink"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-body text-xs text-faint transition-colors hover:text-ink"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
