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
    <h1 class="title is-centered"> Nuevo Numero de parte</h1> 
  </div> 
      <form class="">
        <div class="field">
          <label class="label">Codigo</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g LOC 01" v-model="part.code" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Recepci&oacute;n de materiales" v-model="part.name" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Descripcion</label>
          <div class="control">
            <textarea class="input" type="text" placeholder="Descripcion" v-model="part.description"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-primary" @click="savePart">Guardar</button>
          </p>
      
        </div>
</form>
 
</template>
<script>

import PartDataService from "../../services/PartDataService"


export default {
  name:"add-part",
  data() {
    return {
      part : {
        id:null,
        name:"",
        description:"",
        deleted:false,
      },
      submitted: false
    }
  },
  methods: {
    savePart(){

      var data = {
        code: this.part.code,
        name : this.part.name,
        description: this.part.description,
        deleted: this.part.deleted
      };

      let self = this;
      event.preventDefault();
      PartDataService.create(data)
      .then(response => {
          this.part.id = response.data.data.id;
          console.log(response.data);
          this.submitted = false;
          self.$router.push({ name: "parts-list", params: {} }).catch(console.log);
         
      })
      .catch(e=> {
        console.log(e);
        alert(e.response.data.error.description);
      })
    },
    newPart(){
      this.submitted = false;
      this.part = {};
    }
  }
}
</script>
