<script>
export default {
  name: 'LongSocialBtn',
  props: {
    img: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    copyText: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleCopy () {
      this.$notify({ clean: true })
      if (!this.copyText) { return }
      const inputTag = document.createElement('input')
      inputTag.setAttribute('value', this.copyText)
      document.body.appendChild(inputTag)
      inputTag.select()
      const result = document.execCommand('copy')
      document.body.removeChild(inputTag)
      setTimeout(() => {
        if (result) {
          this.$notify({
            title: '提示',
            text: `已成功複製 ${this.copyText}`,
            type: 'success'
          })
        } else {
          this.$notify({
            title: '提示',
            text: `複製失敗，請直接搜尋 ${this.copyText}`,
            type: 'error',
            duration: -1
          })
        }
      }, 300)
    }
  },
  render (h) {
    const { img, url } = this
    const innerDiv = () => h(
      'div',
      { class: 'flex items-center' },
      [
        img ? h('img', { class: 'w-4 h-4 mr-1', attrs: { src: img } }) : null,
        this.$slots.default
      ]
    )
    if (url) {
      return h(
        'a',
        {
          class: 'long-social-btn text-white px-2 block rounded max-w-28 whitespace-nowrap mb-2 cursor-pointer h-7 leading-7',
          attrs: {
            href: url,
            target: '_blank'
          }
        },
        [innerDiv()]
      )
    }
    return h(
      'button',
      {
        class: 'long-social-btn text-white px-2 block rounded max-w-28 whitespace-nowrap mb-2 cursor-pointer h-7 leading-7',
        on: {
          click: () => { this.handleCopy() }
        }
      },
      [innerDiv()]
    )
  }
}
</script>
<style scoped>
.long-social-btn {
  outline: none;
  background-color: rgb(64, 166, 55);
  transition: background-color 0.4s;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
        0 2px 2px 0 rgb(0 0 0 / 14%),
        0 1px 5px 0 rgb(0 0 0 / 12%);
}
.long-social-btn:hover {
  background-color: rgb(64, 166, 55, .8);
}
</style>
