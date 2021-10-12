<script>
  import data from './data.json'

  let author = '';
  let date = '';
  let post = '';

  let posts = data.data

  function addPost(){
    const _post = {
      id: posts.length +1,
      author: author,
      date: date,
      post: post
    }

    posts.push(_post)
    posts = posts

    author = ""
    post = ""
    date = ""
  }
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-4">

  <h1>Add post</h1>
  <div class="form-control">
    <label for="author" class="label">
      <span class="label-text">Author</span>
    </label> 
    <input bind:value="{author}" name="author" type="text" placeholder="username" class="input input-primary input-bordered">
    <label for="date" class="label">
      <span class="label-text">Date</span>
    </label> 
    <input bind:value="{date}" name="date" type="date" placeholder="username" class="input input-primary input-bordered">
    <label for="post" class="label">
      <span class="label-text">Post</span>
    </label> 
    <textarea bind:value="{post}" name="post" class="textarea h-24 textarea-bordered textarea-primary" placeholder="Bio"></textarea>
    <button on:click="{addPost}" class="btn btn-primary mt-4">Submit</button> 
  </div> 

  <div class="overflow-auto space-y-4 p-4">
    {#each posts.reverse() as post}
    <div class="card bordered w-80 bg-primary">
      <div class="card-body">
        <h2 class="card-title">{post.author}</h2>
        <p>{post.date}</p>
        <p>{post.post}</p>
      </div>
    </div>
    {/each}
  </div>

</main>

<style>
</style>
