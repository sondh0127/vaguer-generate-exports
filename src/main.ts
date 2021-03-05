import type { Plugin } from 'vue'

import components from './components'

export const VaguerComponents: Plugin = {
  install(app) {
    Object.entries(components).forEach(([key, value]: [string, any]) => {
      app.component(key, value)
    })
  },
}

// START_EXPORTS
// END_EXPORTS
