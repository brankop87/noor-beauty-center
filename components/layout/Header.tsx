import type { Locale, SiteContent } from "@/data/site";

type HeaderProps = {
  locale: Locale;
  navigation: SiteContent["navigation"];
};

export default function Header({ locale, navigation }: HeaderProps) {
  const isEnglish = locale === "en";
  const basePath = isEnglish ? "/en" : "";
  const switchHref = isEnglish ? "/" : "/en";

  return (
    <header className="sticky top-0 z-50 border-b border-[#d5b065]/10 bg-[#1b1614]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href={`${basePath}#hero`}
          className="text-[28px] font-semibold tracking-[0.14em] text-[#f7efe7]"
        >
          No<span className="text-[#d5b065]">or</span>
        </a>

        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-neutral-300 md:flex">
          <a href={`${basePath}#about`} className="hover:text-[#d5b065]">
            {navigation.about}
          </a>
          <a href={`${basePath}#services`} className="hover:text-[#d5b065]">
            {navigation.services}
          </a>
          <a href={`${basePath}#education`} className="hover:text-[#d5b065]">
            {navigation.education}
          </a>
          <a href={`${basePath}#contact`} className="hover:text-[#d5b065]">
            {navigation.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={switchHref}
            className="rounded-full border border-[#d5b065]/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#f7efe7] transition hover:border-[#d5b065]/60"
          >
            {navigation.switchLabel}
          </a>
          <a
            href={`${basePath}#contact`}
            className="rounded-full bg-[#d5b065] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black"
          >
            {navigation.book}
          </a>
        </div>
      </div>
    </header>
  );
}
