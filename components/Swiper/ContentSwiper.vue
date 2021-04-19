<template>
  <div class="h-full w-full relative">
    <swiper-navigation-icon
      :svg="mdiChevronLeft"
      @click="onClickPrev"
    />
    <div
      v-if="options && options.length"
      ref="swiperContainer"
      class="swiper-container h-full"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(option, optionIdx) in options"
          :key="`slide-${optionIdx}`"
          class="swiper-slide px-5 md:px-8"
        >
          <slot v-bind="option" />
        </div>
      </div>
    </div>
    <swiper-navigation-icon
      class="right-0"
      :svg="mdiChevronRight"
      @click="onClickNext"
    />
  </div>
</template>
<script>
import Swiper from '@/plugins/swiper'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import SwiperNavigationIcon from './SwiperNavigationIcon.vue'

export default {
  name: 'ContentSwiper',
  components: { SwiperNavigationIcon },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiper: null,
      mdiChevronLeft,
      mdiChevronRight
    }
  },
  mounted () {
    this.swiper = new Swiper(this.$refs.swiperContainer, {
      loop: true,
      slidesPerView: 1,
      allowTouchMove: false
    })
  },
  methods: {
    onClickPrev (e) {
      if (!this.swiper) { return }
      e.preventDefault()
      if (this.swiper.isBeginning && !this.swiper.params.loop) { return }
      this.swiper.slidePrev()
    },
    onClickNext (e) {
      if (!this.swiper) { return }
      e.preventDefault()
      if (this.swiper.isEnd && !this.swiper.params.loop) { return }
      this.swiper.slideNext()
    }
  }
}
</script>
