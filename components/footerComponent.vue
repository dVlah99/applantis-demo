<template>
  <div
    class="my-10 flex justify-center h-full border-t-2 border-solid border-[#E7E7E7]"
  >
    <footer class="w-full flex justify-center mt-5">
      <div class="w-full h-10 flex flex-col items-center">
        <!-- Logo -->
        <div>
          <img :src="applantisLogo" alt="ApphouseLogo" />
        </div>

        <div class="flex flex-wrap justify-around gap-4 px-12 py-8">
          <div
            v-for="(value, key) in homepageOptions"
            :key="key"
            class="py-1 text-black"
          >
            <NuxtLink :to="formatText(value)">
              <h2>{{ value }}</h2>
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref } from 'vue'

// SVG
import applantisLogo from '~/public/icons/generic/applantis-logo.svg'

// Refs
const homepageOptions = ref({})

onMounted(async () => {
  try {
    const response = await fetch(`/json/footer-options.json`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    homepageOptions.value = data.options || {}
  } catch (error) {
    console.error('Error fetching app data:', error)
  }
})
</script>

<style lang="scss" scoped></style>
