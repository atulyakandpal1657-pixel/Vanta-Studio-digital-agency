import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Check, Loader2, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vanta Studio" },
      { name: "description", content: "Tell Vanta Studio about your brand, website or product project." },
      { property: "og:title", content: "Contact — Vanta Studio" },
      { property: "og:description", content: "Start a project with Vanta Studio." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const STUDIO_EMAIL = "hello@vanta.studio";
const budgets = ["Under $10k", "$10k–$25k", "$25k–$50k", "$50k+"];

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  budget: z.string().min(1, "Please choose a budget range"),
  message: z.string().trim().min(20, "Tell us a little more (20+ characters)").max(2000),
});
type Errors = Partial<Record<keyof z.infer<typeof inquirySchema>, string>>;

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = inquirySchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof Errors] ??= issue.message;
      setErrors(errs);
      setStatus("idle");
      const first = Object.keys(errs)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const v = parsed.data;
      const body = `Name: ${v.name}\nEmail: ${v.email}\nCompany: ${v.company || "-"}\nBudget: ${v.budget}\n\n${v.message}`;
      const href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(`New project inquiry — ${v.name}`)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setTimeout(() => setStatus("success"), 600);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="container-x py-32" role="status">
        <span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"><Check /></span>
        <h1 className="display mt-8 text-6xl md:text-8xl">Almost there.</h1>
        <p className="mt-6 max-w-lg text-muted-foreground">
          Your email app should have opened with your inquiry filled in — just press send. If nothing opened, write to us directly at{" "}
          <a href={`mailto:${STUDIO_EMAIL}`} className="text-primary underline">{STUDIO_EMAIL}</a>.
        </p>
        <button onClick={() => setStatus("idle")} className="link-underline mt-8">Send another inquiry</button>
      </section>
    );
  }

  const field = "mt-2 w-full border-b border-input bg-transparent py-3 text-lg outline-none transition-colors focus:border-primary aria-[invalid=true]:border-destructive";

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Tell us<br /><span className="text-primary">everything.</span></>}>
        Share a few details and we'll reply within two working days.
      </PageHero>
      <section className="container-x grid gap-16 md:grid-cols-12">
        <form noValidate onSubmit={onSubmit} className="space-y-8 md:col-span-7" aria-describedby="form-status">
          {status === "error" && (
            <div id="form-status" role="alert" className="flex items-center gap-3 border border-destructive p-4 text-destructive">
              <AlertCircle size={18} /> Something went wrong. Please email {STUDIO_EMAIL} directly.
            </div>
          )}
          <div className="grid gap-8 sm:grid-cols-2">
            <Field label="Your name" name="name" error={errors.name}>
              <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="name-err" />
            </Field>
            <Field label="Email" name="email" error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="email-err" />
            </Field>
          </div>
          <Field label="Company (optional)" name="company" error={errors.company}>
            <input id="company" name="company" autoComplete="organization" className={field} />
          </Field>
          <fieldset>
            <legend className="eyebrow">Budget</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {budgets.map((b) => (
                <label key={b} className="cursor-pointer">
                  <input type="radio" name="budget" value={b} className="peer sr-only" />
                  <span className="block rounded-full border border-border px-4 py-2 text-sm transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:outline-2 peer-focus-visible:outline-ring">{b}</span>
                </label>
              ))}
            </div>
            {errors.budget && <p className="mt-2 text-sm text-destructive" role="alert">{errors.budget}</p>}
          </fieldset>
          <Field label="About the project" name="message" error={errors.message}>
            <textarea id="message" name="message" rows={5} className={`${field} resize-y`} aria-invalid={!!errors.message} aria-describedby="message-err" />
          </Field>
          <button type="submit" disabled={status === "loading"}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-opacity disabled:opacity-60">
            {status === "loading" && <Loader2 className="animate-spin" size={18} />}
            {status === "loading" ? "Preparing…" : "Send inquiry"}
          </button>
        </form>
        <aside className="space-y-8 md:col-span-4 md:col-start-9">
          <div><p className="eyebrow">Email</p><a href={`mailto:${STUDIO_EMAIL}`} className="link-underline mt-2 inline-block text-xl">{STUDIO_EMAIL}</a></div>
          <div><p className="eyebrow">Response time</p><p className="mt-2">Within two working days</p></div>
          <div><p className="eyebrow">Note</p><p className="mt-2 text-sm text-muted-foreground">Submitting opens your email app with the message ready to send.</p></div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow">{label}</label>
      {children}
      {error && <p id={`${name}-err`} className="mt-2 text-sm text-destructive" role="alert">{error}</p>}
    </div>
  );
}
