<template>
    <div class="level ">
        <div class="level-left ">
        <h1 class="title is-centered">Locaciones</h1> 
        </div>
        <div class="level-right">
            <router-link :to="{ name: 'locations-create'}"  class="button is-link is-rounded is-outlined">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span> 
            <span>Agregar </span></router-link>
            
        </div>
    </div>
    
    <div class="">
        <table class="table is-hoverable is-fullwidth ">
            <tbody>
                <tr v-for="location in locations" :key="location.id">
                        <td width="5%"></td>
                        <td><span class="is-size-5"> <router-link :to="'/locaciones/'+location.id">  {{location.name}}</router-link></span>  </td>
                        
                        
                </tr>
            </tbody>
        </table>
                        
    </div>
   
</template>
<script>

import LocationDataService from "../../services/LocationDataService"


export default {
  name:"locations-list",
  data: () =>({
      locations : [],
      currentLocation:{},
      currentIndex: -1,
      name : ""

  }),
  mounted() {
      
       this.retrieveLocations();
    
  },
  methods: {
      retrieveLocations(){
        LocationDataService.getAll()
        .then( response => {
            this.locations = response.data.data;
        })
        .catch(e => {
            console.log(e.response);
            alert(e.response.data.error.description);
        })
      },
      refreshList(){
          this.retrieveLocations();
          this.currentLocation = null;
          this.currentIndex = -1;
      },
      setActiveLocation(location, index){
          this.currentLocation = location;
          this.currentIndex = location? index : -1;
      },

      create : function(){},
      delete : function()
      {
          
      }
  }
}
</script>
