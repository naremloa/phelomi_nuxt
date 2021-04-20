import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loadImage from '~/assets/bg_image/bg_placeholder.jpg'

Vue.use(VueLazyload, {
  loading: loadImage,
  attempt: 1
})
