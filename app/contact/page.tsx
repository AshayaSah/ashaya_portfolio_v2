import { Container } from "@/components/container"
import { ContactForm } from "@/components/contact-form"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"
import { getProfile } from "@/db/queries"

export default async function Contact() {
  const profile = await getProfile()

  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">{profile.contactHeading}</Heading>
        <Subheading>{profile.contactSubheading}</Subheading>
      </div>
      <ContactForm />
    </Container>
  )
}
