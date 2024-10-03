<template>
  <div class="w-full h-full relative">
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

      <div class="flex justify-center max-width">
        <div class="overflow-x-auto flex gap-8 justify-center">
          <div
            class="w-24 h-32"
            v-for="(category, key) in categories"
            :key="key"
          >
            <CategoryTile :values="category" />
          </div>
        </div>
      </div>

      <div
        class="flex justify-center items-center text-xl font-bold pt-16 pb-5"
      >
        <h2 class="color-black text-black">Best Applantis Apps</h2>
      </div>

      <div class="flex justify-center max-width h-full">
        <div class="flex gap-8 justify-center">
          <div class="">
            <AppTile :text="app" />
          </div>
        </div>
      </div>

      <div class="mt-7">
        <button class="custom-gradient-bg rounded-md px-4 py-2 font-semibold">
          See our top charts
        </button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
interface AppData {
  name: string
  description: string
  rating: string
  logo: string
}

// Components
import Header from '~/components/headerComponent.vue'
import Footer from '~/components/footerComponent.vue'
import CategoryTile from '~/components/categoryTileComponent.vue'
import AppTile from '~/components/appTileComponent.vue'

// Refs
const categories = ref({})

const app = ref<AppData>({
  name: '',
  description: '',
  rating: '',
  logo: '',
})

onMounted(async () => {
  try {
    const response = await fetch(`/json/categories.json`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    categories.value = data || {}

    const appResponse = await fetch(`/json/app-data/app-data.json`)
    const appData = await appResponse.json()
    app.value = appData || {}
  } catch (error) {
    console.error('Error fetching app data:', error)
  }
})
</script>
