<template>
  <div>
    <layout-header />
    <Nuxt />
    <layout-footer />
    <div
      v-show="pageName !== 'Home'"
      class="w-20 h-20 rounded-full bg-primary cursor-pointer
      text-white text-3xl
      fixed bottom-28 right-5
      flex justify-center items-center z-50"
    >
      <router-link :to="{ name: 'Home' }">
        首頁
      </router-link>
    </div>
    <div
      class="w-20 h-20 rounded-full bg-error cursor-pointer
      text-white text-2xl
      fixed bottom-5 right-5
      flex justify-center items-center z-50"
    >
      <a
        class="whitespace-pre-line"
        :href="orderLink"
        target="_blank"
      >{{ '立即\n訂房' }}</a>
    </div>
    <notifications position="top right" classes="vue-notification phelomi-notification" />
  </div>
</template>
<script>
import LayoutHeader from '@/components/Layout/Header.vue'
import LayoutFooter from '@/components/Layout/Footer.vue'
import { orderLink } from '@/data/orderData'

// console.log('s')
export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutFooter
  },
  data () {
    return {
      orderLink
    }
  },
  computed: {
    pageName () {
      return this.$route.name
    }
  }
  // mounted () {
  //   /* eslint-disable-next-line */
  //   if (process.client && window) {
  //     window.history.scrollRestoration = 'auto'
  //   }
  // }

}
</script>
<style>
.vue-notification.phelomi-notification {
  margin: 20px;
}
</style>
