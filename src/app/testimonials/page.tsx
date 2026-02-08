import { testimonials } from '@/lib/content';

export default function TestimonialsPage() {
  return (
    <section className="space-y-8 py-10 md:py-14">
      <h1 className="font-mono text-3xl font-bold uppercase md:text-5xl">What They Say</h1>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className={`relative border-l-4 border-phosphor bg-tape/60 p-6 md:max-w-[85%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
          >
            <p className="absolute right-4 top-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">{testimonial.dateStamp}</p>
            <p className="pr-24 text-lg italic leading-relaxed text-signal/90">“{testimonial.quote}”</p>
            <p className="mt-5 font-mono text-sm uppercase tracking-[0.08em] text-phosphor">{testimonial.name}</p>
            <p className="text-sm text-signal/80">{testimonial.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
