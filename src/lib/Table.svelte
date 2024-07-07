<script lang="ts">
    export let names
    let action = null
    
    function closeModal(){
      console.log("hgisahf");
      let modal = document.querySelector('#updateForm');
      modal?.classList.add('hidden');
    }

    function updateForm(user){
      let modal = document.querySelector('#updateForm');
      modal?.classList.remove('hidden');
      let parentDiv = document.querySelector("#UpdateForm");
      let form = 
      `<form method="POST" action="/profiles?/update">
        <input type="hidden" name="id" id="id" value=${user.id}>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
            >
            Name
            </label>
            <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            placeholder="Enter name"
            name="name"
            value=${user.name}
            />
          </div>
          <div class="w-full md:w-full px-3 py-2 mb-6 md:mb-0">
            <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
            >
            Email
            </label>
            <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
            value=${user.email}
            />
          </div>
          <div>
            <button
            type="submit"
            class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded "
            >
            Save
            </button>
          </div>
        </div>
      </form>`;
      modal.innerHTML += form;
    };
</script>

<div
	class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
	<div class="flex items-center justify-between mb-4">
		<div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center space-x-4">
					<div class="flex">
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>                        
					</div>
				</div>
        <!-- todo: inmplement update functionality and submit attendance sheet -->
          <form method="POST" action="/profiles?/delete">
            <input type="hidden" name="id" id="id" value={user.id}>
            <button type="submit">
                <img class="w-4 float-right" src="./trash-can.svg" alt="delete"/>
            </button>
            <button 
            type="button" 
            data-twe-toggle="modal"
            on:click={()=> updateForm(user)}
            data-twe-target="#exampleModal"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            >
              <img class="w-4 float-right ml-2" src="./pencil2.svg" alt="update"/>
            </button>
          </form>
      </div>
    {/each}
  </div>
  <div 
  data-twe-modal-init
  id="updateForm" 
  class="fixed border-1 rounded broder-black left-0 top-0 pt-8 px-8 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-white"
  tabindex="-1"
  aria-hidden="true"
  >
    <!-- <div
    id="UpdateForm"
    data-twe-modal-dialog-ref
    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
    >
  
    </div> -->
  </div>
</div>
