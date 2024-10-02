<template>
  <div class="w-full h-full">
    <Header :isMenuOpen="false" />

    <div class="flex flex-col items-center">
      <div>
        <h1 class="font-bold text-5xl text-center text-black">
          The most elaborate App Platform
        </h1>

        <p class="text-center text-sm text-black">
          Cras ac lorem sed tortor ultrices tristique. Integer blandit velit in
          placerat mollis. Nullam feugiat mi quis tincidunt porttitor.
          Pellentesque habitant morbi tristique senectus.
        </p>
      </div>

      <div class="flex justify-center gap-4 py-4">
        <!-- Apply the custom gradient background class -->
        <button class="long-btn custom-gradient-bg">editors choice ></button>

        <!-- Apply the custom variant class for the border and text color -->
        <button class="long-btn custom-variant">See top charts ></button>
      </div>
      <div
        class="flex justify-center items-center text-xl font-bold pt-16 pb-5"
      >
        <h2 class="color-black text-black">Categories</h2>
      </div>

      <div class="flex justify-center test">
        <div class="overflow-x-auto flex gap-8 justify-center">
          <div
            class="w-24 h-32"
            v-for="(category, key) in categories"
            :key="key"
          >
            <CategoryTile :text="category" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import Header from '~/components/headerComponent.vue'
import CategoryTile from '~/components/categoryTileComponent.vue'

const items = ['1', '2', '3', '4', '5', '6']

// Refs
const categories = ref({})
let test: string[] = []

onMounted(async () => {
  try {
    const response = await fetch(`/json/homepage-options.json`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    categories.value = data.options || {}
    test = [...data.options]
    console.log(test)
  } catch (error) {
    console.error('Error fetching app data:', error)
  }
})
</script>
