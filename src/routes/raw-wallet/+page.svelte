<script lang="ts">
  import { PrivateKey } from "@bsv/sdk";

  let WIF:string
  let address:string

  function createKeys(){

    const privKey = PrivateKey.fromRandom();
    WIF = privKey.toWif();
    console.log("Private Key WIF format is ", WIF);
    address = privKey.toAddress();
    console.log("Your bitcoin address is ", address);
  }
</script>
  
<div
class="mt-10 pt-10 w-full max-w-4xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <div>
    <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Email
      </label>
      </div> -->
      <button
      class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded "
      on:click={createKeys}
      >
      Generate New Wallet Keys
    </button>
  </div>
  <div class="my-5 d-flex flex-wrap gap-5">
    {#if (WIF != undefined) && (address != undefined)}
      <p class="text-slate-400">Private Key WIF format is <span class="bg-yellow-300 text-blue-700">{WIF}</span></p>
      <p class="text-slate-400">Your Bitcoin Address is <span class="bg-yellow-300 text-blue-700">{address}</span></p>
    {:else}
      <p class="text-slate-400">Private Key WIF format is  -- </p>
      <p class="text-slate-400">Your Bitcoin Address is  -- </p>
    {/if}
  </div>
</div>