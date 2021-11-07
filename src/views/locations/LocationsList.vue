<template>
    <div class="level ">
        <div class="level-left ">
        <h1 class="title is-centered"><i class="fas fa-location-arrow"></i> Locaciones</h1> 
        </div>
        <div class="level-right">
            <router-link :to="{ name: 'locations-create'}"  class="button is-link is-rounded">+ Agregar </router-link>
            
        </div>
    </div>
     <router-view></router-view>
    <div class="card events-card">
        <table class="table is-hoverable is-fullwidth ">
            <tbody>
                <tr v-for="location in locations" :key="location.id">
                        <td width="5%"></td>
                        <td><span class="is-size-5"> <router-link to="/locaciones/1">  {{location.name}}</router-link></span>  </td>
                        <td class="level-right"><button class="button  is-white" href="#"> <i class="fas fa-trash"></i></button></td>
                </tr>
                    
                    
            </tbody>
        </table>
                        
    </div>
   
</template>
<script>
import axios from "axios";


export default {
  components: {
   
  },
  data: () =>({
      locations : []
  }),
  mounted() {
      
        axios.get("http://localhost:8080/locations/").then((result) => {
            this.locations = result.data.data;
        });
    
  }
}
</script>
