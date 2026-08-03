import Link from "next/link"

const sections = [
  { href: "/admin/profile", label: "Profile & Hero", description: "Name, roles, bios, footer tagline" },
  { href: "/admin/social-links", label: "Social Links", description: "Footer social icons" },
  { href: "/admin/projects", label: "Projects", description: "Project cards" },
  { href: "/admin/experiences", label: "Experiences", description: "Work history" },
  { href: "/admin/testimonials", label: "Testimonials", description: "Client quotes" },
  { href: "/admin/timeline", label: "Timeline", description: "Achievements by year" },
  { href: "/admin/collage", label: "Collage Photos", description: "About page travel photos" },
  { href: "/admin/blog", label: "Blog", description: "Posts (Markdown)" },
]

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Content</h1>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
          >
            <p className="font-medium text-foreground">{section.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
