<template>
  <block
    id="Follow"
    :title="blockTitle"
  >
    <div
      class="w-full flex items-center justify-around
      flex-col md:flex-row mt-8"
    >
      <article-item
        class="border-warning text-warning hover:bg-warning"
        title="跳島趣行程"
        @click="$router.push({ name: 'Follow', params: { id: 'followA' } })"
      />
      <article-item
        class="border-info text-info hover:bg-info"
        title="愛玩水行程"
        @click="$router.push({ name: 'Follow', params: { id: 'followB' } })"
      />
      <article-item
        class="border-error text-error hover:bg-error"
        title="愛浪漫行程"
        @click="$router.push({ name: 'Follow', params: { id: 'followC' } })"
      />
      <!-- <div
        class="bg-black w-1/2 md:w-1/4 h-32 mb-5"
        @click="$router.push({ name: 'Follow', params: { id: 'followA' } })"
      />
      <div
        class="bg-black w-1/2 md:w-1/4 h-32 mb-5"
        @click="$router.push({ name: 'Follow', params: { id: 'followB' } })"
      />
      <div
        class="bg-black w-1/2 md:w-1/4 h-32 mb-5"
        @click="$router.push({ name: 'Follow', params: { id: 'followC' } })"
      /> -->
    </div>
  </block>
</template>
<script>
import Block from './Block.vue'
import ArticleItem from './ArticleItem.vue'

export default {
  name: 'ArticlesBlock',
  components: { Block, ArticleItem },
  data () {
    const blockTitle = {
      zh: '跟我醬玩！',
      en: '澎湖行程建議'
    }
    return {
      blockTitle
    }
  }
}
</script>
