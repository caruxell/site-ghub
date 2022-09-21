<script context="module">
  export async function preload(page) {
    const { lang } = page.params;

    if (lang) {
      const headerContent = await this.fetch(`/lang/${lang}/header.json`);
      const mainContent = await this.fetch(`/lang/${lang}/ourWork.json`);
      const footerContent = await this.fetch(`/lang/${lang}/footer.json`);
      const headerJson = await headerContent.json();
      const mainJson = await mainContent.json();
      const footerJson = await footerContent.json();
      return {
        headerJson,
        mainJson,
        footerJson,
        lang,
      };
    }

    return { lang };
  }
</script>

<script>
  import CookieBanner from "../../components/CookieBanner.svelte";
  import Header from "../../components/Header.svelte";
  import Footer from "../../components/Footer.svelte";
  import { onMount } from "svelte";
  export let lang, headerJson, mainJson, footerJson;

  let canonicalUrl;
  onMount(() => {
    canonicalUrl = [
      window.location.origin.replace("www.", ""),
      window.location.pathname,
    ].join("");
  });
</script>

<svelte:head>
  <title>{mainJson?.ourWork} &bullet; Caruxell</title>
  <meta
    name="description"
    content="Check out the projects we collaborated or created."
  />
  <meta property="og:title" content={mainJson?.ourWork} />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta
    property="og:description"
    content={"Check out the projects we collaborated or created."}
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link
    rel="alternate"
    href="https://www.caruxell.com/en/our-work"
    hreflang="en"
  />
  <link
    rel="alternate"
    href="https://www.caruxell.com/ro/our-work"
    hreflang="ro"
  />
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Header {headerJson} {lang} />
<div class="wrapper">
  <h1>{mainJson?.ourWork}</h1>
  {#each mainJson?.content as entry}
    <a href={entry?.target} target="_blank" rel="noopener">
      <div class="card">
        <strong>{entry?.card?.title}</strong>
        {entry?.card?.description}
      </div>
    </a>
  {/each}

  <center> <h2>{mainJson?.extra}</h2></center>
</div>
<Footer {lang} {footerJson} />
<CookieBanner {lang} />

<style>
  .card {
    border-radius: 20px;
    height: 200px;
    padding: 20px;
    box-sizing: border-box;
    margin: 10px 20px;
    background-color: black;
    color: white;
  }
  .card strong {
    font-size: 20pt;
    display: block;
  }
  h2 {
    font-weight: bold;
    margin: 55px 0;
  }
  .wrapper {
    padding: 30px;
  }
  h1 {
    padding: 25px 0;
  }
  /* section {
    padding: 35px;
  } */
</style>
