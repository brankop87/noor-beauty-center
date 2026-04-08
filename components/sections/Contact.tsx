import type { SiteContent } from "@/data/site";

type ContactProps = {
  content: SiteContent;
};

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[30px] border border-[#d5b065]/15 bg-[#2a2320] p-8">
          <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
            {content.contactSection.eyebrow}
          </div>

          <h2 className="text-4xl leading-none sm:text-5xl">
            {content.contactSection.title}
            <span className="italic text-[#d5b065]">{content.contactSection.accent}</span>
            {content.contactSection.titleEnd}
          </h2>

          <div className="mt-8 space-y-5 text-neutral-300">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#d5b065]">
                {content.contactSection.addressLabel}
              </div>
              <div className="mt-1">{content.siteData.address}</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#d5b065]">
                {content.contactSection.phoneLabel}
              </div>
              <a href={`tel:${content.siteData.phone}`} className="mt-1 block hover:text-white">
                {content.siteData.phoneDisplay}
              </a>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#d5b065]">
                {content.contactSection.instagramLabel}
              </div>
              <a
                href={content.siteData.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block hover:text-white"
              >
                {content.siteData.instagramHandle}
              </a>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#d5b065]">
                {content.contactSection.workingHoursLabel}
              </div>
              <div className="mt-1">{content.siteData.workingHours}</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={content.siteData.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#d5b065] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              {content.contactSection.whatsappCta}
            </a>

            <a
              href={content.siteData.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d5b065]/30 px-6 py-3 text-sm"
            >
              {content.contactSection.instagramCta}
            </a>
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-[30px] border border-[#d5b065]/15 bg-[#2a2320]">
          <iframe
            title={content.contactSection.mapTitle}
            src="https://www.google.com/maps?q=Milovana%20Gu%C5%A1i%C4%87a%2019%2F3%2C%20Kragujevac&z=15&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl justify-start px-1">
        <a
          href="https://petkovicsolutions.com"
          target="_blank"
          rel="noreferrer"
          className="relative z-10 inline-flex rounded-md px-1.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#d5b065]/55 underline-offset-4 transition hover:text-[#d5b065]/80 hover:underline"
        >
          Powered by Petkovic Solutions
        </a>
      </div>
    </section>
  );
}
