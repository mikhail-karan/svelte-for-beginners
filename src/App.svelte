<script>
  import data from './data.json'
  import Post from './components/Post.svelte'
  import Form from './components/Form.svelte'
  import Header from './components/Header.svelte'

  

  let posts = data.data

  function addPost(author, post){
    const _post = {
      id: posts.length +1,
      author: author,
      post: post
    }

    posts.push(_post)
    posts = posts
  }
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-4">
  <Header name="Mike" about="Frontend web developer with 7+ years of experience" />
  <Form addPost={addPost} />
  <div class="overflow-auto space-y-4 p-4">
    {#each posts.reverse() as post}
    <Post {...post} />
    {/each}
  </div>
</main>

<style>
</style>
