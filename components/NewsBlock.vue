<template>
  <block
    id="News"
    class=""
    :title="blockTitle"
  >
    <content-swiper :options="newsOptions">
      <template #default="data">
        <div class="flex flex-col items-start">
          <news-content v-bind="data[0]" />
          <news-content v-bind="data[1]" />
        </div>
      </template>
    </content-swiper>
  </block>
</template>
<script>
import newsData from '@/data/newsData'
import Block from './Block.vue'
import { ContentSwiper } from './Swiper'
import NewsContent from './NewsContent.vue'

export default {
  name: 'NewsBlock',
  components: { ContentSwiper, NewsContent, Block },
  props: {
    maxARow: {
      type: Number,
      default: 2
    }
  },
  data () {
    const blockTitle = {
      en: 'GOOD NEWS',
      zh: '最新消息'
    }
    return {
      blockTitle
    }
  },
  computed: {
    newsOptions () {
      const [result, rest] = newsData.reduce((acc, cur) => {
        const [source, tmp] = acc
        const { short = {}, id } = cur
        if (tmp.length >= this.maxARow) { return [[...source, [...tmp]], [{ id, ...short }]] }
        return [source, [...tmp, { id, ...short }]]
      }, [[], []])
      return [...result, rest]
    }
  }
}
</script>
