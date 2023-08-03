import '../styles/app.css'
import Popup from './Popup.svelte'

const target = document.getElementById('app')

async function render() {
  const prop = 'Page'
  new Popup({ target, props: { prop } })
}

document.addEventListener('DOMContentLoaded', render)
