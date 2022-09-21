<script context="module">
  export async function preload(page) {
    const { lang } = page.params;

    if (lang) {
      const headerContent = await this.fetch(`/lang/${lang}/header.json`);
      const mainContent = await this.fetch(`/lang/${lang}/aboutUs.json`);
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
  <title>{mainJson?.aboutUs} &bullet; Caruxell</title>
  <meta
    name="description"
    content="Find out details about the Caruxell company staff, work culture."
  />
  <meta property="og:title" content={mainJson?.aboutUs} />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta
    property="og:description"
    content="Find out details about the Caruxell company staff, work culture."
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link
    rel="alternate"
    href="https://www.caruxell.com/en/about-us"
    hreflang="en"
  />
  <link
    rel="alternate"
    href="https://www.caruxell.com/ro/about-us"
    hreflang="ro"
  />
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Header {headerJson} {lang} />
<div class="wrapper">
  <h1>{mainJson?.aboutUs}</h1>
  <section>
    <h2>{mainJson?.theMission}</h2>
    {@html mainJson?.missionText}
  </section>
  <section>
    <h2>{mainJson?.theMotivation}</h2>
    {@html mainJson?.motivationText}
  </section>
  <section>
    <h2>{mainJson?.theWay}</h2>
    {@html mainJson?.wayText}
  </section>
  <section>
    <h2>{mainJson?.theLocation}</h2>
    {mainJson?.locationText}
  </section>
</div>
<Footer {footerJson} {lang} />
<CookieBanner {lang} />

<style>
  .wrapper {
    padding: 30px;
  }
  h1 {
    padding: 25px 0;
  }
  h2 {
    font-weight: bold;
  }
  section {
    padding: 35px;
  }
</style>
