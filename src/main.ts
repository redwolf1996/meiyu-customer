import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import 'uno.css'
import VConsole from 'vconsole'

const vConsole = new VConsole() as any
vConsole.init()

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
