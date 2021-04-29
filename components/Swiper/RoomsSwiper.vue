<template>
  <content-swiper
    v-if="roomOptions && roomOptions.length"
    :options="roomOptions"
  >
    <template #default="row">
      <div class="flex flex-col lg:flex-row items-center lg:items-start">
        <div
          v-for="(item, iIdx) in row"
          :key="iIdx"
          class="flex-grow lg:max-w-1/3"
        >
          <slot v-bind="item" />
        </div>
      </div>
    </template>
  </content-swiper>
</template>
<script>
import { isArray } from '@/plugins/lodash'
import ContentSwiper from './ContentSwiper.vue'

export default {
  name: 'RoomsSwiper',
  components: { ContentSwiper },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    maxARow: {
      type: Number,
      default: 3
    }
  },
  computed: {
    roomOptions () {
      if (isArray(this.options) && this.options?.length) {
        const [result, rest] = this.options.reduce((acc, cur) => {
          const [source, tmp] = acc
          if (tmp.length >= this.maxARow) { return [[...source, [...tmp]], [cur]] }
          return [source, [...tmp, cur]]
        }, [[], []])
        return [...result, rest]
      }
      return []
    }
  }
}
</script>
