import Link from 'next/link'
import type { MovieList } from '~/types'
import * as queries from '~/lib/queries'
import { sanityClient } from '~/lib/sanity.server'
import { paths } from '~/utils/paths'

export default async function layout({ children }: { children: React.ReactNode }) {
  const movies: MovieList[] = await sanityClient.fetch(queries.movies)

  return (
    <div className="grid grid-cols-[240px,1fr] gap-4">
      <aside className="flex h-screen flex-col overflow-y-auto bg-slate-100 p-4">
        <div className="sticky top-0 flex items-baseline justify-between pb-0.5">
          <h1 className="font-medium text-xl">Movie page</h1>
          <Link href="/" className="text-xs underline">
            Back
          </Link>
        </div>

        <ul className="mt-8">
          {movies.map(movie => (
            <li key={movie._id}>
              <Link href={paths.movies(movie.slug)} className="hover:underline">
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div>{children}</div>
    </div>
  )
}
