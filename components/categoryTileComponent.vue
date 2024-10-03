<template>
  <div class="w-24 h-32 flex flex-col items-center">
    <div
      class="w-24 h-24 rounded-xl shadow-xl border-2 border-solid border-[#E7E7E7] flex justify-center items-center"
    >
      <img :src="props.text.image" alt="Category icon" />
    </div>

    <p class="text-black">{{ props.text.name }}</p>
  </div>
</template>

<script setup lang="ts">
// Define props
const props = defineProps<{
  text: { name: string; image: string }
}>()
</script>

<style lang="scss" scoped></style>
