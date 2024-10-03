<template>
  <div
    class="flex flex-col items-center rounded-xl shadow-xl border-2 border-solid border-[#E7E7E7] relative"
  >
    <div class="flex justify-center items-center absolute -top-1/4 p-5">
      <img :src="props.text.logo" alt="Category icon" />
    </div>

    <div class="py-0.5">
      <p class="text-black font-bold mt-4">{{ props.text.name }}</p>
    </div>

    <div>
      <p class="text-black max-w-32 text-center text-xs py-0.5">
        {{ props.text.description }}
      </p>
    </div>

    <div class="flex justify-center items-center gap-1 py-0.5">
      <span><img src="/icons/generic/star-icon.svg" alt="" /></span>
      <span>{{ props.text.rating }}</span>
    </div>

    <div class="px-2 pb-2">
      <button class="long-btn download-button w-28 h-6">Download</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define props
const props = defineProps<{
  text: { name: string; description: string; rating: string; logo: string }
}>()
</script>

<style lang="scss" scoped></style>
