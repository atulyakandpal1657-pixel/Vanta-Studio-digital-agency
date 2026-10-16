import { describe, expect, it } from "vitest";
import { inquirySchema } from "@/routes/contact";

const ok = { name: "Ada", email: "ada@example.com", budget: "$10k–$25k", message: "We need a new brand identity soon." };

describe("contact form validation", () => {
  it("accepts a complete inquiry", () => expect(inquirySchema.safeParse(ok).success).toBe(true));
  it("rejects an invalid email", () => expect(inquirySchema.safeParse({ ...ok, email: "nope" }).success).toBe(false));
  it("requires a message of at least 20 characters", () =>
    expect(inquirySchema.safeParse({ ...ok, message: "too short" }).success).toBe(false));
  it("requires a budget", () => expect(inquirySchema.safeParse({ ...ok, budget: "" }).success).toBe(false));
});
