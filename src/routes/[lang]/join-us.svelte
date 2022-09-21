<script context="module">
  export async function preload(page) {
    const { lang } = page.params;

    if (lang) {
      const headerContent = await this.fetch(`/lang/${lang}/header.json`);
      const mainContent = await this.fetch(`/lang/${lang}/joinUs.json`);
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
  export let lang, headerJson, mainJson, footerJson;

  const performApplyToJobAction = (el) => {
    const jobTitle = el.target.parentElement.querySelector("h2").innerText;
    const anchorElement = document.createElement("a");
    anchorElement.href = `mailto:caruxell@gmail.com?subject=${jobTitle} - job application`;
    anchorElement.click();
  };
</script>

<svelte:head>
  <title>{mainJson?.joinUs} &bullet; Caruxell</title>
  <meta property="og:title" content={mainJson?.joinUs} />
  <meta property="og:site_name" content="Caruxell" />
  <meta property="og:url" content="https://caruxell.com" />
  <meta
    property="og:description"
    content={"Looking for a job? See what posts we have available."}
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://caruxell.com/img/logo.png" />
  <link
    rel="alternate"
    href="https://www.caruxell.com/en/join-us"
    hreflang="en"
  />
  <link
    rel="alternate"
    href="https://www.caruxell.com/ro/join-us"
    hreflang="ro"
  />
  <meta
    name="description"
    content="Looking for a job? See what posts we have available."
  />
</svelte:head>

<Header {lang} {headerJson} />

<div class="wrapper">
  <h1>{mainJson?.joinUs}</h1>
  <div class="job">
    <h2>[DEV] Site Reliability Engineer (SRE)</h2>
    <div class="details">
      If you are excited to solve complex problems of software reliability and
      scalability, implement complex systems, then you might be the perfect
      candidate for this job! <br />
      Here's what we are looking for in our ideal candidate:
      <ul>
        <li>Strong understanding of complex data structures and algorithms</li>
        <li>
          Very good communication and writing skills (english and romanian)
        </li>
        <li>
          At least 5 years of experience in scaling systems, database
          management, load balancing
        </li>
        <li>
          At least 5 years of experience with at least one of the following:
          NodeJS, Golang, C#, C++
        </li>
        <li>
          At least 5 years of experience with game engines like UnrealEngine /
          Unity
        </li>
        <li>Deep knowledge and understanding of security principles</li>
        <li>
          Ability to work in a team of likeminded people, and contribute with
          solutions and ideas to solve complex technical problems
        </li>
        <li>
          At least 5 years of experience in animations and web based graphical
          interaction (webGL, SVG animation, WebAssembly, Emscripten)
        </li>
        <li>experience with Unix/Linux operating systems</li>
      </ul>
      Our preferred candidate will also have:
      <ul>
        <li>
          Proven experience with the above mentioned technologies (portfolio)
        </li>
        <li>
          Some basic experience in working with 3D modeling software &
          animations (Blender, Cinema4D)
        </li>
        <li>
          Knowledge of game development is highly appreciated, no matter of the
          game engine
        </li>
        <li>
          has used WebAssembly, Emscripten, WebVR, WebAR, WebGL in his projects
        </li>
        <li>
          has used data visualisation frameworks/libraries and animation
          libraries like three.js, animejs, greensock
        </li>
        <li>
          Bachelor's degree, Master's degree, or PhD in Computer Science or a
          related technical field
        </li>
      </ul>
      You will get:
      <ul>
        <li>stock options</li>
        <li>competitive salary</li>
        <!-- <li>work from home days</li> -->
        <li>industry leading private health insurance</li>
        <li>gym membership pay off</li>
        <li>free coffee & fruits on site</li>
      </ul>
    </div>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[DEV] DevOps Engineer</h2>
    <div class="details">
      Want to be a system engineer at Caruxell?<br />Here's what we're looking
      for:
      <ul>
        <li>
          Strong understanding and experience with cloud technologies (GCP, AWS,
          Azure, etc)
        </li>
        <li>
          Knowledge of system scalability and how to create custom CI/CD
          pipelines
        </li>
        <li>
          Very good communication and writing skills (english and romanian)
        </li>
        <li>Strong security principles knowledge</li>
      </ul>
      Our ideal candidate
      <ul>
        <li>
          has worked before with Docker or other containerization technologies
        </li>
        <li>
          has worked before with Kubernetes or other container orchestration
          technologies
        </li>
        <li>
          has built scalable deployment pipelines before for real time
          applications
        </li>
        <li>is performance obsessed</li>
        <li>proposes cost-effective deployment and scalability solutions</li>
      </ul>
      You will get:
      <ul>
        <li>stock options</li>
        <li>competitive salary</li>
        <!-- <li>work from home days</li> -->
        <li>industry leading private health insurance</li>
        <li>gym membership pay off</li>
        <li>free coffee & fruits on site</li>
      </ul>
    </div>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[DEV] Full-Stack Developer</h2>
    <div class="details">
      You know how to take care of both front-end and back-end?<br />Here's what
      we're looking for in our next full-stack developer:
      <ul>
        <li>At least 5 years experience of full stack development</li>
        <li>
          Knowledge of javascript based tech stacks (we use Svelte), but
          ReactJS/AngularJS developers can apply too
        </li>
        <li>basic Docker knowledge</li>
        <li>ability to work in a team</li>
        <li>
          experience with SQL based databases like PostgreSQL, and noSQL
          databases like MongoDB, Redis, Memcached
        </li>
        <li>performance improvement & optimization knowledge</li>
      </ul>
      Our ideal candidate
      <ul>
        <li>has worked with Svelte / Sapper on various projects</li>
        <li>has used SocketIO, Websockets, WebRTC before</li>
        <li>has used WebAssembly, Emscripten, WebVR, WebAR, WebGL</li>
        <li>is performance obsessed</li>
        <li>proposes cost-effective deployment and scalability solutions</li>
      </ul>
      You will get:
      <ul>
        <li>stock options</li>
        <li>competitive salary</li>
        <!-- <li>work from home days</li> -->
        <li>industry leading private health insurance</li>
        <li>gym membership pay off</li>
        <li>free coffee & fruits on site</li>
      </ul>
    </div>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[DEV] Front-End Developer</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[DEV] Back-End Developer</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[DEV] Development Manager</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[DEV] Animation & Motion Picture Designer</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[DEV] Animation Specialist</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[MKT] Marketing Specialist</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[MKT] Online Marketing Specialist</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[MKT] Copywriter</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[MKT] Chief Marketing Officer (CMO)</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[ACT] Account Manager</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[ACT] Senior Accountant</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[FIN] Finance Manager</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[FIN] Chief Financial Officer (CFO)</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[HR] Human Resources Assistant</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
  <div class="job">
    <h2>[HR] Human Resources Manager</h2>
    <button on:click={performApplyToJobAction}>{mainJson?.applyNow}</button>
  </div>
</div>
<Footer {lang} {footerJson} />
<CookieBanner {lang} />

<style>
  button {
    appearance: none;
    -webkit-appearance: none;
    background: black;
    color: white;
    font-weight: bold;
    padding: 15px 25px;
    border: 0;
    border-radius: 8px;
    font-size: 14pt;
    cursor: pointer;
  }
  .wrapper {
    padding: 30px;
  }
  h1 {
    padding: 25px 0;
  }
  h2 {
    font-weight: bold;
  }
  .job {
    padding: 35px;
  }
</style>
