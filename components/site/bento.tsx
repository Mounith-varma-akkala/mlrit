import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download, Linkedin, Phone, MapPin, Play, BadgeCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { EnrollmentDialog } from "./enrollment-dialog";
import { VideoDialog } from "./video-dialog";

export function Bento() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 md:px-8 md:pb-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
        {/* Apply — Hero Tile */}
        <Reveal className="md:col-span-4 md:row-span-2">
            <a href="https://mlrit-admissions.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative w-full overflow-hidden rounded-3xl text-left text-white shadow-lift transition-transform active:scale-[0.992] md:h-full block">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_100%_0%,rgba(255,255,255,0.18)_0%,transparent_50%),radial-gradient(80%_80%_at_0%_100%,rgba(214,98,33,0.45)_0%,transparent_60%),linear-gradient(135deg,#0E2A0A_0%,#1F5A14_45%,#358F24_100%)]" />
              <div className="flex min-h-[230px] flex-col justify-between gap-6 p-6 md:min-h-full md:p-9">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur md:h-14 md:w-14">
                    <BadgeCheck className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    Step 1 — Most Important
                  </div>
                  <h3 className="mt-2 font-display text-[28px] leading-[1.05] tracking-tight font-bold md:text-[40px]">
                    Begin Enrollment
                  </h3>
                  <p className="mt-2 max-w-md text-[14.5px] text-white/80 md:text-[16px]">
                    Fill the admission form. Takes about 3 minutes — our team will reach out within a day.
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-foreground shadow-soft transition-transform group-hover:translate-x-0.5">
                  Start now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
        </Reveal>

        {/* Brochure */}
        <Reveal delay={60} className="md:col-span-2">
          <a
            href="/brochure.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-white to-[#FFF3E8] p-6 shadow-soft transition-transform active:scale-[0.992] md:min-h-[180px]"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <Download className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Brochure
              </div>
              <h3 className="mt-1 font-display text-[22px] font-semibold tracking-tight">
                Download Brochure
              </h3>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-foreground">
              Download
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </Reveal>

        {/* LinkedIn */}
        <Reveal delay={120} className="md:col-span-2">
          <a
            href="https://www.linkedin.com/school/mlr-institute-of-technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-[#EAF3FB] to-[#DBE9F6] p-6 shadow-soft transition-transform active:scale-[0.992] md:min-h-[180px]"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A66C2] text-white">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Network
              </div>
              <h3 className="mt-1 font-display text-[22px] font-semibold tracking-tight">
                LinkedIn Portal
              </h3>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-foreground">
              Visit <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </a>
        </Reveal>

        {/* Campus tour */}
        <Reveal delay={60} className="md:col-span-6">
          <VideoDialog
            videoId="t4xFcZMuqnM"
            title="Virtual Campus Tour"
            description="A 2-minute walk through MLR Institute of Technology."
          >
            <button className="group relative w-full overflow-hidden rounded-3xl text-left text-white shadow-lift transition-transform active:scale-[0.992]">
              <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
                <Image
                  src="/campus-front.jpg"
                  alt="MLR campus"
                  fill
                  sizes="(min-width:1024px) 1024px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/15" />
              </div>

              <span className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/22 backdrop-blur-md ring-1 ring-white/30 md:h-14 md:w-14">
                <Play className="h-5 w-5 fill-white md:h-6 md:w-6" />
              </span>

              <div className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
                  Watch · 2 min
                </div>
                <h3 className="mt-1 font-display text-[26px] leading-tight tracking-tight font-semibold md:text-[34px]">
                  Take a virtual campus tour
                </h3>
                <p className="mt-1 max-w-xl text-[14px] text-white/80 md:text-[15.5px]">
                  See classrooms, labs, library and student life.
                </p>
              </div>
            </button>
          </VideoDialog>
        </Reveal>

        {/* Quick row */}
        <Reveal delay={60} className="md:col-span-3">
          <a
            href="tel:+914042437001"
            className="flex h-full items-center gap-4 rounded-3xl bg-card p-5 shadow-soft transition-transform active:scale-[0.992] md:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Talk to us
              </div>
              <div className="font-display text-[18px] font-semibold tracking-tight">
                Call admissions
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delay={120} className="md:col-span-3">
          <a
            href="https://maps.google.com/?q=MLR+Institute+of+Technology+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-center gap-4 rounded-3xl bg-card p-5 shadow-soft transition-transform active:scale-[0.992] md:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Find us
              </div>
              <div className="font-display text-[18px] font-semibold tracking-tight">
                Visit campus
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
