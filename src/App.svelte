<script>
  let number = 1;

  function add5() {
    number += 5;
  }

  $: multiple = number*2
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-4">
  <p>The number is: {number}</p>
  <button on:click="{add5}" class="btn btn-primary">Add 5</button>
  <p>The number mutiplied by 2 is {multiple}</p>
</main>

<style>
</style>
