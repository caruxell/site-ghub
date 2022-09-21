<script context="module">
  export async function preload(page) {
    const { lang } = page.params;
    const headerRequest = await this.fetch(`/lang/${lang}/header.json`);
    const mainRequest = await this.fetch(`/${lang}/blog/previews.json`);
    const footerRequest = await this.fetch(`/lang/${lang}/footer.json`);

    const mainJson = await mainRequest.json();
    const headerJson = await headerRequest.json();
    const footerJson = await footerRequest.json();
    return {
      lang,
      mainJson,
      headerJson,
      footerJson,
    };
  }
</script>

<script>
  import CookieBanner from "../../../components/CookieBanner.svelte";
  import Header from "../../../components/Header.svelte";
  import Footer from "../../../components/Footer.svelte";
  // export let posts;
  export let lang, headerJson, mainJson, footerJson;
</script>

<svelte:head>
  <title>Blog &bullet; Caruxell</title>
  <meta
    name="description"
    content="Read articles about Caruxell, the company's culture, corporate life, opportunities, tech stack and experiences."
  />
  <link rel="alternate" href="https://www.caruxell.com/en/blog" hreflang="en" />
  <link rel="alternate" href="https://www.caruxell.com/ro/blog" hreflang="ro" />
</svelte:head>

<Header {lang} {headerJson} />
<div class="wrapper">
  <div class="titleHeader">
    <h1>Blog</h1>
    <!-- <a rel="prefetch" href={`${lang}/blog/search`}>Search Posts</a> -->
  </div>
  <div class="content">
    {#each mainJson?.items as article}
      <a href={`${lang}/blog/p/${article?.sys?.id}`}>
        <article>
          <h2>{article?.fields?.title}</h2>
          <div class="creationDate">
            {article?.fields?.creationDate?.split("T")[0]}
          </div>
        </article>
      </a>
    {/each}
  </div>
</div>
<Footer {lang} {footerJson} />
<CookieBanner {lang} />

<style>
  h2 {
    display: inline-block;
    font-weight: bold;
    text-overflow: break-word;
  }
  a {
    text-decoration: none;
    vertical-align: top;
  }
  h1 {
    width: fit-content;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
  }
  .titleHeader {
    line-height: 54px;
  }
  /* .titleHeader > a {
    float: right;
    vertical-align: middle;
  } */
  .wrapper {
    padding: 30px;
    min-height: 60vh;
  }
  h1 {
    padding: 25px 0;
  }
  article {
    display: inline-block;
    color: white;
    margin: 15px;
    border-radius: 30px;
    background-color: black;
    box-sizing: border-box;
    padding: 35px;
    min-width: 200px;
    width: calc(50% - 35px);
  }
</style>
