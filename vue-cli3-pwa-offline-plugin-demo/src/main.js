import Vue from 'vue'
import App from './App.vue'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'

const isPro = process.env.NODE_ENV === 'production'

if (isPro) {
  if ('serviceWorker' in navigator) {
    OfflinePluginRuntime.install({
      onInstalled: () => {},
      onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
      onUpdated: () => {
        const bool = window.confirm('新增的资源已经可用了，请刷新')
        if (bool) {
          window.location.reload()
        }
      },
      onUpdateFailed: () => {}
    })
  }
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
