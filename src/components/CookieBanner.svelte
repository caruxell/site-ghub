<script>
  import { onMount } from "svelte";
  export let lang;

  let showWarning = false;
  let data;

  const acceptCookies = () => {
    localStorage.setItem("acceptedCookies", true);
    showWarning = false;
  };

  onMount(async () => {
    const acceptedCookies = localStorage.getItem("acceptedCookies");
    if (!acceptedCookies) {
      showWarning = true;
      const getText = await fetch(`/lang/${lang}/cookieBanner.json`);
      const jsonText = await getText.json();
      if (jsonText) data = jsonText;
    }
  });
</script>

{#if showWarning && data?.text}
  <div id="banner">
    <div class="text">
      {@html data?.text}
    </div>
    <button on:click={acceptCookies}>Ok</button>
  </div>
{/if}

<style>
  #banner {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    border-radius: 25px;
    max-width: 300px;
    font-family: monospace;
    overflow: hidden;
  }
  .text {
    box-sizing: border-box;
    padding: 25px;
    width: 100%;
    backdrop-filter: saturate(180%) blur(7px);
    -webkit-backdrop-filter: saturate(180%) blur(7px);
    background-color: rgb(95 95 95 / 60%);
  }
  button {
    appearance: none;
    -webkit-appearance: none;
    border: 0;
    background-color: black;
    position: aboslute;
    bottom: 0;
    font-weight: bold;
    width: 100%;
    height: 80px;
    color: white;
    cursor: pointer;
    font-size: 2em;
  }
</style>
