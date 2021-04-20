<template>
  <div class="p-3 md:p-6 mb-24">
    <block :title="blockTitle">
      <div class="px-8">
        <div class="object-contain w-full mb-12">
          <img
            v-if="img"
            :src="img"
          >
        </div>
        <Title>{{ title }}</Title>
        <!-- <div class="text-secondary text-3xl">
        {{ item.title }}
      </div> -->
        <p class="whitespace-pre-wrap tracking-widest text-lg">
          {{ content }}
        </p>
      </div>
    </block>
    <explore-rooms-list />
  </div>
</template>
<router>
{
  name: 'News'
}
</router>
<script>
import newsData from '@/data/newsData'
import Block from '@/components/Block.vue'
import Title from '@/components/Title.vue'
import ExploreRoomsList from '@/components/ExploreRoomsList.vue'
import { newsImage } from '@/utils/loadImage'

export default {
  name: 'News',
  components: {
    Block, ExploreRoomsList, Title
  },
  data () {
    const blockTitle = {
      en: 'GOOD NEWS',
      zh: '最新消息'
    }
    const {
      img,
      content,
      title
    } = (newsData.find(({ id }) => id === this.$route.params?.id)) || {}
    return {
      blockTitle,
      content,
      title,
      img: newsImage(img)
    }
  }
}
</script>
