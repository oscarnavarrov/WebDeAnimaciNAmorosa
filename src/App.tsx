import { useState } from "react";
import paintedEye from "./assets/painted-eye.png";

const HeartIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
    />
  </svg>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4ede3] text-[#3b241c]">
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full bg-[#d7a18c]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#956047]/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 py-6 sm:px-10 lg:px-16 lg:py-8">
        <header className="flex items-center justify-between">
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label="Inicio"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#714635]/25 text-[#8b4f3d] transition-transform duration-500 group-hover:rotate-6">
              <HeartIcon />
            </span>
            <span className="font-serif text-lg tracking-tight">Para ti</span>
          </a>
          <p className="hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7d5c4d] sm:block">
            Una pequeña declaración
          </p>
          <span className="font-serif text-sm italic text-[#8b6758]">
            siempre
          </span>
        </header>

        <section
          id="inicio"
          className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:py-10"
        >
          <div className="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.34em] text-[#9a5b45] lg:justify-start">
              <span className="h-px w-9 bg-[#b7775e]" />
              Lo que nunca me canso de mirar
            </p>

            <h1 className="font-serif text-[clamp(3.7rem,8vw,7.7rem)] leading-[0.82] tracking-[-0.065em] text-[#352019]">
              Tus ojos
              <span className="relative mt-3 block italic text-[#87503c]">
                cafés
                <svg
                  aria-hidden="true"
                  viewBox="0 0 310 18"
                  className="absolute -bottom-3 left-1/2 w-[78%] -translate-x-1/2 text-[#bf7d65]/60 lg:left-0 lg:translate-x-0"
                  fill="none"
                >
                  <path
                    d="M2 12C80 1 214 3 307 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-md text-base leading-7 text-[#684b3f] sm:text-lg lg:mx-0">
              Tienen ese color de las cosas que abrigan: el café de la
              mañana, la tierra después de la lluvia y el lugar al que siempre
              quiero volver.
            </p>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                aria-expanded={isOpen}
                className="group flex min-w-52 items-center justify-center gap-3 rounded-full bg-[#4b2e24] px-7 py-4 text-sm font-semibold text-[#fffaf4] shadow-[0_12px_30px_rgba(75,46,36,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#633d30] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b4f3d]"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  <HeartIcon filled={isOpen} />
                </span>
                {isOpen ? "Guardar en el corazón" : "Toca para leerme"}
              </button>
              <p className="text-sm italic text-[#8d6e60]">
                una carta, solo para ti
              </p>
            </div>

            <div
              className={`grid transition-all duration-700 ease-out ${
                isOpen
                  ? "mt-7 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden">
                <div className="border-l border-[#b9775e] py-1 pl-5 text-left">
                  <p className="font-serif text-xl italic leading-relaxed text-[#57382d]">
                    “Si alguna vez me pierdo, no me busques lejos. Seguramente
                    estoy quedándome a vivir en tu mirada.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[670px]">
            <span className="absolute -left-4 top-[18%] h-3 w-3 animate-pulse rounded-full bg-[#aa6a52]/50" />
            <span className="float-heart absolute -right-1 top-[12%] text-[#a7604a]">
              <HeartIcon />
            </span>
            <span className="float-heart-delayed absolute -left-3 bottom-[10%] text-[#c58a73]">
              <HeartIcon filled />
            </span>

            <div className="relative rotate-[1.5deg] rounded-[2.25rem] border border-white/70 bg-[#ead4c7] p-3 shadow-[0_30px_90px_rgba(85,50,36,0.18)] sm:p-4">
              <div className="group relative aspect-square overflow-hidden rounded-[1.7rem] border border-[#704331]/10 bg-[#d8b697]">
                <img
                  src={paintedEye}
                  alt="Pintura de un ojo café sobre lienzo"
                  className="painted-eye h-full w-full object-cover"
                />
                <div className="canvas-grain pointer-events-none absolute inset-0" />
                <div className="eye-glint pointer-events-none absolute left-[46%] top-[42%] h-4 w-4 rounded-full bg-white/40 blur-[2px]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-[#8d533f]/35 to-transparent" />
                <p className="absolute inset-x-0 bottom-[7%] text-center font-serif text-xl italic tracking-wide text-[#fff8ed] drop-shadow-md sm:text-2xl">
                  ahí encuentro mi hogar
                </p>
                <div className="pointer-events-none absolute inset-3 rounded-[1.25rem] border border-[#fff4e9]/30" />
              </div>

              <div className="absolute -bottom-5 -right-3 rotate-[-5deg] rounded-full border border-[#714635]/15 bg-[#fffaf2] px-5 py-3 shadow-lg sm:right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8d5845]">
                  mi color favorito
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex items-end justify-between border-t border-[#704331]/15 pt-5 text-[11px] text-[#86685a]">
          <p className="max-w-48 leading-relaxed">
            Hecho con todo lo que siento y no siempre sé decir.
          </p>
          <p className="font-serif text-base italic text-[#69483b]">
            café, como tus ojos
          </p>
        </footer>
      </div>
    </main>
  );
}
