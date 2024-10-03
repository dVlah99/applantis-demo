<template>
  <div class="my-5 flex justify-center h-full">
    <header class="w-full flex justify-center">
      <div class="w-full h-10 flex justify-between items-center px-4">
        <!-- Logo -->
        <div>
          <img :src="applantisLogo" alt="ApphouseLogo" />
        </div>

        <!-- Menu button -->
        <div class="h-10 w-10">
          <button
            class="rounded-md h-10 w-10 border-2 border-solid border-[#E7E7E7] flex justify-center items-center"
            @click="toggleMenuIcon"
            aria-label="Menu toggle"
          >
            <img class="h-5 2-5" :src="menuIcon" alt="Menu Icon" />
          </button>
        </div>
      </div>
    </header>

    <div v-if="isMenuOpen">
      <SideMenu />
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, computed } from 'vue'

// Components
import SideMenu from '~/components/sidemenu.vue'

// SVG
import applantisLogo from '~/assets/svg/applantis-logo.svg'

// Define props
const props = defineProps<{
  isMenuOpen: boolean
}>()

// State
const isMenuOpen = ref(props.isMenuOpen)

// Computed property to switch the menu icon
const menuIcon = computed(() =>
  isMenuOpen.value
    ? '/icons/generic/x-icon.svg'
    : '/icons/generic/options-menu-icon.svg'
)

// Toggle menu state
const toggleMenuIcon = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style lang="scss" scoped></style>
