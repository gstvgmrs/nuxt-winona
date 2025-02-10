<template>
  <div class="text-xs text-base-content flex gap-2">
    <span v-if="article?.datePublished">
      Published at {{ useDateFormat(article?.datePublished) }}
    </span>
    <span>-</span>
    <span v-if="article?.dateModified">
      Modified at {{ useDateFormat(article?.dateModified) }}
    </span>
    <span>-</span>
    <span>{{ readTime }} min read</span>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/types/Article'

const props = defineProps({
  article: {
    type: Object as () => Article,
    required: true
  }
})

const readTime = computed(() => {
  const wordsPerMinute = 200
  const words = props.article.body.trim().split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  return Math.ceil(minutes);
})
</script>
