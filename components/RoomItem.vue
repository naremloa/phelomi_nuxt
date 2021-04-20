<template>
  <div
    class="lg:px-2 cursor-pointer"
    @mouseover="handleFocus"
    @mouseleave="handleBlur"
    @click="handleClick "
  >
    <div class="w-full h-52 relative 2xl:h-64">
      <img
        v-if="img"
        class="swiper-lazy object-cover w-full h-full"
        :data-src="img"
      >
      <div
        v-show="focus"
        class="w-full h-full bg-gray-800 top-0 left-0 absolute bg-opacity-60
        flex justify-center items-center"
      >
        <div class=" w-1/2 h-2/3">
          <img
            class="w-full h-full object-contains"
            :src="activeStar"
          >
        </div>
      </div>
    </div>
    <div class="flex">
      <img
        class="w-3 h-3 mt-2
        hidden lg:block"
        :src="star"
      >
      <div class="lg:px-4 flex-grow">
        <div
          class="w-full
            text-2xl text-center text-primary font-bold
            py-1 border-solid border-b border-primary"
        >
          {{ name }}
        </div>
        <div
          v-if="content"
          class="w-full text-center text-sm py-1 tracking-widest"
        >
          {{ content }}
        </div>
      </div>
      <img
        class="w-3 h-3 mt-2
        hidden lg:block"
        :src="star"
      >
    </div>
  </div>
</template>
<script>
import star from '@/assets/bg_image/icon_star.svg'
import activeStar from '@/assets/button/button_rooms_active.svg'

export default {
  name: 'RoomItem',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      focus: false,
      star,
      activeStar,
      aegean: require('~/assets/rooms_block/a4-aegean-sea.jpg')
    }
  },
  methods: {
    handleFocus () {
      this.focus = true
    },
    handleBlur () {
      this.focus = false
    },
    handleClick () {
      this.$router.push({
        name: 'Room',
        params: { id: this.id }
      })
    }
  }
}
</script>
