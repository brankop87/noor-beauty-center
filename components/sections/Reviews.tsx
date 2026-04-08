import type { SiteContent } from "@/data/site";

type ReviewsProps = {
  content: SiteContent;
};

export default function Reviews({ content }: ReviewsProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
          {content.reviewsSection.eyebrow}
        </div>

        <h2 className="max-w-4xl text-4xl sm:text-6xl">
          {content.reviewsSection.title}
          <span className="italic text-[#d5b065]">{content.reviewsSection.accent}</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.reviewsSection.reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[24px] border border-[#d5b065]/15 bg-[#2a2320] p-6"
            >
              <p className="text-sm leading-7 text-neutral-300">&quot;{review.text}&quot;</p>
              <div className="mt-4 text-sm text-[#d5b065]">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
