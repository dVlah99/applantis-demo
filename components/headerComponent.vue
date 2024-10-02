<template>
  <div class="my-10 flex justify-center">
    <header>
      <div class="w-full h-10 flex justify-around items-center">
        <div>
          <img :src="applantisLogo" alt="ApphouseLogo" />
        </div>

        <div class="w-20 h-20">
          <button class="w-20 h-20" @click="toggleMenuIcon()">
            {{ isMenuOpen ? 'x' : 'nije ix' }}
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, watch } from 'vue'

// SVG
import applantisLogo from '~/assets/svg/applantis-logo.svg'

// Define props
const props = defineProps<{
  isMenuOpen: boolean // Optional prop
}>()

// Refs
const isMenuOpen = ref(props.isMenuOpen)

// Watch for prop changes
watch(
  () => props.isMenuOpen,
  newValue => {
    isMenuOpen.value = newValue
  }
)

// Toggle menu icon
const toggleMenuIcon = () => {
  isMenuOpen.value = !isMenuOpen.value
  console.log('Menu state:', isMenuOpen.value)
}
</script>

<style lang="scss" scoped></style>
