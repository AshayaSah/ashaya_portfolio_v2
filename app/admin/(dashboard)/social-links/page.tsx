import Link from "next/link"

import { DeleteButton } from "@/components/admin/delete-button"
import { Button } from "@/components/ui/button"
import { getSocialLinks } from "@/db/queries"

import { deleteSocialLink } from "./actions"

export default async function SocialLinksPage() {
  const links = await getSocialLinks()

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">Social Links</h1>
        <Button asChild size="sm">
          <Link href="/admin/social-links/new">Add link</Link>
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {links.map((link) => (
          <div
            key={link.id}
            className="flex items-center justify-between rounded-md border border-border bg-card p-3"
          >
            <div>
              <p className="font-medium text-foreground">{link.label}</p>
              <p className="text-sm text-muted-foreground">
                {link.icon} &middot; {link.href}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/social-links/${link.id}/edit`}>Edit</Link>
              </Button>
              <DeleteButton action={deleteSocialLink.bind(null, link.id)} />
            </div>
          </div>
        ))}
        {links.length === 0 && (
          <p className="text-sm text-muted-foreground">No social links yet.</p>
        )}
      </div>
    </div>
  )
}
