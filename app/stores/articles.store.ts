import { defineStore } from 'pinia'
import type { Article } from '~/types/Article'
import { useApiFetch } from '~/composables/useApiFetch'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref<Article[]>([])
  const currentArticle = ref<Article | null>(null)

  const fetchArticles = async () => {
    const { data } = await useApiFetch('/pages')
    articles.value = data.value as Article[]
  }

  const fetchArticle = async (id: string) => {
    const { data } = await useApiFetch(`/pages/${id}`)
    currentArticle.value = data.value as Article
  }

  return { articles, currentArticle, fetchArticles, fetchArticle }
})
