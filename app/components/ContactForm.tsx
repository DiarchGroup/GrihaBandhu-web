"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "./contactAction";

const initialState: ContactState = { status: "idle", message: "" };

const labelBase = "block font-body text-sm text-ink";
const inputBase =
  "mt-2 w-full border-0 border-b border-line-strong bg-transparent pb-2 font-body text-base text-ink placeholder:text-faint focus:border-ink focus:outline-none";
const errorBase = "mt-2 font-body text-xs text-orange-600";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-ink px-8 py-3 font-body text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Submit"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="border-t border-ink pt-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ink">
          Message received
        </p>
        <p className="mt-3 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ink">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex max-w-xl flex-col gap-5">
      <div>
        <p className="mb-3 font-body text-sm font-semibold text-ink">
          Name <span className="text-faint">(required)</span>
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelBase}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className={inputBase}
            />
            {state.errors?.firstName && (
              <p className={errorBase}>{state.errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className={labelBase}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={inputBase}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>
          Email <span className="text-faint">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputBase}
        />
        {state.errors?.email && <p className={errorBase}>{state.errors.email}</p>}
      </div>

      <label className="flex items-center gap-3 font-body text-sm text-ink">
        <input
          name="newsletter"
          type="checkbox"
          className="h-4 w-4 rounded-full accent-ink"
        />
        Sign up for news and updates
      </label>

      <div>
        <label htmlFor="description" className={labelBase}>
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          className={`${inputBase} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p aria-live="polite" className="font-body text-sm text-orange-600">
          {state.message}
        </p>
      )}

      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
