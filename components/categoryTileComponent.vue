<template>
  <div class="w-24 h-32">
    <div class="bg-red-500 w-24 h-24"></div>

    <p class="text-black">{{ props.text }}</p>
  </div>
</template>

<script setup lang="ts">
// Define props
const props = defineProps<{
  text: string // Optional prop
}>()
</script>

<style lang="scss" scoped></style>
