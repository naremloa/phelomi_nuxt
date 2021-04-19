export default (to, from, savedPosition) => {
  if (savedPosition) { return savedPosition }
  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve({ selector: to.hash, behavior: 'smooth' }) }, 100)
    })
  }
  // 預設 始終滾動頂部
  return { y: 0 }
}
