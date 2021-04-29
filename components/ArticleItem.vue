<template>
  <div
    class="w-52 h-52 mb-5 flex justify-center cursor-pointer tracking-wider
    items-center border-10 rounded-large text-3xl font-bold hover:text-white
    xl:w-80 xl:h-80 xl:border-16 xl:text-5xl"
    @click="(e) => $emit('click', e)"
  >
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'ArticleItem',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
