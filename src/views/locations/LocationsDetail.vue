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
    <h1 class="title is-centered"> Locaciones</h1> 
  </div> 
  <div  v-if="currentLocation" >
    
    <form class="">
      <div class="field">
        <label class="label" for="code">Codigo</label>
        <input type="text" class="input" id="code"
          v-model="currentLocation.code"
        />
      </div>
        <div class="field">
        <label class="label" for="name">Nombre</label>
        <input type="text" class="input" id="name"
          v-model="currentLocation.name"
        />
      </div>
      <div class="field">
        <label  class="label" for="description">Descripci&oacute;n</label>
        <input type="text" class="input" id="description"
          v-model="currentLocation.description"
        />
      </div>

    

       <div class="field is-grouped">
          <p class="control">
              <button type="submit" class="button is-success"
                @click="updateLocation"
              >
                Update
              </button>
          </p>
          <p class="control ">
              <button class="button is-light is-right mr-2"
                @click="deleteLocation">
                <i class="fas fa-trash"></i>
              </button>
          </p>
       </div>
    </form>

    <p>{{ message }}</p>
  </div>

  <div class="box" v-else>
    <br />
    <p>Please click on a Location...</p>
  </div>
</template>

<script>
import LocationDataService from "../../services/LocationDataService";

export default {
  name: "edit-location",
  data() {
    return {
      currentLocation: null,
      message: ''
    };
  },
  methods: {
    getLocation(id) {
      LocationDataService.get(id)
        .then(response => {
          this.currentLocation = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateLocation() {
      let self = this;
      event.preventDefault();

      LocationDataService.update(this.currentLocation.id, this.currentLocation)
        .then(response => {
          
          console.log(response.data);
          
          this.message = 'The location was updated successfully!';
          self.$router.push({name:'locations-list'});
         
        })
        .catch(e => {
          console.log(e);
           alert(e.response.data.error.description);
        });
    },
    
    deleteLocation() {
      let self = this;
      LocationDataService.delete(this.currentLocation.id)
        .then(response => {
          console.log(response.data);
          self.$router.go(-1);
        })
        .catch(e => {
          console.log(e);
           alert(e.response.data.error.description);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getLocation(this.$route.params.id);
    
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>