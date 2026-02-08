import { serviceItems, willNotAcceptDisclaimer } from '@/lib/content';

export default function ServicesPage() {
  return (
    <section className="space-y-10 py-10 md:py-14">
      <h1 className="font-mono text-3xl font-bold uppercase md:text-5xl">Services & Rates</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceItems.map((service) => (
          <article key={service.name} className="border border-phosphor/15 bg-tape p-6 transition-colors hover:border-phosphor/40">
            <p className="text-2xl" aria-hidden="true">
              {service.icon}
            </p>
            <h2 className={`mt-3 font-mono text-xl uppercase ${service.retired ? 'line-through opacity-70' : ''}`}>{service.name}</h2>
            <p className={`mt-3 text-signal/90 ${service.retired ? 'line-through opacity-70' : ''}`}>{service.description}</p>
            <p className={`mt-4 font-mono text-sm uppercase tracking-[0.08em] ${service.retired ? 'line-through opacity-70' : 'text-phosphor'}`}>
              {service.price}
            </p>
            {service.note ? <p className="mt-3 text-sm text-signal">{service.note}</p> : null}
          </article>
        ))}
      </div>

      <aside className="border border-static bg-static/25 p-6 text-sm leading-relaxed text-signal/85">
        <p>
          <strong>NOTICE TO PROSPECTIVE CLIENTS:</strong> {willNotAcceptDisclaimer.replace('NOTICE TO PROSPECTIVE CLIENTS: ', '')}
        </p>
      </aside>
    </section>
  );
}
