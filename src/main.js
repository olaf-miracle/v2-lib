import * as components from './components'

const V2Lib = {
  install(Vue, options = {}) {
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)
    }
    console.log('options >>', options)

    // -- Create a mixin
    Vue.mixin({
      created () {
        console.log('A Vue Instance is created >>', Vue)
      }
    })
  }
}

export default V2Lib

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(V2Lib)
