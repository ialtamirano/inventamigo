<template>
 <div class="level ">
    <div class="level-left">
            <router-link :to="{ name: 'locations-list'}"  class="button is-primary is-rounded is-outlined">
             <span class="icon">            
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>Back</span>
              
              </router-link>
        </div>        
  </div>
  <div>
    <h1 class="title is-centered"> Nueva Locaci&oacute;n</h1> 
  </div> 
      <form class="">
        <div class="field">
          <label class="label">Codigo</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g LOC 01" v-model="location.code" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Recepci&oacute;n de materiales" v-model="location.name" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Descripcion</label>
          <div class="control">
            <textarea class="input" type="text" placeholder="Descripcion" v-model="location.description"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-primary" @click="saveLocation">Guardar</button>
          </p>
      
        </div>
</form>
 
</template>
<script>

import LocationDataService from "../../services/LocationDataService"


export default {
  name:"add-location",
  data() {
    return {
      location : {
        id:null,
        name:"",
        description:"",
        deleted:false,
      },
      submitted: false
    }
  },
  methods: {
    saveLocation(){

      var data = {
        code: this.location.code,
        name : this.location.name,
        description: this.location.description,
        deleted: this.location.deleted
      };
      let self = this;
      event.preventDefault();
      LocationDataService.create(data)
      .then(response => {
          this.location.id = response.data.data.id;
          console.log(response.data);
          this.submitted = false;
          self.$router.push({ name: "locations-list", params: {} }).catch(console.log);
         
      })
      .catch(e=> {
        console.log(e);
        alert(e.response.data.error.description);
      })
    },
    newLocation(){
      this.submitted = false;
      this.location = {};
    }
  }
}
</script>
