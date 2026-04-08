import type { SiteContent } from "@/data/site";

type EducationProps = {
  content: SiteContent;
};

export default function Education({ content }: EducationProps) {
  return (
    <section id="education" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
          {content.educationSection.eyebrow}
        </div>

        <h2 className="max-w-5xl text-4xl leading-none sm:text-6xl">
          {content.educationSection.title}
          <span className="italic text-[#d5b065]">{content.educationSection.accent}</span>
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
          {content.educationSection.intro}
        </p>

        <div className="mt-10 rounded-[28px] border border-[#d5b065]/15 bg-[#2a2320] p-7 sm:p-8">
          <div className="inline-flex rounded-full border border-[#d5b065]/20 bg-[#d5b065]/8 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#e7d3a3]">
            {content.educationSection.note}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={content.siteData.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#d5b065] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              {content.educationSection.whatsappCta}
            </a>

            <a
              href={content.siteData.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d5b065]/30 px-6 py-3 text-sm text-[#f7efe7] transition hover:border-[#d5b065]/60"
            >
              {content.educationSection.instagramCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
