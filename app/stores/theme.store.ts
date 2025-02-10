import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light' as 'light' | 'dark')

  return { theme }
})
