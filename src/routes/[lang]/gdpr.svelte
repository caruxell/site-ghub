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
  export let lang,
    headerJson,
    //  mainJson,
    footerJson;

  let canonicalUrl;
  onMount(() => {
    canonicalUrl = [
      window.location.origin.replace("www.", ""),
      window.location.pathname,
    ].join("");
  });
</script>

<svelte:head>
  <title>GDPR &bullet; Caruxell</title>
  <meta
    name="description"
    content="The General Data Protection Regulation compliance page for Caruxell SRL."
  />
  <meta property="og:title" content="GDPR" />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta
    property="og:description"
    content="The General Data Protection Regulation compliance page for Caruxell SRL."
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link rel="alternate" href="https://www.caruxell.com/en/gdpr" hreflang="en" />
  <link rel="alternate" href="https://www.caruxell.com/ro/gdpr" hreflang="ro" />
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Header {lang} {headerJson} />
<div class="wrapper">
  <h1>Privacy Policy for CARUXELL SOFTWARE SRL</h1>

  <p>
    At CARUXELL, accessible from https://caruxell.com, one of our main
    priorities is the privacy of our visitors. This Privacy Policy document
    contains types of information that is collected and recorded by CARUXELL and
    how we use it.
  </p>

  <p>
    If you have additional questions or require more information about our
    Privacy Policy, do not hesitate to contact us.
  </p>

  <h2>General Data Protection Regulation (GDPR)</h2>
  <p>We are a Data Controller of your information.</p>

  <p>
    CARUXELL SOFTWARE SRL legal basis for collecting and using the personal
    information described in this Privacy Policy depends on the Personal
    Information we collect and the specific context in which we collect the
    information:
  </p>
  <ul>
    <li>CARUXELL SOFTWARE SRL needs to perform a contract with you</li>
    <li>You have given CARUXELL SOFTWARE SRL permission to do so</li>
    <li>
      Processing your personal information is in CARUXELL SOFTWARE SRL
      legitimate interests
    </li>
    <li>CARUXELL SOFTWARE SRL needs to comply with the law</li>
  </ul>

  <p>
    CARUXELL SOFTWARE SRL will retain your personal information only for as long
    as is necessary for the purposes set out in this Privacy Policy. We will
    retain and use your information to the extent necessary to comply with our
    legal obligations, resolve disputes, and enforce our policies.
  </p>

  <p>
    If you are a resident of the European Economic Area (EEA), you have certain
    data protection rights. If you wish to be informed what Personal Information
    we hold about you and if you want it to be removed from our systems, please
    contact us.
  </p>
  <p>
    In certain circumstances, you have the following data protection rights:
  </p>
  <ul>
    <li>
      The right to access, update or to delete the information we have on you.
    </li>
    <li>The right of rectification.</li>
    <li>The right to object.</li>
    <li>The right of restriction.</li>
    <li>The right to data portability</li>
    <li>The right to withdraw consent</li>
  </ul>

  <h2>Log Files</h2>

  <p>
    CARUXELL follows a standard procedure of using log files. These files log
    visitors when they visit websites. All hosting companies do this and a part
    of hosting services' analytics. The information collected by log files
    include internet protocol (IP) addresses, browser type, Internet Service
    Provider (ISP), date and time stamp, referring/exit pages, and possibly the
    number of clicks. These are not linked to any information that is personally
    identifiable. The purpose of the information is for analyzing trends,
    administering the site, tracking users' movement on the website, and
    gathering demographic information.
  </p>

  <h2>Cookies and Web Beacons</h2>

  <p>
    Like any other website, CARUXELL uses 'cookies'. These cookies are used to
    store information including visitors' preferences, and the pages on the
    website that the visitor accessed or visited. The information is used to
    optimize the users' experience by customizing our web page content based on
    visitors' browser type and/or other information.
  </p>

  <p>
    For more general information on cookies, please read <a
      href="https://www.privacypolicyonline.com/what-are-cookies/"
      >"What Are Cookies"</a
    >.
  </p>

  <h2>Google DoubleClick DART Cookie</h2>

  <p>
    Google is one of a third-party vendor on our site. It also uses cookies,
    known as DART cookies, to serve ads to our site visitors based upon their
    visit to www.website.com and other sites on the internet. However, visitors
    may choose to decline the use of DART cookies by visiting the Google ad and
    content network Privacy Policy at the following URL ??? <a
      href="https://policies.google.com/technologies/ads"
      >https://policies.google.com/technologies/ads</a
    >
  </p>

  <h2>Our Advertising Partners</h2>

  <p>
    Some of advertisers on our site may use cookies and web beacons. Our
    advertising partners are listed below. Each of our advertising partners has
    their own Privacy Policy for their policies on user data. For easier access,
    we hyperlinked to their Privacy Policies below.
  </p>

  <ul>
    <li>
      <p>Google</p>
      <p>
        <a href="https://policies.google.com/technologies/ads"
          >https://policies.google.com/technologies/ads</a
        >
      </p>
    </li>
  </ul>

  <h2>Privacy Policies</h2>

  <p>
    You may consult this list to find the Privacy Policy for each of the
    advertising partners of CARUXELL.
  </p>

  <p>
    Third-party ad servers or ad networks uses technologies like cookies,
    JavaScript, or Web Beacons that are used in their respective advertisements
    and links that appear on CARUXELL, which are sent directly to users'
    browser. They automatically receive your IP address when this occurs. These
    technologies are used to measure the effectiveness of their advertising
    campaigns and/or to personalize the advertising content that you see on
    websites that you visit.
  </p>

  <p>
    Note that CARUXELL has no access to or control over these cookies that are
    used by third-party advertisers.
  </p>

  <h2>Third Party Privacy Policies</h2>

  <p>
    CARUXELL's Privacy Policy does not apply to other advertisers or websites.
    Thus, we are advising you to consult the respective Privacy Policies of
    these third-party ad servers for more detailed information. It may include
    their practices and instructions about how to opt-out of certain options.
  </p>

  <p>
    You can choose to disable cookies through your individual browser options.
    To know more detailed information about cookie management with specific web
    browsers, it can be found at the browsers' respective websites.
  </p>

  <h2>Children's Information</h2>

  <p>
    Another part of our priority is adding protection for children while using
    the internet. We encourage parents and guardians to observe, participate in,
    and/or monitor and guide their online activity.
  </p>

  <p>
    CARUXELL does not knowingly collect any Personal Identifiable Information
    from children under the age of 13. If you think that your child provided
    this kind of information on our website, we strongly encourage you to
    contact us immediately and we will do our best efforts to promptly remove
    such information from our records.
  </p>

  <h2>Online Privacy Policy Only</h2>

  <p>
    Our Privacy Policy applies only to our online activities and is valid for
    visitors to our website with regards to the information that they shared
    and/or collect in CARUXELL. This policy is not applicable to any information
    collected offline or via channels other than this website.
  </p>

  <h2>Consent</h2>

  <p>
    By using our website, you hereby consent to our Privacy Policy and agree to
    its terms.
  </p>
</div>
<Footer {lang} {footerJson} />
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
  /* section {
    padding: 35px;
  } */
</style>
