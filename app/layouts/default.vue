<template>
  <div class="flex flex-col min-h-screen">
    <header class="navbar bg-base-100 shadow-sm mb-3">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="btn btn-ghost text-xl">Awesome Blog</a>
        <ToggleTheme />
      </div>
    </header>

    <div class="mx-auto w-full md:w-[500px] py-8">
      <slot />
    </div>

    <footer class="footerbg-zinc-200 py-2 bg-base-300 mt-auto">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="btn btn-ghost text-xl">Awesome Blog</a>
        <ToggleTheme />
      </div>
    </footer>
  </div>
</template>

<script setup>
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})
</script>
