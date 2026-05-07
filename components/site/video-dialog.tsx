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
            background: "rgba(0,0,0,0.90)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          {/* Animated conic gradient — rotates slowly around all edges */}
          <div
            className="pointer-events-none absolute inset-[-60%]"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(200,70,0,0.13) 40deg, transparent 80deg, rgba(200,70,0,0.07) 160deg, transparent 200deg, rgba(200,70,0,0.13) 280deg, transparent 320deg, rgba(200,70,0,0.07) 340deg, transparent 360deg)",
              animation: "gradient-spin 28s linear infinite",
            }}
          />
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
