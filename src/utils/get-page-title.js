// import defaultSettings from '@/settings'
// import i18n from '@/lang'

// const title = defaultSettings.title || '商城'
const title = '商城'

// export default function getPageTitle(key) {
//   const hasKey = i18n.te(`route.${key}`)
//   if (hasKey) {
//     const pageName = i18n.t(`route.${key}`)
//     return `${pageName} - ${title}`
//   }
//   return `${title}`
// }

export default function getPageTitle (key) {
  if (key) return key
  return `${title}`
}
