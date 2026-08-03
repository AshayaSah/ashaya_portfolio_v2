import { createSocialLink } from "../actions"
import { SocialLinkForm } from "../social-link-form"

export default function NewSocialLinkPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Add social link</h1>
      <SocialLinkForm action={createSocialLink} />
    </div>
  )
}
