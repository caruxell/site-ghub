<script>
  export let headerJson;
  export let lang;
  let showMobileMenu = false;
  const toggleMenu = () => {
    showMobileMenu = !showMobileMenu;
  };
</script>

{#if lang}
  <header>
    <a href={`${lang}/`}><span class="logo">Caruxell</span> </a>
    <span class="nav">
      <a href={`${lang}/about-us`}>{headerJson?.aboutUs || "About Us"}</a>
      <a href={`${lang}/our-work`}>{headerJson?.ourWork || "Our Work"}</a>
      <a href={`${lang}/press`}>{headerJson?.press || "Press"}</a>
      <a href={`${lang}/join-us`}>{headerJson?.joinUs || "Join Us"}</a>
      <!-- <a href={`${lang}/blog`}>{headerJson?.blog || "Blog"}</a> -->
    </span>
    <img
      src={showMobileMenu ? "close.svg" : "menu.svg"}
      alt="menu"
      class="menu"
      on:click={toggleMenu}
    />
  </header>
{:else}
  <header>
    <a href="/"><span class="logo">Caruxell</span> </a>
    <span class="nav">
      <a href="about-us">{headerJson?.aboutUs || "About Us"}</a>
      <a href="our-work">{headerJson?.ourWork || "Our Work"}</a>
      <a href="press">{headerJson?.press || "Press"}</a>
      <a href="join-us">{headerJson?.joinUs || "Join Us"}</a>
      <a href="/en/blog">{headerJson?.blog || "Blog"}</a>
    </span>
    <img
      src={showMobileMenu ? "close.svg" : "menu.svg"}
      alt="menu"
      class="menu"
      on:click={toggleMenu}
    />
  </header>
{/if}
{#if showMobileMenu}
  <span class="menuWrapper">
    <div class="backdropMenu" on:click={toggleMenu} />
    <img src="close.svg" alt="menu" class="menu" on:click={toggleMenu} />
    <div class="mobileMenu">
      {#if lang}
        <a href={`${lang}/about-us`}>{headerJson?.aboutUs || "About Us"}</a>
        <a href={`${lang}/our-work`}>{headerJson?.ourWork || "Our Work"}</a>
        <a href={`${lang}/press`}>{headerJson?.press || "Press"}</a>
        <a href={`${lang}/join-us`}>{headerJson?.joinUs || "Join Us"}</a>
        <a href={`${lang}/blog`}>{headerJson?.blog || "Blog"}</a>
      {:else}
        <a href="about-us">{headerJson?.aboutUs || "About Us"}</a>
        <a href="our-work">{headerJson?.ourWork || "Our Work"}</a>
        <a href="press">{headerJson?.press || "Press"}</a>
        <a href="join-us">{headerJson?.joinUs || "Join Us"}</a>
        <a href="/en/blog">{headerJson?.blog || "Blog"}</a>
      {/if}
    </div>
  </span>
{/if}

<style>
  .menuWrapper .menu {
    z-index: 1;
    top: -42px;
    right: 24px;
  }
  .mobileMenu {
    font-size: 2em;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    z-index: 1;
  }
  .mobileMenu a {
    display: block;
    margin-bottom: 25px;
  }
  .backdropMenu {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    z-index: 1;
  }
  .menu {
    position: relative;
    top: 7px;
    right: 15px;
    height: 25px;
    float: right;
    display: none;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    .menu {
      display: inline-block;
    }
    .nav {
      display: none;
    }
  }
  header {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    /* background-color: #eee; */
    line-height: 36px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    max-width: 56em;
    margin: 0 auto;
    backdrop-filter: saturate(180%) blur(7px);
    -webkit-backdrop-filter: saturate(180%) blur(7px);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0 0 15px 15px;
    z-index: 1;
  }
  header span {
    vertical-align: middle;
  }
  .logo {
    font-size: 20pt;
    font-weight: bold;
  }
  .nav {
    float: right;
    height: 20pt;
  }

  a {
    text-decoration: none;
    margin-right: 20px;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
