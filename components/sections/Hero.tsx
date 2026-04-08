import Image from "next/image";
import type { SiteContent } from "@/data/site";

type HeroProps = {
  content: SiteContent;
};

export default function Hero({ content }: HeroProps) {
  return (
    <section id="hero" className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[32px] border border-[#d5b065]/15 bg-white/[0.02] p-8 shadow-2xl shadow-black/20 sm:p-12 lg:p-14">
          <div className="mb-5 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
            {content.hero.eyebrow}
          </div>

          <h1 className="max-w-3xl text-5xl leading-[0.9] tracking-[-0.02em] sm:text-7xl lg:text-[5.6rem]">
            {content.hero.title}
            <span className="italic text-[#d5b065]">{content.hero.accent}</span>
            <br />
            {content.hero.titleEnd}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300">
            {content.siteData.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={content.siteData.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#d5b065] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              {content.hero.primaryCta}
            </a>

            <a
              href={content.siteData.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d5b065]/30 px-6 py-3 text-sm text-[#f7efe7] transition hover:border-[#d5b065]/60"
            >
              {content.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {content.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#d5b065]/15 bg-[#d5b065]/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#e7d3a3]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-[#d5b065]/15 bg-[#241d1a] shadow-2xl shadow-black/20">
            <Image
              src="/images/kaca-hero.jpg"
              alt="Katarina Jakovljevic - Noor Beauty Center"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <div className="inline-block rounded-2xl border border-[#d5b065]/15 bg-black/20 px-4 py-3 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.18em] text-[#d5b065]">
                  Katarina Jakovljevic
                </div>
                <div className="mt-1 text-sm text-neutral-200">
                  {content.hero.ownerRole}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-[#d5b065]/15 bg-[#2a2320] p-6"
              >
                <div className="text-5xl text-[#d5b065]">{stat.value}</div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-300">
                  {stat.label}
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
