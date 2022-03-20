<template>
    <div class="container " >
        <NavigationHeader></NavigationHeader>
        <BoxContainer>
          <router-view></router-view>
       </BoxContainer>
    </div>
</template>
<script>
//import SearchBar from './SearchBar.vue'
import NavigationHeader from '../components/NavigationHeader.vue'
import BoxContainer from '../components/BoxContainer.vue'



export default {
  name: 'MainContainer',
  components: {
     NavigationHeader,
  BoxContainer
   //SearchBar
  }
}
</script>


