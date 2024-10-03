<template>
  <div class="absolute top-14 right-0 left-0 bottom-0 bg-white z-10">
    <div
      v-for="(value, key) in homepageOptions"
      :key="key"
      class="flex flex-col items-center font-bold py-1 text-3xl text-black"
    >
      <NuxtLink :to="formatText(value)">
        <h2>{{ value }}</h2>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, onMounted } from 'vue'

// Components
import HeaderComponent from '~/components/headerComponent.vue'

// Utils
import { formatText } from '~/utils/formatText'

// Refs
const homepageOptions = ref({})

onMounted(async () => {
  try {
    const response = await fetch(`/json/homepage-options.json`)
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
