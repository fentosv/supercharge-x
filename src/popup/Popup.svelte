<script lang="ts">
  import Button from '../components/Button.svelte'

  export let prop: string

  const openOptionsPage = () => {
    chrome.runtime.openOptionsPage()
  }
</script>

<section>Popup {prop}</section>
<Button handleClick={openOptionsPage}>Open options</Button>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: var(--width-popup);
  }
</style>
