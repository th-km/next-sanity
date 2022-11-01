// @ts-nocheck
import createImageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './config'

export const urlFor = (source) => createImageUrlBuilder(sanityConfig).image(source)
