const replacePath = root => (path) => {
  const reg = new RegExp(root)
  if (reg.test(path)) { return path.replace(reg, './') }
  console.error('replace path is not correct')
  return ''
}

const bgImageContext = require.context('~/assets/bg_image/', false, /\.jpg$/)
export const bgImage = (path) => {
  const replace = replacePath('~/assets/bg_image/')
  return bgImageContext(replace(path))
}

const roomImageContext = require.context('~/assets/rooms/', true, /\.(jpg|JPG)$/)
export const roomImage = (path) => {
  const replace = replacePath('~/assets/rooms/')
  return roomImageContext(replace(path))
}

const newsImageContext = require.context('~/assets/news/', false, /\.(jpg|png)$/)
export const newsImage = (path) => {
  const replace = replacePath('~/assets/news/')
  return newsImageContext(replace(path))
}

const roomBlockImageContext = require.context('~/assets/rooms_block/', false, /\.jpg$/)
export const roomBlockImage = (path) => {
  const replace = replacePath('~/assets/rooms_block/')
  return roomBlockImageContext(replace(path))
}
