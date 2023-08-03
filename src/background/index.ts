import onInstall from './onInstall'
import onStorageChanged from './onStorageChanged'

console.log('Service worker started.')

onInstall()
onStorageChanged()

// Chrome onStartup example
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser init')
})
