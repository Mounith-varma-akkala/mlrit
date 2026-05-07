import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1fr,auto] md:items-end">
          <div className="flex items-start gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-white shadow-soft">
              <Image
                src="/logo.svg"
                alt="MLR Institute of Technology"
                fill
                sizes="48px"
                style={{ objectFit: "contain" }}
                className="p-1.5"
              />
            </div>
            <div className="text-[13px] leading-[1.55] text-muted-foreground">
              <div className="text-foreground font-display text-[15px] font-semibold tracking-tight">
                MLR Institute of Technology
              </div>
              Laxma Reddy Avenue, Dundigal, Hyderabad — 500043
              <br />
              <a
                href="mailto:admissions@mlrinstitutions.ac.in"
                className="font-medium text-foreground hover:underline"
              >
                admissions@mlrinstitutions.ac.in
              </a>
              {" · "}
              <a href="tel:+914042437001" className="font-medium text-foreground hover:underline">
                +91 40 4243 7001
              </a>
            </div>
          </div>

          <div className="text-[12px] text-muted-foreground md:text-right">
            <div className="font-semibold text-foreground">Admissions Cell · 2026</div>
            © {new Date().getFullYear()} MLR Institute of Technology
            <div className="mt-1.5 text-[12.5px] font-medium text-foreground/70">Implemented by the students of MLRIT</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
