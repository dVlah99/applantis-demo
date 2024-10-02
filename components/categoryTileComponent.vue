<template>
  <div class="w-24 h-32 flex flex-col items-center">
    <div
      class="w-24 h-24 rounded-xl shadow-xl border-2 border-solid border-[#E7E7E7]"
    ></div>

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
