'use client';

import { FormEvent, useState } from 'react';
import { contactSidebarNote, contactSuccessMessage } from '@/lib/content';

type Errors = Partial<Record<'name' | 'email' | 'projectType' | 'description' | 'budget' | 'oath', string>>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const nextErrors: Errors = {};
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const projectType = String(formData.get('projectType') ?? '').trim();
    const description = String(formData.get('description') ?? '').trim();
    const budget = String(formData.get('budget') ?? '').trim();
    const oath = formData.get('oath') === 'on';

    if (!name) nextErrors.name = 'Name is required.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'A valid email is required.';
    if (!projectType) nextErrors.projectType = 'Project type is required.';
    if (!description) nextErrors.description = 'Project description is required.';
    if (!budget) nextErrors.budget = 'Budget range is required.';
    if (!oath) nextErrors.oath = 'You must confirm the oath.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section className="space-y-8 py-10 md:py-14">
      <h1 className="font-mono text-3xl font-bold uppercase md:text-5xl">Book Kenny Before He&apos;s Gone (Again)</h1>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        {submitted ? (
          <p className="border border-phosphor/30 bg-tape/70 p-6 text-base leading-relaxed text-phosphor">{contactSuccessMessage}</p>
        ) : (
          <form className="space-y-5 border border-phosphor/20 bg-tape/70 p-6" onSubmit={handleSubmit} noValidate>
            <Field label="Name" error={errors.name}>
              <input name="name" className="w-full border border-static bg-void px-3 py-2 text-signal focus:border-phosphor focus:outline-none" />
            </Field>
            <Field label="Email" error={errors.email}>
              <input name="email" type="email" className="w-full border border-static bg-void px-3 py-2 text-signal focus:border-phosphor focus:outline-none" />
            </Field>
            <Field label="Project Type" error={errors.projectType}>
              <select name="projectType" className="w-full border border-static bg-void px-3 py-2 text-signal focus:border-phosphor focus:outline-none" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {['Corporate', 'Documentary', 'Live Event', 'News', 'Wedding', 'Other'].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Project Description" error={errors.description}>
              <textarea name="description" rows={5} className="w-full border border-static bg-void px-3 py-2 text-signal focus:border-phosphor focus:outline-none" />
            </Field>
            <Field label="Budget Range" error={errors.budget}>
              <select name="budget" className="w-full border border-static bg-void px-3 py-2 text-signal focus:border-phosphor focus:outline-none" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {['Under $5k', '$5k-$10k', '$10k-$25k', '$25k+', "Let's talk"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <label className="block space-y-2 text-sm">
              <span className="font-mono uppercase tracking-[0.08em]">Required Oath</span>
              <span className="block text-signal/85">
                I solemnly swear this gig does not involve: masks, knives, abandoned houses, anyone named Ghostface, or the phrase &quot;what&apos;s your favorite scary movie.&quot;
              </span>
              <input type="checkbox" name="oath" className="h-4 w-4 accent-phosphor" />
              {errors.oath ? <span className="block text-sm text-vhsRed">{errors.oath}</span> : null}
            </label>
            <button type="submit" className="bg-phosphor px-6 py-3 font-mono text-sm font-semibold uppercase tracking-nav text-void">
              Send Inquiry
            </button>
          </form>
        )}

        <aside className="space-y-4 border border-static bg-static/20 p-6 text-sm">
          <div>
            <p className="font-mono uppercase tracking-[0.08em] text-muted">Email</p>
            <a href="mailto:kenny@kennyjones.com" className="text-phosphor underline underline-offset-2">
              kenny@kennyjones.com
            </a>
          </div>
          <div>
            <p className="font-mono uppercase tracking-[0.08em] text-muted">Based in</p>
            <p>Undisclosed (Not Woodsboro)</p>
          </div>
          <div>
            <p className="font-mono uppercase tracking-[0.08em] text-muted">Response time</p>
            <p>48 hours</p>
          </div>
          <p className="border-t border-static pt-4 text-signal/85">{contactSidebarNote}</p>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="font-mono text-xs uppercase tracking-[0.08em] text-signal">{label}</span>
      {children}
      {error ? <span className="block text-sm text-vhsRed">{error}</span> : null}
    </label>
  );
}
