import { TopBar } from "@/components/site/top-bar";
import { Hero } from "@/components/site/hero";
import { Bento } from "@/components/site/bento";
import { TalksRail } from "@/components/site/talks-rail";
import { Footer } from "@/components/site/footer";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <TopBar />
      <Hero />
      <Bento />
      <TalksRail />
      <Footer />
    </main>
  );
}
