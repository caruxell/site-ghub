<script context="module">
  export async function preload(page, session) {
    const { lang, postId } = page.params;

    const headerRequest = await this.fetch(`/lang/${lang}/header.json`);
    const mainRequest = await this.fetch(`/${lang}/blog/p/${postId}.json`);
    const footerRequest = await this.fetch(`/lang/${lang}/footer.json`);

    const headerJson = await headerRequest.json();
    const mainJson = await mainRequest.json();
    const footerJson = await footerRequest.json();

    if (headerJson && mainJson && footerJson)
      return {
        lang,
        headerJson,
        mainJson,
        footerJson,
      };
  }
</script>

<script>
  import CookieBanner from "../../../../components/CookieBanner.svelte";
  import Header from "../../../../components/Header.svelte";
  import Footer from "../../../../components/Footer.svelte";
  export let lang, headerJson, mainJson, footerJson;
</script>

<svelte:head>
  <title>{mainJson?.fields?.title} &bullet; Caruxell Blog</title>
  <meta
    name="description"
    content="Read articles about Caruxell, the company's culture, corporate life, opportunities, tech stack and experiences."
  />
  <meta http-equiv="content-language" content={lang} />
</svelte:head>

<Header {lang} {headerJson} />
<div class="wrapper">
  <div class="titleHeader">
    <h1>{mainJson?.fields?.title}</h1>
    <div class="creationDate">
      {mainJson?.fields?.creationDate?.split("T")[0]}
    </div>
  </div>
  <div class="content">
    {@html mainJson?.fields?.content}
  </div>
</div>
<Footer {lang} {footerJson} />
<CookieBanner {lang} />

<style>
  h1 {
    width: fit-content;
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 25px 0 0 0;
  }
  .titleHeader {
    line-height: 54px;
    margin-bottom: 45px;
  }
  .wrapper {
    padding: 30px;
    min-height: 60vh;
  }
</style>
