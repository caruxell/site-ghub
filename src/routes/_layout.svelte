<svelte:head>
  <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/android-icon-192x192.png"
  />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  <meta property="og:title" content="Caruxell" />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta
    property="og:description"
    content="The official Caruxell website. Check out our projects or support us by investment."
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <script src="/js/google.js" async defer></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-YW82PN563Z"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-YW82PN563Z");
  </script>
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Caruxell",
  "alternateName": "CARUXELL SOFTWARE SRL",
  "url": "https://caruxell.com/",
  "logo": "https://caruxell.com/img/logo.png",
  "sameAs": [
    "https://www.facebook.com/caruxell",
    "https://www.instagram.com/caruxell/",
    "https://twitter.com/caruxell",
    "https://www.youtube.com/channel/UC_mPDWBoBB4P15Jw7CqBODw",
    "https://www.linkedin.com/company/79616705",
    "https://caruxell.com/"
  ]
}
  </script>
</svelte:head>

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 56em;
    margin: 0 auto;
    /* background-color: white; */
    box-sizing: border-box;
    padding: 0 20px 20px 20px;
  }
</style>
