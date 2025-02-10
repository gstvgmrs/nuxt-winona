import type { Reviewer } from "./Reviewer"
import type { SeoMetadata } from "./SeoMetadata"

export interface Article {
  id: string
  title: string
  reviewer: Reviewer
  datePublished: string
  dateModified: string
  body: string
  seo: SeoMetadata
}
