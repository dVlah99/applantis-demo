<template>
  <div class="w-full h-full relative">
    <Header :isMenuOpen="false" />

    <div>
      <div class="flex flex-col items-center py-4">
        <h2 class="font-bold text-6xl text-center">
          About <span class="text-pink-400">Applantis</span>
        </h2>
      </div>

      <div>
        <p class="text-center">
          Cras ac lorem sed tortor ultrices tristique. Integer blandit velit in
          placerat mollis. Suspendisse sed consectetur velit, vitae vestibulum
          ex. Phasellus non vestibulum felis. Integer laoreet mi sit amet
          pretium faucibus. Curabitur at purus ultricies felis aliquet
          efficitur. Suspendisse quis elit lectus. Pellentesque et est quam.
          Phasellus vel felis porta, accumsan libero sit amet, tempus dui. Fusce
          efficitur libero vel justo volutpat, quis hendrerit massa eleifend.
          Nam id sapien tristique sem vestibulum sagittis a ac velit. Vivamus
          vel leo tellus. Donec nisl dui, vulputate et tellus in, ultricies
          commodo eros. Cras condimentum, massa eget viverra dapibus, neque
          neque auctor dui, id aliquet libero nisl sit amet purus. Phasellus
          tortor nibh, tincidunt at porttitor et, finibus at ligula. Proin
          aliquam turpis ut cursus euismod. Nam ultrices ut diam vel luctus.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import Header from '~/components/headerComponent.vue'
</script>

<style lang="scss" scoped></style>
