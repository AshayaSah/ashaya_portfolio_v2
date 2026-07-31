import { Container } from "@/components/container"
import { ContactForm } from "@/components/contact-form"
import { Heading } from "@/components/heading"
import { Subheading } from "@/components/subheading"

export default function Contact() {
  return (
    <Container>
      <div className="flex flex-col">
        <Heading className="text-primary">Contact Me</Heading>
        <Subheading>
          I&apos;m open to freelancing offers. Reach out to me to inquire more about my work.
        </Subheading>
      </div>
      <ContactForm />
    </Container>
  )
}
