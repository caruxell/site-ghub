<script>
  import { onMount } from "svelte";

  export let slides;

  let activeIdx = 0;

  onMount(() => {
    window.carousel = setInterval(() => {
        if(slides.length > ++activeIdx){
            
        }
    }, 2000);
  });
</script>

<style>
  .s {
    border-radius: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: #eee;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .f {
    background-color: rgba(0, 0, 0, 0.6);
  }
  #selector {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
  .i {
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 300px;
    width: 100%;
  }
</style>

<div id="slider">
  {#each slides as slide}
    <div class="i" style={`background-image: url(${slide.img})`} />
  {/each}
  <div id="selector">
    {#each slides as slide, i}
      <div class={`s ${i === activeIdx ? 'f' : null}`} />
    {/each}
  </div>
</div>
