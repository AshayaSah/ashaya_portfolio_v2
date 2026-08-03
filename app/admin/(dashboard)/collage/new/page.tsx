import { createCollagePhoto } from "../actions"
import { CollageForm } from "../collage-form"

export default function NewCollagePhotoPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">Add photo</h1>
      <CollageForm action={createCollagePhoto} />
    </div>
  )
}
