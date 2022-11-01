import Link from 'next/link'
import { paths } from '~/utils/paths'

export default function Page() {
  const pages = [
    { href: paths.admin, title: 'Admin page (Sanity studio)' },
    { href: paths.movie, title: 'Movie page' }
  ]

  return (
    <div className="p-4">
      <h1 className="font-medium text-3xl">Next + Sanity demo</h1>
      <ul className="list-decimal list-inside mt-4 space-y-1">
        {pages.map(({ href, title }) => (
          <li key={title}>
            <Link href={href} className="bg-slate-200 px-0.5 rounded-sm">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
