<template>
  <div
    class="absolute inset-y-1/2 z-10 transform -translate-y-1/2
      rounded-full bg-primary flex justify-center items-center cursor-pointer
      h-4 md:h-7 w-4 md:w-7 leading-4"
    @click="(e) => $emit('click', e)"
  >
    <svg-icon
      v-if="svg"
      :path="svg"
      :height="40"
      :width="40"
      fill="#fff"
      style="flex-shrink: 0.5"
    />
  </div>
</template>
<script>
import svgIcon from '@/components/SvgIcon.vue'
export default {
  name: 'SwiperNavigationIcon',
  components: { svgIcon },
  props: {
    svg: {
      type: [String, Object],
      default: ''
    }
  }
}
</script>
