<template>
<div class="box">
    <div class="level ">
        <div class="level-left">
           <h1 class="title is-4 mb-2 "><router-link :to="{ name: 'parts-list'}" class="" ><span class="has-text-primary ">Numeros de parte</span></router-link> / Edici&oacute;n</h1>
    
        </div>
        <div class="level-right">
            <button  class="button is-primary" @click="editFields">
              <span class="icon">
                <i class="fas fa-tools"> </i>
              </span>
              <span>
                Personalizar
              </span>
            </button>
                
        </div>        
    </div>

  <div  v-if="currentPart" >
   
     <form class="">
      <div class="field">
        <label class="label" for="code">C&oacute;digo / Numero de parte</label>
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
      <h4>Campos perzonalizados</h4>

       <TextField
        v-for="post in inputs"
        :key="post.id"
        :title="post.title"
      ></TextField>

      <component :is="TextField"></component>

    

       <div class="field is-grouped">
          <p class="control">
              <button type="submit" class="button is-success"
                @click="updatePart"
              >
                Guardar cambios
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
  </div>
</template>

<script>

import PartDataService from "../../services/PartDataService";
import TextField from "../../components/InputControl";



export default {
  components: {
    TextField
  },
  name: "edit-part",
  data() {
    return {
      currentPart: null,
      message: '',
      inputs: [
        { id: 1, title: {label :'My journey with Vue', placeholder:'xxxxxx'} },
        { id: 2, title: {label:'Blogging with Vue', value:"aasdadsd"} },
        { id: 3, title: {label:'Why Vue is so fun'} }
      ]
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
      let result = confirm("Esta seguro de eliminar este numero de parte?");
      event.preventDefault();
      if(result){
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
        else {
          return;
        }
      },


      
  },
  mounted() {
    this.message = '';
    this.getPart(this.$route.params.id);
    console.log(TextField)
  }
  
    
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>