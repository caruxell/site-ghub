<script context="module">
  export async function preload(page) {
    const { lang } = page.params;

    if (lang) {
      const headerContent = await this.fetch(`/lang/${lang}/header.json`);
      const mainContent = await this.fetch(`/lang/${lang}/landing.json`);
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
  <title>Caruxell</title>
  <meta
    name="description"
    content="The official Caruxell company page. Check out the projects Caruxell is enrolled in."
  />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:title" content="Caruxell" />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta
    property="og:description"
    content="The official Caruxell company page. Check out the projects Caruxell is enrolled in."
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link rel="alternate" href="https://www.caruxell.com/en" hreflang="en" />
  <link rel="alternate" href="https://www.caruxell.com/ro" hreflang="ro" />
  <script defer src="/js/animation.js"></script>
</svelte:head>

<Header {headerJson} {lang} />
<div class="slide1">
  <div class="g5" />
  <div class="g4" />
  <div class="g2" />
  <div class="g3" />
  <div class="g1" />
  <span class="vertical">
    <h1>
      {mainJson?.heading}
    </h1>
  </span>
</div>
<Footer {footerJson} {lang} />
<CookieBanner {lang} />

<style>
  .slide1 {
    height: 800px;
    width: 100%;
    min-height: 100vh;
    background-blend-mode: multiply;
  }
  .vertical {
    position: absolute;
    top: 39%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .g1,
  .g2,
  .g3,
  .g4,
  .g5 {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    height: 530px;
    width: 530px;
    transition: all 3s ease-in-out;
  }
  .g1 {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #dcc1e4 0,
      rgba(220, 193, 228, 0) 100%
    );
    right: 250px;
    top: 30px;
  }
  .g2 {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #83bef5 0,
      rgba(220, 193, 228, 0) 100%
    );
    right: 100px;
    top: 50px;
  }
  .g3 {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #ffaf7a 0,
      rgba(220, 193, 228, 0) 100%
    );
    right: 20px;
    top: 0px;
  }
  .g4 {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #a27aff 0,
      rgba(220, 193, 228, 0) 100%
    );
    right: 400px;
    top: 300px;
  }
  .g5 {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #ff7ab8 0,
      rgba(71, 169, 131, 0) 100%
    );
    right: 260px;
    top: 150px;
  }
  /* h1 strong {
    font-size: 1.5em;
  } */
</style>
