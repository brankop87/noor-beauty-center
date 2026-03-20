import Image from "next/image";
import { galleryImages } from "@/data/site";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#d5b065]">
            Galerija
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Naši radovi
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
            Pogledaj deo radova i estetiku koju klijentkinje mogu da očekuju.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-[#d5b065]/10 bg-white/5"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />

              {image.category ? (
                <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {image.category}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}