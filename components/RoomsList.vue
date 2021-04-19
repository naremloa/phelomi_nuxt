<template>
  <rooms-swiper :options="options">
    <template #default="item">
      <room-item
        class="mb-4"
        v-bind="item"
      />
    </template>
  </rooms-swiper>
</template>
<script>
import roomsData from '@/data/roomsData'
import { RoomsSwiper } from './Swiper'
import RoomItem from './RoomItem.vue'

const images = require.context('~/assets/', true, /\.jpg$/)

export default {
  components: { RoomsSwiper, RoomItem },
  data () {
    return {
      options: roomsData
        .map(({
          short: { content, img } = {},
          id,
          name
        } = {}) => {
          if (img) {
            const imgTarget = images(img.replace(/^~\/assets\//, './'))
            return { content, id, name, img: imgTarget }
          }
          return { content, id, name, img }
        })
    }
  }
}
</script>
