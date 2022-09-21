<script context="module">
  export async function preload(page) {
    const { lang } = page.params;

    if (lang) {
      const headerContent = await this.fetch(`/lang/${lang}/header.json`);
      const mainContent = await this.fetch(`/lang/${lang}/press.json`);
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
  <title>{mainJson?.press} &bullet; Caruxell</title>
  <meta name="description" content={mainJson?.description} />
  <meta property="og:title" content={mainJson?.press} />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta property="og:description" content={mainJson?.description} />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link
    rel="alternate"
    href="https://www.caruxell.com/en/press"
    hreflang="en"
  />
  <link
    rel="alternate"
    href="https://www.caruxell.com/ro/press"
    hreflang="ro"
  />
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Header {headerJson} {lang} />
<div class="wrapper">
  <h1>{mainJson?.press}</h1>
  <div class="content">
    {mainJson?.content}
  </div>
</div>
<Footer {lang} {footerJson} />
<CookieBanner {lang} />

<style>
  .wrapper {
    padding: 30px;
    min-height: 60vh;
  }
  h1 {
    padding: 25px 0;
  }
  .content {
    padding: 35px;
    box-sizing: border-box;
  }
</style>
