import Link from "next/link";

export default function FloatingContact() {
  return (
    <Link
      href="/#contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-body text-sm font-semibold tracking-wide text-white shadow-lg transition-colors hover:bg-orange-600"
    >
      <span className="grid h-4 w-4 place-items-center">
        <span className="block h-2 w-2 rotate-45 border-r-2 border-t-2 border-current" />
      </span>
      Contact us
    </Link>
  );
}
