'use client'

import { PortableText } from '@portabletext/react'
import type { SanityBlockContent } from '~/types'

export function Body({ value }: { value: SanityBlockContent }) {
  return (
    <div>
      <PortableText value={value} />
    </div>
  )
}
