import Image from "next/image";
import Link from "next/link";

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 glass border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-white shadow-soft md:h-10 md:w-10">
            <Image
              src="/logo.svg"
              alt="MLR Institute of Technology"
              fill
              priority
              sizes="40px"
              style={{ objectFit: "contain" }}
              className="p-1"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[14px] md:text-[15px] font-semibold tracking-tight">
              MLR Institute <span className="text-muted-foreground font-medium">· Tech</span>
            </div>
            <div className="text-[10.5px] md:text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Hyderabad · Estd. 2005
            </div>
          </div>
        </Link>

        <span className="rounded-full bg-foreground px-3 py-1.5 text-[11px] md:text-xs font-semibold tracking-wide text-background">
          Admissions 2026
        </span>
      </div>
    </header>
  );
}
