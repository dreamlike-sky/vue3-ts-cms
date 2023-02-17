import type { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App): void {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
