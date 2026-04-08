import type { SiteContent } from "@/data/site";

type AboutProps = {
  content: SiteContent;
};

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#d5b065]/15 bg-[#241e1b] p-8 sm:p-12">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
          {content.about.eyebrow}
        </div>

        <h2 className="max-w-4xl text-4xl leading-none sm:text-6xl">
          {content.about.title}
          <span className="italic text-[#d5b065]">{content.about.accent}</span>
          {content.about.titleEnd}
        </h2>

        {content.about.paragraphs.map((paragraph, index) => (
          <p
            key={`${index}-${paragraph}`}
            className="mt-6 max-w-3xl text-base leading-8 text-neutral-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
