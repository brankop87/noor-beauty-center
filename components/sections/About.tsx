export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#d5b065]/15 bg-[#241e1b] p-8 sm:p-12">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
          Ko je Noor
        </div>

        <h2 className="max-w-4xl text-4xl leading-none sm:text-6xl">
          Mesto gde se spajaju <span className="italic text-[#d5b065]">preciznost</span>,
          estetika i iskustvo.
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">
          Noor Beauty Center nije samo salon, već prostor u kome klijentkinje dolaze
          po kvalitet, urednost i osećaj sigurnosti. Fokus je na postojanom radu,
          čistoj estetici i individualnom pristupu.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-300">
          Pored usluga, Noor razvija i edukacije za buduće nail artiste, tako da sajt
          mora da pokaže i lepotu rada i ozbiljnost znanja.
        </p>
      </div>
    </section>
  );
}