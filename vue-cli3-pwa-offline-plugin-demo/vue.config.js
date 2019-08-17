const OfflinePlugin = require('offline-plugin')

module.exports = {
  chainWebpack: config => {
    config.plugin('OfflinePlugin')
      .use(OfflinePlugin, [{
        updateStrategy: 'changed',
        autoUpdate: 1000 * 60 * 1,
        ServiceWorker: {
          events: true
        }
      }])
  }
}
