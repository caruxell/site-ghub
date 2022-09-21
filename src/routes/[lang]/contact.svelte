<script context="module">
  export async function preload(page) {
    const { lang } = page.params;

    if (lang) {
      const headerContent = await this.fetch(`/lang/${lang}/header.json`);
      const mainContent = await this.fetch(`/lang/${lang}/contact.json`);
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

  const sendMail = () => {
    const anchor = document.createElement("a");
    anchor.href = "mailto:caruxell@gmail.com?subject=Contact";
    anchor.click();
  };
</script>

<svelte:head>
  <title>{mainJson?.contact} &bullet; Caruxell</title>
  <meta name="description" content={mainJson?.description} />
  <meta property="og:title" content={mainJson?.contact} />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta property="og:description" content={mainJson?.description} />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link
    rel="alternate"
    href="https://www.caruxell.com/en/contact"
    hreflang="en"
  />
  <link
    rel="alternate"
    href="https://www.caruxell.com/ro/contact"
    hreflang="ro"
  />
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Header {headerJson} {lang} />
<div class="wrapper">
  <h1>{mainJson?.contact}</h1>
  <section>
    <div>
      <img src="linkedin.svg" alt="LinkedIn" />
      <a
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/company/79616705">LinkedIn</a
      >
    </div>
    <div>
      <img src="youtube.svg" alt="YouTube" />
      <a
        rel="noopener"
        target="_blank"
        href="https://www.youtube.com/channel/UC_mPDWBoBB4P15Jw7CqBODw"
        >YouTube</a
      >
    </div>
    <div>
      <img src="twitter.svg" alt="Twitter" />
      <a rel="noopener" target="_blank" href="https://twitter.com/caruxell"
        >Twitter</a
      >
    </div>
    <div>
      <img src="instagram.svg" alt="Instagram" />
      <a
        rel="noopener"
        target="_blank"
        href="https://www.instagram.com/caruxell/">Instagram</a
      >
    </div>
    <div>
      <img src="facebook.svg" alt="Facebook" />
      <a rel="noopener" target="_blank" href="https://facebook.com/caruxell"
        >Facebook</a
      >
    </div>
    <div>
      <img src="email.svg" alt="Email" />
      <span on:click={sendMail}>{mainJson?.sendUsEmail}</span>
    </div>
  </section>
</div>
<Footer {footerJson} {lang} />
<CookieBanner {lang} />

<style>
  .wrapper {
    padding: 30px;
    min-height: 60vh;
  }
  h1 {
    padding: 25px 0;
  }
  section {
    padding: 35px;
  }
  section img {
    vertical-align: middle;
    margin-right: 10px;
  }
  section > div {
    margin-bottom: 30px;
  }
  section span {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
