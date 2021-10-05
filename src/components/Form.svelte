<script>
  import {posts} from '../stores'
  import {navigate} from 'svelte-navigator'
  let author = '';
  let post = '';

  let arrayInc = 3

  function addPost(){
    const _post = {
      id: ++arrayInc,
      author: author,
      post: post
    }

    $posts.push(_post)
    $posts = $posts
    author = ''
    post = ''
    navigate('/posts')
  }
</script>

<h1>Add post</h1>
<div class="form-control">
  <label for="author" class="label">
    <span class="label-text">Author</span>
  </label> 
  <input bind:value="{author}" name="author" type="text" placeholder="username" class="input input-primary input-bordered">
  <label for="post" class="label">
    <span class="label-text">Post</span>
  </label> 
  <textarea bind:value="{post}" name="post" class="textarea h-24 textarea-bordered textarea-primary" placeholder="Bio"></textarea>
  <button on:click="{addPost}" class="btn btn-primary mt-4">Submit</button> 
</div> 