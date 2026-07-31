import {
  AzureLogo,
  CSSIcon,
  CypressLogo,
  ExpressIcon,
  GraphQLLogo,
  HTMLIcon,
  IconCode,
  JavascriptLogo,
  JestLogo,
  MongoDBIcon,
  NextLogo,
  NuxtLogo,
  ReactLogo,
  ReduxLogo,
  SCSSIcon,
  TailwindLogo,
  ThreeJSLogo,
  TypescriptLogo,
  VueLogo,
  WebRTCLogo,
  WebpackLogo,
} from "@/components/icons/stack"

export function TechIcon({ technology }: { technology: string }) {
  switch (technology) {
    case "React":
      return <ReactLogo />
    case "Next.js":
      return <NextLogo />
    case "Tailwind CSS":
      return <TailwindLogo />
    case "Vue":
      return <VueLogo />
    case "Nuxt.js":
      return <NuxtLogo />
    case "HTML5":
      return <HTMLIcon />
    case "CSS3":
      return <CSSIcon />
    case "Three.js":
      return <ThreeJSLogo />
    case "TypeScript":
      return <TypescriptLogo />
    case "Redux":
      return <ReduxLogo />
    case "GraphQL":
      return <GraphQLLogo />
    case "Jest":
      return <JestLogo />
    case "Cypress":
      return <CypressLogo />
    case "Azure":
      return <AzureLogo />
    case "WebRTC":
      return <WebRTCLogo />
    case "Webpack":
      return <WebpackLogo />
    case "SASS":
    case "SCSS":
      return <SCSSIcon />
    case "MongoDB":
      return <MongoDBIcon />
    case "Express":
      return <ExpressIcon />
    case "JavaScript":
      return <JavascriptLogo />
    default:
      return <IconCode />
  }
}
