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
import { roomBlockImage } from '@/utils/loadImage'
import { RoomsSwiper } from './Swiper'
import RoomItem from './RoomItem.vue'

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
            return { content, id, name, img: roomBlockImage(img) }
          }
          return { content, id, name, img }
        })
    }
  }
}
</script>
