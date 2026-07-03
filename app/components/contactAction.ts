"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"firstName" | "email", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const newsletter = formData.get("newsletter") === "on";
  const description = String(formData.get("description") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (!firstName) errors.firstName = "First name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.error("Resend not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.");
    return {
      status: "error",
      message: "Something went wrong on our end. Please email us directly.",
    };
  }

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Griha Bandhu <${from}>`,
      to,
      replyTo: email,
      subject: `New enquiry from ${fullName}`,
      html: `
        <h2>New contact enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Newsletter:</strong> ${newsletter ? "Yes" : "No"}</p>
        <p><strong>Project description:</strong></p>
        <p>${escapeHtml(description) || "<em>—</em>"}</p>
      `,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return {
        status: "error",
        message: "Couldn't send your message. Please try again.",
      };
    }
  } catch (err) {
    console.error("Resend threw:", err);
    return {
      status: "error",
      message: "Couldn't send your message. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Thanks — we'll reach out within one business day.",
  };
}
