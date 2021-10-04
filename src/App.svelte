<script>
  import data from './data.json'
  import Post from './components/Post.svelte'
  import Form from './components/Form.svelte'
  import Nav from './components/Nav.svelte'
  import {Router, Route, navigate} from 'svelte-navigator'

  let posts = data.data

  function addPost(author, post){
    const _post = {
      id: posts.length +1,
      author: author,
      post: post
    }

    posts.push(_post)
    posts = posts
    navigate('/posts')
  }
</script>

<Router>
  <main class="flex flex-col justify-center items-center h-screen space-y-4">
    <Nav />
    <Route>
      <Form addPost={addPost} />
    </Route>
    <Route path="posts">
      <div class="overflow-auto space-y-4 p-4">
        {#each posts.reverse() as post}
        <Post {...post} />
        {/each}
      </div>
    </Route>
  </main>
</Router>

<style>
</style>
