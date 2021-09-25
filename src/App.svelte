<script>
  let count = 1

  function increment(){
    count++
  }
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-4">
  {count}
  <button on:click="{increment}" class="btn btn-primary">primary</button> 
</main>

<style>
</style>
