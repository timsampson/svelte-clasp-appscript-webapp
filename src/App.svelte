<script>
  import Router from "svelte-spa-router";
  import { push } from "svelte-spa-router";
  import NotFound from "./routes/NotFound.svelte";
  import Navigation from "./components/Shared/Navigation.svelte";
  import About from "./routes/About.svelte";
  import Home from "./routes/Home.svelte";

  google.script.url.getLocation(function (location) {
    if (location.hash.length > 0) {
      push(location.hash);
    } else {
      push("/");
    }
  });
  const routes = {
    "/": Home,
    "/home": Home,
    "/about": About,
    "*": NotFound,
  };
</script>

<body>
  <Navigation />
  <main class="m-4">
    <Router {routes} />
  </main>
</body>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
