<template>
  <div
    class="gallery-img h-full w-full"
  >
    <img
      v-if="src"
      class="swiper-lazy w-full h-full object-cover"
      :data-src="src"
    >
  </div>
</template>
<script>
export default {
  name: 'GalleryImg',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
