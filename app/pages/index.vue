<template>
  <div class="container mx-auto">
    <p>So much space for content</p>
    <p>This is a test store:</p>
    <p>Current count:
      {{ counterStore.count }}</p>
    <button class="btn btn-primary" @click="counterStore.increment()">Increment</button>
  </div>
</template>

<script lang="ts" setup>
const counterStore = useCounterStore();
</script>
<style lang="scss" scoped></style>