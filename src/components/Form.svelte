<script>
  export let addPost
  let author = '';
  let post = '';

  function sendAddPost(){
    addPost(author, post)
    author = ''
    post = ''
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
  <button on:click="{sendAddPost}" class="btn btn-primary mt-4">Submit</button> 
</div> 