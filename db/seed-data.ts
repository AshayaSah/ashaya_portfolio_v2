import { blogs, experiences, projects, testimonials, timeline } from "@/lib/data"

export const profileSeed = {
  fullName: "John MacTavish",
  roles: ["Design Engineer", "Frontend Developer", "UI Craftsman", "Problem Solver"],
  avatarUrl: "/profile_pic.jpg",
  homeSubheading:
    "They call me Soap. What the hell kind of a name is Soap? I'm a software engineer though with an eye for design.",
  aboutHeading: "About Me",
  aboutSubheading:
    "I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference.",
  projectsHeading: "Projects",
  projectsSubheading:
    "I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference.",
  contactHeading: "Contact Me",
  contactSubheading: "I'm open to freelancing offers. Reach out to me to inquire more about my work.",
  blogHeading: "Blog",
  blogSubheading:
    "Sharing knowledge as I learn. Notes on web development, design, and the craft of building for the web.",
  footerTagline: "Mr. Ashaya Sah - Fullstack Software Engineer",
}

export const socialLinksSeed = [
  { label: "X (Twitter)", href: "#", icon: "x" as const, orderIndex: 0 },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const, orderIndex: 1 },
  { label: "GitHub", href: "#", icon: "github" as const, orderIndex: 2 },
]

export const projectsSeed = projects.map((project, index) => ({
  title: project.title,
  description: project.description,
  imageUrl: project.image,
  href: project.href,
  stack: project.stack,
  orderIndex: index,
}))

export const experiencesSeed = experiences.map((experience, index) => ({
  company: experience.company,
  role: experience.role,
  duration: experience.duration,
  description: experience.description,
  // experience.logo paths in lib/data.ts (e.g. "/images/logos/google-logo.png")
  // were never actually added to public/ and were unused by the old component
  // (it only ever rendered a letter placeholder) — seed as null so the CMS
  // shows the fallback until a real logo is uploaded via the admin.
  logoUrl: null as string | null,
  invertDark: experience.invertDark,
  stack: experience.stack,
  orderIndex: index,
}))

export const testimonialsSeed = testimonials.map((testimonial, index) => ({
  quote: testimonial.quote,
  name: testimonial.name,
  avatarUrl: testimonial.avatar,
  orderIndex: index,
}))

export const timelineSeed = timeline.flatMap((group) =>
  group.items.map((item, index) => ({
    year: group.year,
    title: item.title,
    description: item.description,
    imageUrl: item.image,
    highlight: item.highlight ?? false,
    orderIndex: index,
  }))
)

export const collagePhotosSeed = [
  {
    title: "Japan",
    imageUrl:
      "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=800&auto=format&fit=crop",
    positionClass: "top-10 left-0 rotate-[-5deg]",
    orderIndex: 0,
  },
  {
    title: "Mauritius",
    imageUrl:
      "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=800&auto=format&fit=crop",
    positionClass: "top-40 left-[15%] rotate-[-7deg]",
    orderIndex: 1,
  },
  {
    title: "Iceland",
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
    positionClass: "top-5 left-[50%] rotate-[8deg]",
    orderIndex: 2,
  },
  {
    title: "Japan",
    imageUrl:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop",
    positionClass: "top-32 left-[85%] rotate-[10deg]",
    orderIndex: 3,
  },
  {
    title: "Norway",
    imageUrl:
      "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=800&auto=format&fit=crop",
    positionClass: "top-20 right-[15%] rotate-[2deg]",
    orderIndex: 4,
  },
  {
    title: "New Zealand",
    imageUrl:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=800&auto=format&fit=crop",
    positionClass: "top-24 left-[25%] rotate-[-7deg]",
    orderIndex: 5,
  },
  {
    title: "Canada",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    positionClass: "top-8 left-[30%] rotate-[4deg]",
    orderIndex: 6,
  },
]

function sectionsToMarkdown(content: { heading: string; paragraphs: string[] }[]) {
  return content
    .map((section) => `## ${section.heading}\n\n${section.paragraphs.join("\n\n")}`)
    .join("\n\n")
}

export const blogPostsSeed = blogs.map((blog) => ({
  title: blog.title,
  slug: blog.slug,
  date: blog.date,
  excerpt: blog.excerpt,
  imageUrl: blog.image,
  contentMarkdown: sectionsToMarkdown(blog.content),
}))
