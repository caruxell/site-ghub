<script>
  import { onMount } from "svelte";
  export let lang, footerJson;
  const thisYear = new Date().getFullYear();
  let romanianLink, englishLink;
  onMount(() => {
    romanianLink = window.location.href.replace("/en", "/ro");
    englishLink = window.location.href.replace("/ro", "/en");
  });
</script>

{#if lang}
  <footer>
    <div class="innerHeader">
      <div class="links">
        <a href={`${lang}/investors`}>{footerJson?.investors}</a>
        <a href={`${lang}/our-work`}>{footerJson?.products}</a>
        <a href={`${lang}/join-us`}>{footerJson?.careers}</a>
        <a href={`${lang}/about-us`}>{footerJson?.aboutUs}</a>
        <a href={`${lang}/blog`}>{footerJson?.blog}</a>
        <a href={`${lang}/contact`}>{footerJson?.contact}</a>
        <a href={`${lang}/gdpr`}>{footerJson?.gdpr}</a>
        <a href={`${lang}/privacy-policy`}>{footerJson?.privacyPolicy}</a>
        <a href={`${lang}/terms-and-conditions`}
          >{footerJson?.termsAndConditions}</a
        >
      </div>
      <div class="langSwitcherWrapper">
        <a href={englishLink}>
          <img src="/img/united-states.png" alt="USA flag" />
          <span>English</span>
        </a>
        <a href={romanianLink}>
          <img src="/img/romania.png" alt="Romania flag" />
          <span>Română</span></a
        >
      </div>
      <div class="details">
        <img src="/img/logo.png" alt="Caruxell Logo" />
        <div class="companyDetails">
          <strong>Caruxell</strong><br />
          Copyright, &copy; Caruxell Software SRL
          {thisYear} <br />
          {footerJson?.fiscalIDCode}&nbsp;{footerJson?.socialCapital}
          <br />
          {footerJson?.address}
        </div>
      </div>
    </div>
  </footer>
{/if}

<style>
  footer {
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    max-width: 56em;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  footer .details img {
    max-height: 120px;
  }
  strong {
    font-size: 14pt;
  }
  .companyDetails {
    display: inline-block;
    top: 50%;
    transform: translateY(-40%);
    position: relative;
    margin-left: 10px;
    font-size: 8pt;
  }
  .links,
  .details {
    display: inline-block;
  }
  .details {
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 20px;
    text-align: left;
    float: left;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }
  .links {
    float: left;
    text-align: center;
    display: block;
    width: fit-content;
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }
  .links a {
    text-align: right;
    font-size: 0.8em;
    display: inline-block;
    margin: 0 10px;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  .langSwitcherWrapper {
    text-align: center;
  }
  .langSwitcherWrapper img {
    width: 40px;
    display: inline-block;
    vertical-align: middle;
  }

  .langSwitcherWrapper a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
  }

  .langSwitcherWrapper span {
    vertical-align: middle;
  }
  @media (max-width: 600px) {
    footer .details img {
      display: none;
    }
    .companyDetails {
      margin-left: 0;
      top: 30px;
    }
  }
</style>
