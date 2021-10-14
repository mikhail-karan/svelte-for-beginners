<script>
  import Post from './components/Post.svelte'
  import Form from './components/Form.svelte'
  import Nav from './components/Nav.svelte'
  import {Router, Route} from 'svelte-navigator'
  import About from './components/About.svelte'
  import { posts, user } from './stores'

</script>

<Router>
  <main class="flex flex-col justify-center items-center h-screen space-y-4">
    <h1>{$user.name}</h1>
    <Nav />
    <Route>
      <Form />
    </Route>
    <Route path="posts">
      <div class="overflow-auto space-y-4 p-4">
        {#each $posts.reverse() as post}
        <Post {...post} />
        {/each}
      </div>
    </Route>
    <Route path="about">
      <About />
    </Route>
  </main>
</Router>

<style>
</style>
