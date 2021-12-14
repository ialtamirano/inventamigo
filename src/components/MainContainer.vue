<template>
    
    <div class="container " >
        <NavigationHeader></NavigationHeader>
        <div class="columns">
            <div class="column is-12">              
              <div class="box content">
                 <router-view></router-view>
              </div>
            </div>
           
        </div>
    </div>
</template>
<script>
//import SearchBar from './SearchBar.vue'
import NavigationHeader from '../components/NavigationHeader.vue'


export default {
  name: 'MainContainer',
  components: {
     NavigationHeader,
   //SearchBar
  }
}
</script>


