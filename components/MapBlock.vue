<template>
  <block
    id="Map"
    class="h-full bg-accent"
    :title="blockTitle"
    style="min-height: 68.38vw"
  >
    <div
      v-lazy:background-image="mapSrc"
      class="w-full h-full bg-map-texture bg-cover bg-center"
      style="min-height: 68.38vw"
    />
  </block>
</template>
<script>
import { bgImage } from '@/utils/loadImage'
import Block from './Block.vue'

export default {
  name: 'MapBlock',
  components: { Block },
  data () {
    const blockTitle = {
      en: 'HAVE FUN',
      zh: '澎湖找樂子'
    }
    return {
      blockTitle,
      mapSrc: bgImage('~/assets/bg_image/bg_haveFun.jpg')
    }
  }
}
</script>
