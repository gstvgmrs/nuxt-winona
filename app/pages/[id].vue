<template>
  <div>
    <h1 class="text-4xl font-bold mb-2">{{ currentArticle?.title }}</h1>

    <ArticleMetadata v-if="currentArticle" :article="currentArticle" class="mb-8" />

    <div v-html="currentArticle?.body" class="article-body"></div>
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params
const articlesStore = useArticlesStore()
const { currentArticle }  = storeToRefs(articlesStore)

useHead({
  title: currentArticle.value?.seo.title,
  meta: [{
    name: 'description',
    content: currentArticle.value?.seo.description,
  }]
})

await useAsyncData(async () => {
  await articlesStore.fetchArticle(id as string)
})
</script>

<style lang="scss">
.article-body {
  p, ul {
    margin-bottom: 1rem;
    text-align: justify;
    font-size: 1rem;
  }

  ul li {
    margin-bottom: 0.5rem;
    list-style-type: disc;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
}
</style>
