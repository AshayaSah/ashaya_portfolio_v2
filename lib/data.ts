export const projects = [  {
    title: "Macbook Mockup",
    description: "A mockup of a Macbook that showcases the product and its features",
    image: "https://assets.aceternity.com/macbook-scroll.png",
    href: "#",
    stack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Instant Feedback",
    description: "An interactive feedback system that provides instant responses to user actions",
    image: "https://assets.aceternity.com/animated-testimonials.webp",
    href: "#",
    stack: ["Vue", "Nuxt.js", "Tailwind CSS"],
  },
  {
    title: "Apple Clone",
    description: "A clone of Apple's website that showcases their products and services",
    image: "https://assets.aceternity.com/apple-cards-carousel.png",
    href: "#",
    stack: ["HTML5", "CSS3", "Tailwind CSS"],
  },
]

export const blogs = [
  {
    title: "Advanced CSS Techniques for Modern Web Development",
    date: "Thursday, Feb 15, 2024",
    excerpt:
      "Explore advanced CSS techniques including CSS Grid, Flexbox, Custom Properties, and modern layout patterns that will take your styling skills to the next level.",
    slug: "advanced-css-techniques",
  },
  {
    title: "Introduction to Next.js",
    date: "Friday, Sep 15, 2023",
    excerpt:
      "Next.js is a powerful React framework that enables you to build fast, SEO-friendly web applications with server-side rendering and static site generation.",
    slug: "introduction-to-nextjs",
  },
  {
    title: "Mastering React Hooks",
    date: "Monday, Jan 15, 2024",
    excerpt:
      "Learn how to effectively use React Hooks to manage state and side effects in your functional components. A comprehensive guide for building cleaner React apps.",
    slug: "mastering-react-hooks",
  },
]

export const experiences = [
  {
    company: "Google",
    role: "Senior Frontend Engineer",
    duration: "June 2020 - Present",
    description:
      "Led the development of key features for Google Cloud Platform's web console while improving performance metrics by 35%.",
    logo: "/images/logos/google-logo.png",
    invertDark: false,
    stack: ["React", "TypeScript", "Redux", "GraphQL", "Jest", "Cypress"],
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    duration: "August 2018 - May 2020",
    description:
      "Worked on the Microsoft Teams web application, implementing real-time collaboration features and UI components.",
    logo: "/images/logos/microsoft-logo.png",
    invertDark: false,
    stack: ["React", "JavaScript", "Azure", "WebRTC", "Webpack", "SASS"],
  },
  {
    company: "Airbnb",
    role: "Frontend Developer",
    duration: "January 2017 - July 2018",
    description: "Developed and maintained core components of Airbnb's booking platform.",
    logo: "/images/logos/airbnb-logo.png",
    invertDark: false,
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Styled Components"],
  },
  {
    company: "Shopify",
    role: "Freelance Web Developer",
    duration: "March 2019 - December 2019",
    description:
      "Designed and developed custom Shopify themes for enterprise clients with optimized checkout flows.",
    logo: "/images/logos/shopify-logo.png",
    invertDark: true,
    stack: ["JavaScript", "HTML5", "CSS3", "SCSS", "Shopify API"],
  },
  {
    company: "Adobe",
    role: "Freelance Frontend Consultant",
    duration: "September 2016 - November 2016",
    description: "Consulted on the redesign of Adobe's Creative Cloud web application.",
    logo: "/images/logos/adobe-logo.png",
    invertDark: false,
    stack: ["HTML5", "JavaScript", "CSS3"],
  },
]

export const testimonials = [
  {
    quote:
      "Manu is so great with his work, our production was shut down within the first day itself. Highly recommended.",
    name: "Elon Musk",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Working with Manu was a game-changer for our startup. His technical expertise and problem-solving skills are unmatched.",
    name: "Mark Zuckerberg",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Manu delivered our project ahead of schedule and exceeded all expectations. His attention to detail is remarkable.",
    name: "Sundar Pichai",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=5184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The quality of Manu's code is exceptional. He built a scalable solution that has been critical to our business growth.",
    name: "Jeff Bezos",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=5360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Manu's innovative approach to our complex requirements saved us months of development time. Truly a 10x engineer.",
    name: "Satya Nadella",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export type TimelineItem = {
  title: string
  description: string
  image: string
  highlight?: boolean
}

export const timeline: { year: string; items: TimelineItem[] }[] = [
  {
    year: "2025",
    items: [
      {
        title: "Reached $20K MRR with my VSCode fork.",
        description: "Reached the revenue milestone of $20K MRR with my VSCode fork.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
        highlight: true,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Launched my own developer tools startup",
        description: "Founded a company focused on creating innovative tools for software developers.",
        image:
          "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop",
        highlight: true,
      },
      {
        title: "Spoke at React Conference",
        description: "Delivered a keynote presentation about modern frontend architecture patterns.",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
        highlight: true,
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Contributed to open source",
        description: "Became a core contributor to several popular React and Next.js libraries.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Published technical book",
        description: "Authored 'Advanced Frontend Architecture' which sold over 10,000 copies.",
        image:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Led engineering team at tech startup",
        description: "Managed a team of 12 engineers building a SaaS platform with over 50,000 users.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        highlight: true,
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Graduated with Computer Science degree",
        description:
          "Completed my Bachelor's degree with honors and specialization in software engineering.",
        image:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Built my first production application",
        description: "Developed and deployed a web application that gained 5,000 monthly active users.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Started learning web development",
        description: "Began my journey into programming with JavaScript, HTML, and CSS.",
        image:
          "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
]
