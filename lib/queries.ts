export const slugs = /* groq */ `
  *[_type == $doc && defined(slug.current)].slug.current
`

export const movies = /* groq */ `
  *[_type == 'movie']{
    _id,
    slug,
    title
  }
`

export const movie = /* groq */ `
  *[_type == 'movie' && slug.current == $slug][0]{
    title,
    overview,
    poster,
    castMembers[]->{
      _key,
      characterName
    }
  }
`
