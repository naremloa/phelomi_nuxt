<template>
  <div
    class="gallery-block w-full max-h-160 2xl:max-h-228"
    style="height: 58.54vw"
  >
    <div v-if="loading">
      等待中
    </div>
    <image-swiper :options="options">
      <template #default="{ src }">
        <gallery-img :src="src" />
      </template>
    </image-swiper>
  </div>
</template>
<script>
import data from '@/data/bannerData'
import { ImageSwiper } from './Swiper'
import GalleryImg from './GalleryImg.vue'
export default {
  name: 'GalleryBlock',
  components: { ImageSwiper, GalleryImg },
  data () {
    return {
      loading: false,
      options: data.map(i => ({ src: i }))
    }
  }
}
</script>
