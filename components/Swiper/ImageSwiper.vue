<template>
  <div class="h-full">
    <div
      v-if="options && options.length"
      ref="swiperContainer"
      class="swiper-container h-full"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
    >
      <div
        class="swiper-wrapper"
      >
        <div
          v-for="(option, optionIdx) in options"
          :key="`slide-${optionIdx}`"
          class="swiper-slide"
        >
          <slot v-bind="option" />
        </div>
      </div>
      <div ref="swiperPagination" class="swiper-pagination" />
    </div>
  </div>
</template>
<script>
import Swiper from '@/plugins/swiper'

export default {
  name: 'ImageSwiper',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.swiper = new Swiper(this.$refs.swiperContainer, {
      lazy: true,
      preloadImages: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: { clickable: true, el: this.$refs.swiperPagination },
      autoplay: { delay: 5000, disableOnInteraction: false },
      simulateTouch: false
    })
  },
  methods: {
    onMouseover () {
      const swiper = this.swiper
      if (!swiper) { return }
      swiper.autoplay.stop()
    },
    onMouseout () {
      const swiper = this.swiper
      if (!swiper) { return }
      swiper.autoplay.start()
    }
  }
}
</script>
<style>
.swiper-container
.swiper-pagination
.swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: 1px solid #f6b42c;
  opacity: 0.8;
}
.swiper-container
.swiper-pagination {
  text-align: right;
  padding-right: 40px;
}
.swiper-container
.swiper-pagination
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #f6b42c;
}
</style>
