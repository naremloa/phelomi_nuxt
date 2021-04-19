<template>
  <div class="flex items-start text-textGray tracking-wider min-h-6 pb-1">
    <template v-if="item.icon">
      <div
        class="mr-1"
        style="margin-top: 2px"
      >
        <svg-icon
          v-if="item.svg"
          :path="item.icon"
          :height="17"
          :width="17"
          fill="rgba(0, 0, 0, .54)"
        />
      </div>
    </template>
    {{ item.text }}
  </div>
</template>
<script>
import specifyIcon from '@/plugins/specifyIcon'
import SvgIcon from './SvgIcon.vue'

const isSvgPath = path => /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(path) &&
      /[\dz]$/i.test(path) && path.length > 4

export default {
  name: 'RoomIcon',
  components: { SvgIcon },
  props: {
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    item () {
      if (this.type && specifyIcon[this.type]) {
        const { icon, text } = specifyIcon[this.type]
        return { icon, text, svg: isSvgPath(icon) }
      }
      const text = ''
      const icon = this.type || ''
      return { icon, text, svg: isSvgPath(icon) }
    }
  }
}
</script>
