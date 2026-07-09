import Image from "next/image";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] flex-col overflow-hidden bg-paper">
      {/* Top navigation */}
      <nav className="relative z-30 mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center" aria-label="Griha Bandhu home">
          <Image
            src="/grihabandhu-logo.png"
            alt="Griha Bandhu"
            width={628}
            height={224}
            priority
            className="h-9 w-auto lg:h-10"
          />
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-bold tracking-wide text-ink transition-colors hover:text-orange-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Giant backdrop wordmark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center font-display font-black uppercase leading-none tracking-tight text-num select-none"
        style={{ fontSize: "clamp(5rem, 20vw, 20rem)" }}
      >
        Grihabandhu
      </span>

      {/* Figure — right side, transparent PNG sits on the light page */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-end justify-end">
        <div className="relative h-[110vh] min-h-[640px] w-auto translate-x-[10%] lg:translate-x-[4%]">
          <Image
            src="/correctlogo.png"
            alt="Griha Bandhu site engineer wearing an orange safety helmet"
            width={1024}
            height={1536}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Headline — bottom left */}
      <div className="relative z-20 mt-auto mx-auto flex w-full max-w-[1600px] items-end justify-between gap-8 px-6 pb-10 lg:px-10 lg:pb-14">
        <div>
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Residential &amp; commercial builders
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Design and construction
            <br />
            of homes that last, by{" "}
            <span className="text-orange-500">Griha Bandhu</span>
          </h1>
        </div>


      </div>
    </section>
  );
}
