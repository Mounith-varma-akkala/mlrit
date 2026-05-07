import Image from "next/image";
import { Reveal } from "./reveal";

const chips = ["NAAC A", "NBA Accredited", "Hyderabad", "Estd. 2005"];

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-10 pb-6 md:grid-cols-[1.05fr,0.95fr] md:items-center md:gap-12 md:px-8 md:pt-16 md:pb-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[12.5px] font-semibold text-primary tracking-wide">
              Welcome, Parent
            </span>
          </div>

          <h1 className="mt-5 font-display text-balance text-[40px] leading-[1.02] tracking-[-0.035em] font-bold md:text-[64px] md:leading-[0.98]">
            Your child&apos;s <br className="hidden md:block" />
            journey begins{" "}
            <span className="bg-gradient-to-br from-brand-green via-brand-green-2 to-brand-orange bg-clip-text text-transparent">
              here.
            </span>
          </h1>

          <p className="mt-4 max-w-[36ch] text-[16px] leading-[1.5] text-muted-foreground md:text-[18px]">
            Everything you need to explore admissions at MLR Institute of Technology — in one calm, simple place.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-[12px] font-semibold text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-muted shadow-lift md:aspect-[5/6]">
            <Image
              src="/campus-entrance.jpg"
              alt="MLR Institute of Technology entrance"
              fill
              priority
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80">
                Campus · Dundigal, Hyderabad
              </div>
              <div className="font-display text-2xl font-semibold tracking-tight md:text-[26px]">
                Where ambition meets craft.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
