<script>
  export let form;
</script>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <form method="POST" action="?/deploy">
    <div class="flex flex-col flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-full px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="bountyf"
        >
          Bounty
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="bounty"
          type="number"
          placeholder="Enter Bounty amount"
          name="bounty"
        />
      </div>
      <div class="w-full md:w-full px-3 mb-6 md:mb-0 mt-4">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="square"
        >
          Enter the number whose square root is on bounty
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="square"
          type="number"
          placeholder="Enter the number"
          name="square"
        />
      </div>
      <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Email
            </label>
          </div> -->
      <button
        type="submit"
        class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded w-3/5"
      >
        Deploy bounty
      </button>
    </div>
  </form>
  {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">Bounty was deployed successfully : <a href="{form?.tx}">Transaction Link!</a></p>
  {/if}
</div>


<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <form method="POST" action="?/unlock">
    <div class="flex flex-col flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-full px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="root"
        >
          Enter root whose square is on bounty
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="root"
          type="number"
          placeholder="Enter Root answer"
          name="root"
        />
      </div>
      <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Email
            </label>
          </div> -->
      <button
        class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded w-3/5"
      >
        Unlock bounty
      </button>
    </div>
  </form>
  {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">Bounty was unlocked successfully : <a href="{form?.tx}">Transaction Link!</a></p>
  {/if}
</div>

