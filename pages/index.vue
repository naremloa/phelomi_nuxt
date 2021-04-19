<template>
  <div class="">
    <gallery-block />
    <news-block />
    <rooms-block />
    <location-block />
    <map-block class="-mt-8 md:mt-0" />
    <articles-block />
  </div>
</template>
<router>
{
  name: 'Home'
}
</router>
<script>
import GalleryBlock from '@/components/GalleryBlock.vue'
import NewsBlock from '@/components/NewsBlock.vue'
import RoomsBlock from '@/components/RoomsBlock.vue'
import LocationBlock from '@/components/LocationBlock.vue'
import MapBlock from '@/components/MapBlock.vue'
import ArticlesBlock from '@/components/ArticlesBlock.vue'
export default {
  components: {
    GalleryBlock,
    NewsBlock,
    RoomsBlock,
    LocationBlock,
    MapBlock,
    ArticlesBlock
  }
}
</script>
