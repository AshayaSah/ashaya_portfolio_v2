import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { db } from "@/db"
import { socialLinks } from "@/db/schema"

import { updateSocialLink } from "../../actions"
import { SocialLinkForm } from "../../social-link-form"

export default async function EditSocialLinkPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [link] = await db
    .select()
    .from(socialLinks)
    .where(eq(socialLinks.id, Number(id)))
    .limit(1)

  if (!link) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Edit social link</h1>
      <SocialLinkForm action={updateSocialLink} defaultValues={link} />
    </div>
  )
}
