import { LoginForm } from "./login-form"

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-aceternity)]">
        <h1 className="text-lg font-semibold text-foreground">Admin sign in</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter the admin password to continue.
        </p>
        <LoginForm />
      </div>
    </div>
  )
}
