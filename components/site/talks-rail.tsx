import Image from "next/image";
import { Play } from "lucide-react";
import { VideoDialog } from "./video-dialog";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const talks = [
  {
    cloudinaryId: "av2_v9ljvd",
    by: "Dasam Pranay · Aeronautical Engineering",
    title: "My journey at MLRIT",
    duration: "5:24",
  },
  {
    cloudinaryId: "av1_nsjnjc",
    by: "Sathvika · CS-IT",
    title: "What the college experience is really like",
    duration: "7:11",
  },
  {
    cloudinaryId: "av3_eueuw0",
    by: "Gopi Pavani · Aero · 2025",
    title: "Placements, academics & what I learned",
    duration: "4:02",
  },
];

export function TalksRail() {
  return (
    <section className="pb-8 md:pb-14">
      <div className="mx-auto flex max-w-6xl items-end justify-between px-4 pb-4 md:px-8">
        <div>
          <h2 className="font-display text-[24px] font-semibold tracking-tight md:text-[30px]">
            Voices from MLR
          </h2>
          <div className="mt-1 text-[13px] text-muted-foreground md:text-[14px]">
            Talks from our principal, faculty and alumni.
          </div>
        </div>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-auto md:max-w-6xl md:px-8">
        {talks.map((t, i) => (
          <VideoDialog
            key={i}
            cloudinaryId={t.cloudinaryId}
            title={t.title}
            description={t.by}
          >
            <button className="group w-[78%] flex-none snap-start overflow-hidden rounded-3xl bg-card text-left shadow-soft transition-transform active:scale-[0.992] md:w-[calc((100%-2rem)/3)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={`https://res.cloudinary.com/${CLOUD}/video/upload/so_auto/${t.cloudinaryId}.jpg`}
                  alt={t.title}
                  fill
                  sizes="(min-width:768px) 33vw, 80vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/15" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/95 shadow-lift">
                    <Play className="h-5 w-5 fill-foreground" />
                  </span>
                </span>
                <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/65 px-2 py-1 text-[11px] font-semibold text-white">
                  {t.duration}
                </span>
              </div>
              <div className="px-4 pb-4 pt-3.5">
                <div className="text-[12px] font-medium text-muted-foreground">{t.by}</div>
                <h4 className="mt-1 font-display text-[16px] font-semibold leading-snug tracking-tight">
                  {t.title}
                </h4>
              </div>
            </button>
          </VideoDialog>
        ))}
      </div>
    </section>
  );
}
