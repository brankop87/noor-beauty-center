import { courses } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#d5b065]">
          Edukacija
        </div>

        <h2 className="max-w-5xl text-4xl leading-none sm:text-6xl">
          Edukacije koje izgledaju kao <span className="italic text-[#d5b065]">premium programi</span>
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
          Ovo je bitna sekcija sajta jer Noor ne prodaje samo uslugu, nego i znanje.
          Zato edukacije moraju da deluju ozbiljno, jasno i vredno.
        </p>

        <div className="mt-10 grid gap-5">
          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded-[28px] border border-[#d5b065]/15 bg-[#2a2320] p-7"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#d5b065]">
                    {course.level}
                  </div>
                  <h3 className="mt-2 text-4xl leading-none">{course.title}</h3>
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
                {course.description}
              </p>

              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {course.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#d5b065]/10 bg-[#1b1614]/40 px-4 py-3 text-sm text-neutral-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}