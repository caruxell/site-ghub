<script>
  import { onMount } from "svelte";

  let searchQuery;

  onMount(function () {
    const { location } = document;
    searchQuery = decodeURI(location.search.substring(3, location.search.length));
    if (location && searchQuery) {
        // perform fetch for the searchQuery
    }
  });
</script>

<style>
  input[type="search"] {
    appearance: none;
    border-width: 0;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 20pt;
    background-color: #eee;
    border-width: 2px;
    border-style: solid;
    border-color: #eee;
    position: relative;
    margin: 0 auto;
    transition: all .3s ease-in-out;
  }
  input[type="search"]:focus{
    outline: none;
    border-color: lightblue;
  }
  @media(max-width: 400px){
      input[type="search"]{
          width: 80%;
          font-size: 14pt;
      }
  }
</style>

<svelte:head>
  <title>Blog Search - Caruxell</title>
  <meta
    name="description"
    content="Search through the articles written on the Caruxell Blog." />
</svelte:head>

<h1>Blog Search</h1>
<center><input type="search" aria-label="Search" value={searchQuery} /></center>
