import type { SiteContent } from "@/data/site";

type ServicesProps = {
  content: SiteContent;
};

export default function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
          {content.servicesSection.eyebrow}
        </div>

        <h2 className="max-w-4xl text-4xl leading-none sm:text-6xl">
          {content.servicesSection.title}
          <span className="italic text-[#d5b065]">{content.servicesSection.accent}</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.services.map((service) => (
            <article
              key={service.title}
              className="rounded-[26px] border border-[#d5b065]/15 bg-[#2a2320] p-7"
            >
              <h3 className="text-3xl leading-none">{service.title}</h3>
              <p className="mt-4 min-h-[110px] text-sm leading-7 text-neutral-300">
                {service.description}
              </p>
              <div className="mt-4 text-2xl text-[#d5b065]">{service.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
