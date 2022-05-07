<template>
<div class="box">
    <div class="level ">
        <div class="level-left">
           <h1 class="title is-4 mb-2 "><router-link :to="{ name: 'customers-list'}" class="" ><span class="has-text-primary ">Clientes</span></router-link> / Perfil</h1>
    
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

  <div  v-if="currentCustomer" >

<!--Media tag -->
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{currentCustomer.name}}</strong> <small>{{currentCustomer.email}}</small> <small>31m</small>
        <br>
        Telefono:{{currentCustomer.email}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>


<div class="columns">
  <div class="column ">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>Contacto</h4>
          <address>
             <address>
                  <a href="mailto:{{currentCustomer.email}}">{{ currentCustomer.primary_contact}}</a>.<br>
                  Direcci&oacute;n:<br>
                  Example.com<br>
                   {{currentCustomer.address}}<br>
                  {{currentCustomer.city}},{{currentCustomer.state}} {{currentCustomer.country}}<br>
                  Codigo postal: {{currentCustomer.zip_code}}
                  </address>
            </address>
        </div>
      </div>
    </div>

  </div>
  <div class="column">Auto</div>
 
</div>
<div class="columns">
  <div class="column">
    <h4>Comentarios y Notas:</h4>
   
      <CommentBox id="CustomerComments"  entityName="customer" :entityId="currentCustomer.id" />   
  </div>
  <div class="column">

    <h4>Archivos:</h4>
      <FileBox id="CustomerFiles"  entityName="customer" :entityId="currentCustomer.id" />
  </div>
</div>



     <form class="">
      <div class="field">
        <label class="label" for="code">C&oacute;digo / Numero de cliente</label>
        <input type="text" class="input" id="code"
          v-model="currentCustomer.code"
        />
      </div>
        <div class="field">
        <label class="label" for="name">Nombre</label>
        <input type="text" class="input" id="name"
          v-model="currentCustomer.name"
        />
      </div>
      <div class="field">
        <label  class="label" for="description">Descripci&oacute;n</label>
        <input type="text" class="input" id="description"
          v-model="currentCustomer.description"
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
                @click="updateCustomer"
              >
                Guardar cambios
              </button>
          </p>
          <p class="control ">
              <button class="button is-light is-right mr-2"
                @click="deleteCustomer">
                <i class="fas fa-trash"></i>
              </button>
          </p>
       </div>


    </form>

  
    <p>{{ message }}</p>
  </div>

  <div class="box" v-else>
    <br />
    <p>Please click on a Customer...</p>
  </div>
  </div>
</template>

<script>

 //eslint-disable-next-line no-unused-vars 
import CommentBox from "@/components/CommentBox.vue";
//eslint-disable-next-line no-unused-vars 
import FileBox from "@/components/FileBox.vue";


import CustomerDataService from "../../services/CustomerDataService";

import TextField from "../../components/InputControl";




export default {
  components: {
    TextField
  },
  name: "edit-customer",
  created: function(){
   
  },
  setup(){
    //eslint-disable-next-line no-unused-vars 
    let todaysDate = new Date();
  }
  
  ,
  data() {
    return {
      currentCustomer: null,
      message: '',
      inputs: [
        { id: 1, title: {label :'My journey with Vue', placeholder:'xxxxxx'} },
        { id: 2, title: {label:'Blogging with Vue', value:"aasdadsd"} },
        { id: 3, title: {label:'Why Vue is so fun'} }
      ]
    };
  },
  methods: {
    getCustomer(id) {
      CustomerDataService.get(id)
        .then(response => {
          this.currentCustomer = response.data.data;
          console.log(response.data);


        

        
        })
        .catch(e => {
          console.log(e);
        });

        

    },
    updateCustomer() {
      let self = this;
      event.preventDefault();

      CustomerDataService.update(this.currentCustomer.id, this.currentCustomer)
        .then(response => {
          
          console.log(response.data);
          
          this.message = 'The customer was updated successfully!';
          self.$router.push({name:'customers-list'});
         
        })
        .catch(e => {
          console.log(e);
           alert(e.response.data.error.description);
        });
    },
    
    deleteCustomer() {
      let result = confirm("Esta seguro de eliminar este cliente?");
      event.preventDefault();
      if(result){
        let self = this;
        CustomerDataService.delete(this.currentCustomer.id)
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
      }
      
  },
  mounted() {
    this.message = '';
    this.getCustomer(this.$route.params.id);
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