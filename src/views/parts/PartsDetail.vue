<template>
  <div class="level ">
    <div class="level-left">
            <router-link :to="{ name: 'parts-list'}"  class="button is-primary is-rounded is-outlined">
             <span class="icon">
             
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>Back</span>
              
              </router-link>

        </div>        
  </div>
  <div>
    <h1 class="title is-centered"> Numeros de parte</h1> 
  </div> 
  <div  v-if="currentPart" >
    
    <form class="">
      <div class="field">
        <label class="label" for="code">Codigo</label>
        <input type="text" class="input" id="code"
          v-model="currentPart.code"
        />
      </div>
        <div class="field">
        <label class="label" for="name">Nombre</label>
        <input type="text" class="input" id="name"
          v-model="currentPart.name"
        />
      </div>
      <div class="field">
        <label  class="label" for="description">Descripci&oacute;n</label>
        <input type="text" class="input" id="description"
          v-model="currentPart.description"
        />
      </div>

    

       <div class="field is-grouped">
          <p class="control">
              <button type="submit" class="button is-success"
                @click="updatePart"
              >
                Update
              </button>
          </p>
          <p class="control ">
              <button class="button is-light is-right mr-2"
                @click="deletePart">
                <i class="fas fa-trash"></i>
              </button>
          </p>
       </div>
    </form>

    <p>{{ message }}</p>
  </div>

  <div class="box" v-else>
    <br />
    <p>Please click on a Part...</p>
  </div>
</template>

<script>
import PartDataService from "../../services/PartDataService";

export default {
  name: "edit-part",
  data() {
    return {
      currentPart: null,
      message: ''
    };
  },
  methods: {
    getPart(id) {
      PartDataService.get(id)
        .then(response => {
          this.currentPart = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePart() {
      let self = this;
      event.preventDefault();

      PartDataService.update(this.currentPart.id, this.currentPart)
        .then(response => {
          
          console.log(response.data);
          
          this.message = 'The part was updated successfully!';
          self.$router.push({name:'parts-list'});
         
        })
        .catch(e => {
          console.log(e);
           alert(e.response.data.error.description);
        });
    },
    
    deletePart() {
      let self = this;
      PartDataService.delete(this.currentPart.id)
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
    this.getPart(this.$route.params.id);
    
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>