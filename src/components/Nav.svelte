<script>
  import {Link, useLocation} from 'svelte-navigator'
  const location = useLocation()
</script>

<div class="flex space-x-4">
  <Link class="{$location.pathname === '/'? 'underline' : ''}" to="/">Add Post</Link>
  <Link class="{$location.pathname === '/posts'? 'underline' : ''}" to="/posts">Posts</Link>
</div>