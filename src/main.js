import Vue from 'vue'
import Bulletins from './components/Bulletins'

Vue.config.productionTip = false

new Vue({
  render: h => h(Bulletins),
}).$mount('#app')

// import * as components from './components'

// console.log('process', process.env)

// const V2Lib = {
//   install(Vue, options = {}) {
//     console.log('Vue instance >>', Vue, options)
//     console.log('import components >>', components)

//     for (const componentName in components) {
//       const component = components[componentName]
//       console.log('component >>', component)
//       Vue.component(component.name, component)
//     }

//     // -- Define a global property
//     Vue.VERSION = 'v0.1.0--alpha'

//     // -- Create a mixin
//     Vue.mixin({
//       created () {
//         console.log('Vue Instance is created >>', Vue)
//       }
//     })
//   }
// }

// export default V2Lib

// if (typeof window !== 'undefined' && window.Vue) window.Vue.use(V2Lib)
