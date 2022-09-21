<script context="module">
  export async function preload(page) {
    const { lang } = page.params;

    if (lang) {
      const headerContent = await this.fetch(`/lang/${lang}/header.json`);
      const mainContent = await this.fetch(`/lang/${lang}/investors.json`);
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

  const prepareSendEmail = () => {
    const a = document.createElement("a");
    a.href =
      lang === "ro"
        ? "mailto:caruxell@gmail.com?subject=[investors] - Vreau să investesc în Caruxell"
        : "mailto:caruxell@gmail.com?subject=[investors] - I want to invest in Caruxell";
    a.click();
  };

  onMount(() => {
    canonicalUrl = [
      window.location.origin.replace("www.", ""),
      window.location.pathname,
    ].join("");
  });
</script>

<svelte:head>
  <title>{mainJson?.investors} &bullet; Caruxell</title>
  <meta name="description" content={mainJson?.description} />
  <meta property="og:title" content={mainJson?.investors} />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta property="og:description" content={mainJson?.description} />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link
    rel="alternate"
    href="https://www.caruxell.com/en/investors"
    hreflang="en"
  />
  <link
    rel="alternate"
    href="https://www.caruxell.com/ro/investors"
    hreflang="ro"
  />
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Header {lang} {headerJson} />

<div class="wrapper">
  <h1>{mainJson?.investors}</h1>
  <div>
    {mainJson?.comeOver}
    <button on:click={prepareSendEmail}>{mainJson?.sendEmail}</button>
  </div>
</div>
<Footer {lang} {footerJson} />
<CookieBanner {lang} />

<style>
  button {
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    padding: 15px 35px;
    border-radius: 18px;
    background-color: black;
    color: white;
    font-family: inherit;
    font-size: 2em;
    margin-top: 30px;
    border: 0;
    cursor: pointer;
  }
  .wrapper {
    padding: 30px;
    min-height: 60vh;
  }
  h1 {
    padding: 25px 0;
  }
  /* h2 {
    font-weight: bold;
  } */
</style>
