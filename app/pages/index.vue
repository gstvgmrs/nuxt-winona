<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <ArticleCard :article="article" class="mt-4" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const articlesStore = useArticlesStore()
const { articles }  = storeToRefs(articlesStore)

await useAsyncData(async () => {
  await articlesStore.fetchArticles()
})
</script>
<style lang="scss" scoped></style>
