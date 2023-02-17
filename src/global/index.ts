import type { App } from 'vue'

// import registerElement from './register-element'
import registerProperties from './register-properties'

export function globalProperties(app: App): void {
  // app.use(registerElement)
  app.use(registerProperties)
}
