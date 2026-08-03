import { Collage } from "@/components/collage"
import { Container } from "@/components/container"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"
import { Timeline } from "@/components/timeline"
import { getCollagePhotos, getProfile, getTimelineGroupedByYear } from "@/db/queries"

export default async function About() {
  const [profile, collagePhotos, timelineGroups] = await Promise.all([
    getProfile(),
    getCollagePhotos(),
    getTimelineGroupedByYear(),
  ])

  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">{profile.aboutHeading}</Heading>
        <Subheading>{profile.aboutSubheading}</Subheading>
      </div>
      <Collage photos={collagePhotos} />
      <Timeline groups={timelineGroups} />
    </Container>
  )
}
