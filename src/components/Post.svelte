<script>
  import {onMount, onDestroy} from "svelte"
  export let author
  export let post
  export let id
  import {posts} from '../stores'

  let timeOnScreen = 0
  let timeInterval = null

  onMount(() => {
    timeInterval = setInterval(() => {
      ++timeOnScreen
      console.log(`Interval updated for post id ${id}`)
    }, 1000)
  })

  onDestroy(() => {
    clearInterval(timeInterval)
  })

  function deletePost(){
    const deleteIndex = $posts.findIndex(post => post.id === id)
    $posts.splice(deleteIndex, 1)
    $posts = $posts
  }

</script>

<div class="card bordered w-80 bg-primary">
  <div on:click="{deletePost}" class="absolute right-0 pr-2 text-error text-2xl">
    x
  </div>
  <div class="absolute left-0 pl-2 text-white">
    {timeOnScreen}
  </div>
  <div class="card-body">
    <h2 class="card-title">{author}</h2>
    <p>{post}</p>
  </div>
</div>