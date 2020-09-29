import V2Lib from './../../src/main.js'

export default ({ Vue, options, router, siteData }) => {
  Vue.use(V2Lib, { type: '[test] from document site' })
}
