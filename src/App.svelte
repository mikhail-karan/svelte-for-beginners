<script>
  let active = 1;

  function changeActive(activeNum){
    active = activeNum
    console.log(activeNum)
  }
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-4">
  <div class="btn-group">
    <button
      on:click={() => changeActive(1)}
      class="btn btn-lg {active === 1 ? 'btn-active' : ''}">Large</button
    >
    <button
      on:click={() => changeActive(2)}
      class="btn btn-lg {active === 2 ? 'btn-active' : ''}">Large</button
    >
    <button
      on:click={() => changeActive(3)}
      class="btn btn-lg {active === 3 ? 'btn-active' : ''}">Large</button
    >
  </div>
</main>

<style>
</style>
