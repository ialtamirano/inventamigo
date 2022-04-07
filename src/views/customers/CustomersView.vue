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

      <span  v-for="commentItem in currentCustomer.commentList" :key="commentItem.id">


        XXXXXXX   {{ commentItem.tex}}
      </span>


        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Barbara Middleton</strong>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>

            <div class="content">
              <p>
                <strong>Barbara Middleton</strong>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>

            <article class="media">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Sean Brown</strong>
                    <br>
                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                    <br>
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </div>

                <article class="media">
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                </article>

                <article class="media">
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                </article>
              </div>
            </article>

            <article class="media">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br>
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                    <br>
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" placeholder="Add a comment..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button">Post comment</button>
              </p>
            </div>
          </div>
        </article>
  </div>
  <div class="column"></div>
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

import CustomerDataService from "../../services/CustomerDataService";
import CommentDataService from "../../services/CommentDataService";
import TextField from "../../components/InputControl";



export default {
  components: {
    TextField
  },
  name: "edit-customer",
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


          CommentDataService.getAll("customer", id)
        .then(response => {
          this.currentCustomer.commentList = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

        
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
      },


      
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