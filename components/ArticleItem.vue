<template>
  <div
    class="w-52 h-52 mb-5 flex justify-center cursor-pointer tracking-wider
    items-center border-10 rounded-3xl text-3xl font-bold hover:text-white"
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
