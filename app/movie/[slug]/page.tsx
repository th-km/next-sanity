import type { Movie } from '~/types'
import { urlFor } from '~/lib/sanity'
import * as queries from '~/lib/queries'
import { sanityClient } from '~/lib/sanity.server'
import { Body } from '~/ui/Body'

export default async function Page({ params }: { params: { slug: string } }) {
  const movie: Movie = await sanityClient.fetch(queries.movie, { slug: params.slug })

  return (
    <div className="space-y-8 p-4">
      <h1 className="text-4xl font-medium">{movie.title}</h1>

      <Body value={movie.overview} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={urlFor(movie.poster.asset).url()} alt={movie.title} />
    </div>
  )
}

export async function generateStaticParams() {
  const params: string[] = await sanityClient.fetch(queries.slugs, { doc: 'movie' })

  return params.map(param => ({ slug: param }))
}
