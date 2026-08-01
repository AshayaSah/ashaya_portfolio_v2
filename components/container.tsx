import { Scales } from "@/components/scales"

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-full min-h-screen w-full max-w-4xl bg-background px-4 pt-24 md:px-8 md:pt-28 md:pb-10">
      <Scales />
      {children}
    </div>
  )
}
