<template>
  <div class="about">
    <div class="d-flex justify-content-center" v-if="showSpinner">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div> 
    </div>
    <div class="container" v-else>
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <img src="../assets/mylogo.png" style="width: 800px; height:400px" class="col-sm-4">
            <div class="col-sm-8">
              <h1 v-text="jsonData.name" style="font-weight: bold"></h1>
              <h3 v-text="jsonData.description"></h3>
              <br>
              <h3 v-text="jsonData.project"></h3>
              <h5 v-text="jsonData.projectdescription"></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <v-list-item href="https://google.com" target="_blank">Google</v-list-item> -->
  </div>  

</template>
<script>
import axios from 'axios';

export default {
  name:'about',
  data(){
    return {
      showSpinner: true,
      jsonData : null
    }
  },
  components: {
  },
  mounted(){
    let url = 'http://localhost:8080/data/about.json';
    axios.get(url)
    .then(res => {
      // console.log(res.data);
      this.jsonData = res.data;
      setTimeout(() => {
        this.showSpinner = false;
      }, 2000 );
    })
    .catch(err => {
      console.log(err)
    } )
  }
}
</script>
