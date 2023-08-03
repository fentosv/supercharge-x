const onInstallCallback = async () => {
  // await saveInitialDate()
  console.log('Installed')
}

export default function onInstall() {
  chrome.runtime.onInstalled.addListener(onInstallCallback)
}
