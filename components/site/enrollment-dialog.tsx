"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const programs = [
  "B.Tech — Computer Science (CSE)",
  "B.Tech — AI & Machine Learning",
  "B.Tech — Information Technology",
  "B.Tech — Electronics & Communication",
  "B.Tech — Mechanical Engineering",
  "B.Tech — Civil Engineering",
  "MBA",
];

export function EnrollmentDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [program, setProgram] = React.useState<string>("");
  const formRef = React.useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: wire to backend (API route, Google Form, Sheets, etc.)
    console.log("Enrollment:", { ...data, program });
    setSubmitted(true);
    formRef.current?.reset();
    setProgram("");
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 1800);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Enrollment received
            </h3>
            <p className="text-sm text-muted-foreground">
              Our admissions team will call within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Begin Enrollment</DialogTitle>
              <DialogDescription>
                Takes about 3 minutes. We&apos;ll respond within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-3.5">
              <div className="space-y-1.5">
                <Label htmlFor="name">Student name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="As on 10th certificate"
                />
              </div>
              <div className="grid gap-3.5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Parent phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 ..."
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="parent@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Program of interest</Label>
                <Select value={program} onValueChange={setProgram}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program…" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="score">12th score (%)</Label>
                <Input
                  id="score"
                  name="score"
                  type="number"
                  min={0}
                  max={100}
                  placeholder="e.g. 92"
                />
              </div>

              <div className="flex flex-col gap-2 pt-2 md:flex-row md:gap-3">
                <Button
                  type="submit"
                  variant="ink"
                  size="lg"
                  className="w-full md:flex-1"
                >
                  Submit enrollment
                  <ArrowRight />
                </Button>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
