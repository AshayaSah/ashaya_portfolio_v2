import { ImageUploadField } from "@/components/admin/image-upload-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getProfile } from "@/db/queries"

import { updateProfile } from "./actions"

export default async function AdminProfilePage() {
  const profile = await getProfile()

  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Profile & Hero</h1>
      <form action={updateProfile} className="mt-6 flex max-w-2xl flex-col gap-5">
        <input type="hidden" name="id" value={profile.id} />

        <ImageUploadField
          name="avatarUrl"
          label="Avatar"
          folder="profile"
          defaultValue={profile.avatarUrl ?? undefined}
        />

        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full name (home page heading)</Label>
          <Input id="fullName" name="fullName" defaultValue={profile.fullName} required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="roles">Roles (comma-separated, rotate on home page)</Label>
          <Input id="roles" name="roles" defaultValue={profile.roles.join(", ")} required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="homeSubheading">Home subheading</Label>
          <Textarea
            id="homeSubheading"
            name="homeSubheading"
            defaultValue={profile.homeSubheading}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="aboutHeading">About page heading</Label>
            <Input id="aboutHeading" name="aboutHeading" defaultValue={profile.aboutHeading} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="projectsHeading">Projects page heading</Label>
            <Input
              id="projectsHeading"
              name="projectsHeading"
              defaultValue={profile.projectsHeading}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contactHeading">Contact page heading</Label>
            <Input
              id="contactHeading"
              name="contactHeading"
              defaultValue={profile.contactHeading}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="blogHeading">Blog page heading</Label>
            <Input id="blogHeading" name="blogHeading" defaultValue={profile.blogHeading} required />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="aboutSubheading">About page subheading</Label>
          <Textarea
            id="aboutSubheading"
            name="aboutSubheading"
            defaultValue={profile.aboutSubheading}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="projectsSubheading">Projects page subheading</Label>
          <Textarea
            id="projectsSubheading"
            name="projectsSubheading"
            defaultValue={profile.projectsSubheading}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="contactSubheading">Contact page subheading</Label>
          <Textarea
            id="contactSubheading"
            name="contactSubheading"
            defaultValue={profile.contactSubheading}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="blogSubheading">Blog page subheading</Label>
          <Textarea
            id="blogSubheading"
            name="blogSubheading"
            defaultValue={profile.blogSubheading}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="footerTagline">Footer tagline</Label>
          <Input id="footerTagline" name="footerTagline" defaultValue={profile.footerTagline} required />
        </div>

        <Button type="submit" className="w-fit">
          Save changes
        </Button>
      </form>
    </div>
  )
}
