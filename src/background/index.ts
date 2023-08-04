import onInstall from '../utils/onInstall'
import onMessage from '../utils/onMessage'
import onStorageChanged from '../utils/onStorageChanged'

console.log('Service worker started.')

onInstall()
onStorageChanged()
onMessage()

// Chrome onStartup example
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser init')
})
