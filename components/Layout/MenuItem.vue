<template>
  <div
    class="cursor-pointer ml-1 pt-3 justify-end items-center
    bg-nav-item-texture hover:bg-nav-item-texture-hover
    bg-right-bottom bg-contain bg-no-repeat
    w-28 min-w-28 md:w-30 md:min-w-30
    h-12 md:h-14
    "
    :class="{
      'hidden': !phone,
      'lg:flex': !phone,
      'flex': phone,
    }"
    @click="handleClick"
  >
    <span
      class="text-white whitespace-nowrap w-18
      text-sm md:text-base
      pl-3 md:pl-1
      "
    >
      {{ label }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    label: {
      type: [String, Number],
      default: ''
    },
    hash: {
      type: String,
      default: ''
    },
    phone: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick () {
      if (this.hash.value) {
        if (this.hash.value.replace(/#/g, this.$route.name === '')) {
          this.$router.push({ hash: '#Content' })
        } else {
          this.$router.push({ name: 'Home', hash: this.hash.value })
        }
      }
    }
  }
}
</script>
