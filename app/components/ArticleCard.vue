<template>
  <div class="flex flex-col items-center">
    <div class="w-full md:w-[500px]">
      <div class="bg-base-100 text-base-content shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
        <NuxtLink :to="`/${article.id}`">
          <div class="p-4">
            <h3 class="font-medium text-lg hover:text-primary">{{ article.title }}</h3>
            <p class="mt-2 text-xs">{{ useDateFormat(article.datePublished) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types/Article'
import { useDateFormat } from '~/composables/useDateFormat';

defineProps({
  article: {
    type: Object as () => Article,
    required: true
  }
})
</script>
