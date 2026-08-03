import { revalidatePath } from "next/cache"

// Every public page shares the root layout (navbar, footer), so revalidating
// it at the "layout" level refreshes the entire public site in one call —
// simpler and safer than tracking which exact paths each entity affects.
export function revalidatePublicSite() {
  revalidatePath("/", "layout")
}
