import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function SunIcon(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    '☀'
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    '☽'
  )
}

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      className="flex h-6 w-6 items-center justify-center rounded-sm transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-5 w-5 stroke-zinc-900 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 stroke-white dark:block" />
    </button>
  )
}
