export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d5b065]/10 bg-[#1b1614]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-[28px] font-semibold tracking-[0.14em] text-[#f7efe7]"
        >
          No<span className="text-[#d5b065]">or</span>
        </a>

        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-neutral-300 md:flex">
          <a href="#about" className="hover:text-[#d5b065]">
            O nama
          </a>
          <a href="#services" className="hover:text-[#d5b065]">
            Usluge
          </a>
          <a href="#education" className="hover:text-[#d5b065]">
            Edukacija
          </a>
          <a href="#contact" className="hover:text-[#d5b065]">
            Kontakt
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#d5b065] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black"
        >
          Rezerviši
        </a>
      </div>
    </header>
  );
}