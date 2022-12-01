<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let userEmail = "Loading...";
  let userPhoto = undefined;

  function setProfileEmail(email) {
    userEmail = email;
  }
  function setProfilePhoto(photo) {
    userPhoto = photo;
  }
  onMount(() => {
    google.script.run.withSuccessHandler(setProfileEmail).getUserEmail();
    google.script.run.withSuccessHandler(setProfilePhoto).getUserPhoto();
  });

  google.script.history.setChangeHandler(function (e) {
    let locationHash = e.location.hash;
    if (locationHash.length > 0) {
      google.script.history.push({}, "", locationHash);
    } else {
      google.script.history.push({}, "", "/");
    }
  });
  function setURL(locationHash) {
    if (locationHash.length > 0) {
      google.script.history.push({}, "", locationHash);
    } else {
      google.script.history.push({}, "", "/");
    }
  }
</script>

<nav>
  <div class="relative flex items-center justify-between h-16 bg-base-200">
    <div class="justify-self-center basis-4/6">
      <ul class="menu menu-horizontal">
        <li>
          <a
            href="#/home/"
            class="ml-2 inline-flex items-center justify-center h-12 px-6 font-medium transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
            on:click={() => setURL("/home")}>Home</a
          >
        </li>
        <li>
          <a
            href="#/about/"
            class="ml-2 inline-flex items-center justify-center h-12 px-6 font-medium  transition duration-200 rounded shadow-md bg-deep-blue-accent-400 hover:bg-deep-blue-accent-700 focus:shadow-outline focus:outline-none"
            on:click={() => setURL("/about")}>About</a
          >
        </li>
      </ul>
    </div>
    <div class="justify-end flex items-center">
      <div
        in:fade={{ duration: 1000 }}
        class="badge badge-lg badge-primary badge-outline"
      >
        {userEmail ? userEmail.slice(0, userEmail.indexOf("@")) : "Loading.."}
      </div>
      <div class="avatar px-2">
        <div class="w-12 rounded-xl ">
          {#if userPhoto !== undefined}
            <img
              in:fade={{ duration: 1000 }}
              src="data:image/jpeg;base64,{userPhoto}"
              alt="avatar"
            />
          {:else}
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
