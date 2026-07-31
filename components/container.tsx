import { Scales } from "@/components/scales"

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-full min-h-screen w-full max-w-4xl bg-white px-4 pt-10 dark:bg-neutral-900 md:px-8 md:pt-20 md:pb-10">
      <Scales />
      {children}
    </div>
  )
}
