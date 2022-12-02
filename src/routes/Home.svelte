<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<h1 class="mb-2 text-3xl font-bold underline font-serif">Welcome</h1>
<h2 class="my-2 ml-2 text-xl">Appscript Web App Template</h2>

<p class="ml-2 ">
  This is a starter template for a Google Appscript website using Svelte, Rollup
  2, TailwindCSS, Daisy UI and Svelte Spa Router for hash based routing.
</p>
<p class="ml-2">
  This may not be a stack for any sort of professional workload, but it takes
  free hosting as far as needed for an organization with less than 1000 users.
</p>
<h2 class="my-2 ml-2 text-xl">Links</h2>
<ul class="mb-2 ml-4 list-disc">
  <li class="ml-2">
    <a
      class="text-blue-500 no-underline hover:underline hover:text-blue-700"
      href="https://daisyui.com/"
      target="_blank"
      rel="noopener noreferrer">Daisy UI</a
    >
  </li>
  <li class="ml-2">
    <a
      class="text-blue-500 no-underline hover:underline hover:text-blue-700"
      href="https://developers.google.com/apps-script/guides/web/"
      target="_blank"
      rel="noopener noreferrer">Google Apps Script Web App</a
    >
  </li>
  <li class="ml-2">
    <a
      class="text-blue-500 no-underline hover:underline hover:text-blue-700"
      href="https://tailwindcss.com/"
      target="_blank"
      rel="noopener noreferrer">TailwindCSS</a
    >
  </li>
  <li class="ml-2">
    <a
      class="text-blue-500 no-underline hover:underline hover:text-blue-700"
      href="https://github.com/ItalyPaleAle/svelte-spa-router#readme/"
      target="_blank"
      rel="noopener noreferrer">Svelte Spa Router</a
    >
  </li>
  <li class="ml-2">
    <a
      class="text-blue-500 no-underline hover:underline hover:text-blue-700"
      href="https://svelte.dev/"
      target="_blank"
      rel="noopener noreferrer">Svelte</a
    >
  </li>
</ul>
<h2 class="my-2 ml-2 text-xl">Reactivity and the Class Directive</h2>
<button
  class="ml-8 btn btn-wide"
  class:btn-info={count <= 9}
  class:btn-secondary={count > 9 && count <= 16}
  class:btn-warning={count > 16 && count <= 20}
  class:btn-error={count > 20}
  on:click={handleClick}
>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
