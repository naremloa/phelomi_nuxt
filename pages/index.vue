<template>
  <div class="">
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
import LocationBlock from '@/components/LocationBlock.vue'
import MapBlock from '@/components/MapBlock.vue'
import ArticlesBlock from '@/components/ArticlesBlock.vue'
export default {
  components: {
    LocationBlock,
    MapBlock,
    ArticlesBlock
  }
}
</script>
