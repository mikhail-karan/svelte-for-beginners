<script>
  let number = 1;

  function add5(){
    number += 5;
  }

  $: multiple = number*2
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-4">
  <p>The number is: {number}</p>
  <button on:click="{add5}" class="btn btn-primary">Add five</button>
  <p>The number multipled by 2 is {multiple}</p>
  {#if multiple < 50}
  <div class="alert alert-success">
    <div class="flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">          
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>                
      </svg> 
      <label>Numbers look good!</label>
    </div>
  </div>
  {:else}
  <div class="alert alert-error">
    <div class="flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">          
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>                
      </svg> 
      <label>Numbers are too high!</label>
    </div>
  </div>
  {/if}
</main>

<style>
</style>
