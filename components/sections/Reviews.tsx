export default function Reviews() {
  const reviews = [
    {
      name: "Milica S.",
      text: "Najlepši nokti koje sam ikada imala. Sve je uredno, precizno i trajno.",
    },
    {
      name: "Jelena M.",
      text: "Katarina radi savršeno, sve preporuke. Salon izgleda premium i oseća se kvalitet.",
    },
    {
      name: "Ana P.",
      text: "Edukacija je bila vrhunska. Sve jasno objašnjeno i praktično.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
          Iskustva klijenata
        </div>

        <h2 className="max-w-4xl text-4xl sm:text-6xl">
          Klijentkinje koje se <span className="italic text-[#d5b065]">vraćaju</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-[24px] border border-[#d5b065]/15 bg-[#2a2320] p-6"
            >
              <p className="text-sm text-neutral-300 leading-7">“{r.text}”</p>
              <div className="mt-4 text-sm text-[#d5b065]">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}