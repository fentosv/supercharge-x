import '../styles/app.css'
import Options from './Options.svelte'

const target = document.getElementById('full-page-app')

async function render() {
  const prop = 'Page'

  new Options({ target, props: { prop } })
}

document.addEventListener('DOMContentLoaded', render)
