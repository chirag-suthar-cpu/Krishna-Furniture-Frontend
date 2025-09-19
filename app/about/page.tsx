import { AboutHero } from "@/components/about-hero"
import { FounderStory } from "@/components/founder-story"
import { CompanyValues } from "@/components/company-values"
import { TeamSection } from "@/components/team-section"
import { CompanyTimeline } from "@/components/company-timeline"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHero />
        <FounderStory />
        <CompanyValues />
        <CompanyTimeline />
        <TeamSection />
      </main>
    </div>
  )
}
