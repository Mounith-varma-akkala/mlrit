"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function VideoDialog({
  videoId,
  cloudinaryId,
  title,
  description,
  children,
}: {
  videoId?: string;
  cloudinaryId?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        {/* Backdrop */}
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4 sm:p-8
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 duration-300"
          style={{
            background: "rgba(4,12,4,0.88)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          {/* Aurora background — layered drifting orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ animation: "aurora-hue 12s ease-in-out infinite" }}>
            {/* Deep green base orb — top-left */}
            <div className="absolute" style={{
              width: "70vw", height: "70vw", maxWidth: 900, maxHeight: 900,
              top: "-20%", left: "-15%",
              background: "radial-gradient(ellipse at center, rgba(30,120,20,0.28) 0%, rgba(10,60,10,0.08) 55%, transparent 75%)",
              animation: "orb-drift-1 18s ease-in-out infinite, orb-pulse 7s ease-in-out infinite",
              filter: "blur(48px)",
            }} />
            {/* Amber/orange accent — bottom-right */}
            <div className="absolute" style={{
              width: "55vw", height: "55vw", maxWidth: 750, maxHeight: 750,
              bottom: "-25%", right: "-10%",
              background: "radial-gradient(ellipse at center, rgba(200,80,10,0.28) 0%, rgba(160,50,0,0.08) 50%, transparent 70%)",
              animation: "orb-drift-2 22s ease-in-out infinite, orb-pulse 9s ease-in-out infinite 1s",
              filter: "blur(56px)",
            }} />
            {/* Bright green highlight — top-right */}
            <div className="absolute" style={{
              width: "40vw", height: "40vw", maxWidth: 600, maxHeight: 600,
              top: "-10%", right: "5%",
              background: "radial-gradient(ellipse at center, rgba(60,200,40,0.13) 0%, rgba(20,120,10,0.04) 50%, transparent 70%)",
              animation: "orb-drift-3 15s ease-in-out infinite, orb-pulse 6s ease-in-out infinite 2s",
              filter: "blur(40px)",
            }} />
            {/* Warm ember — bottom-left */}
            <div className="absolute" style={{
              width: "35vw", height: "35vw", maxWidth: 500, maxHeight: 500,
              bottom: "0%", left: "5%",
              background: "radial-gradient(ellipse at center, rgba(230,120,0,0.16) 0%, rgba(180,60,0,0.05) 50%, transparent 70%)",
              animation: "orb-drift-1 25s ease-in-out infinite reverse, orb-pulse 8s ease-in-out infinite 3s",
              filter: "blur(44px)",
            }} />
            {/* Spinning conic sweep on top for edge shimmer */}
            <div className="absolute inset-[-40%]" style={{
              background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(80,200,50,0.03) 60deg, transparent 120deg, rgba(200,90,0,0.03) 200deg, transparent 260deg, rgba(60,180,30,0.02) 320deg, transparent 360deg)",
              animation: "gradient-spin 32s linear infinite",
            }} />
          </div>
          {/* Floating glass panel */}
          <DialogPrimitive.Content
            className="
              relative w-full overflow-hidden rounded-2xl
              ring-1 ring-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.7)]
              focus-visible:outline-none
              max-w-[min(92vw,1000px)]
              data-[state=open]:animate-in data-[state=closed]:animate-out
              data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
              data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
              duration-300 ease-[cubic-bezier(.32,.72,0,1)]
            "
            style={{
              background: "rgba(10,10,10,0.82)",
              backdropFilter: "blur(24px) saturate(1.4)",
              WebkitBackdropFilter: "blur(24px) saturate(1.4)",
            }}
          >
            {/* Video */}
            <div className="relative w-full aspect-video bg-black">
              {open && cloudinaryId && (
                <video
                  src={`https://res.cloudinary.com/${CLOUD}/video/upload/${cloudinaryId}`}
                  poster={`https://res.cloudinary.com/${CLOUD}/video/upload/so_auto/${cloudinaryId}.jpg`}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full"
                />
              )}
              {open && videoId && (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              )}

              {/* Close */}
              <DialogPrimitive.Close className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-md ring-1 ring-white/10 transition hover:bg-black/70 focus-visible:outline-none">
                <X className="h-3.5 w-3.5" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>

            {/* Meta */}
            <div className="px-5 py-4 sm:px-6 sm:py-5">
              <DialogPrimitive.Title className="font-display text-[15px] font-semibold leading-snug tracking-tight text-white sm:text-[16px]">
                {title}
              </DialogPrimitive.Title>
              {description && (
                <DialogPrimitive.Description className="mt-1 text-[12px] text-white/50 sm:text-[13px]">
                  {description}
                </DialogPrimitive.Description>
              )}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
