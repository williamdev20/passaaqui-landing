/**
 * Design reminder — PassaAqui: landing editorial de aventura urbana pernambucana. Azul-marinho,
 * laranja e branco organizam uma narrativa assimétrica de mapa, missão e impacto local.
 */

import ExperienceGrid from "@/components/ExperienceGrid";
import FinalCTA from "@/components/FinalCTA";
import Gamification from "@/components/Gamification";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Journey from "@/components/Journey";
import MissionMap from "@/components/MissionMap";

export default function Home() {
  return (
    <main className="passaqui-page">
      <Hero />
      <Journey />
      <MissionMap />
      <Gamification />
      <ExperienceGrid />
      <Impact />
      <FinalCTA />
    </main>
  );
}
