<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="../assets/mylogo.png" style="width:40px; height:30px;" alt=""></a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto col-lg-12">
      <li class="nav-item active col-lg-2">
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item col-lg-2">
        <!-- <a class="nav-link" href="#">Link</a> -->
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item col-lg-2">
        <!-- <a class="nav-link" href="#">Link</a> -->
        <router-link to="/api" class="nav-link">API Data</router-link>
      </li>
      <li class="nav-item col-lg-2">
        <!-- <a class="nav-link" href="#">Link</a> -->
        <router-link to="/enye" class="nav-link">About Enye</router-link>
      </li>
    </ul>
    
  </div>
</nav>
</template>

<script>
export default {
    name:'navbar'
}
</script> 