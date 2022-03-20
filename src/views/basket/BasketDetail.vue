<template>
<div class="box" >
  <h1 class="title is-4 mb-2 "><router-link :to="{ name: 'parts-search'}" class="" ><span class="has-text-primary">Busqueda</span></router-link> / Canasta</h1>
  <div class="level ">

    <div class="level-right">
      <div clas="level-item">
        
      </div>
    </div>
  </div>
 
  <div  v-if="currentBasket" >
    <form class="form">
      <article class="media">      
        <div class="media-content">
            <div class="list has-visible-pointer-controls">
                              <div class="list-item" v-for="item in currentBasket.ownBasketitem" :key="item.id">
                                  <div class="list-item-image">
                                      <figure class="image is-64x64">
                                          <img v-bind:src="item.part.image_url" >
                                      </figure>
                                  </div>
                                  
                                  <div class="list-item-content">
                                      <div class="list-item-title">{{item.part.name}}
                                      </div>
                                      <div class="list-item-description">
                                          {{item.part.description.slice(0, 200) }}  
                                          <div class="tags"> 
                                              <span class="tag is-link">Inventario:5</span> 
                                              <span class="tag is-danger">Agotado</span> 
                                              <span class="tag is-success">Mas vendido</span>
                                          </div>
                                      </div>
                                  </div>
                              
                                  <div class="list-item-controls">
                                      <div class="is-flex is-align-items-center">
                                        <label>Precio al publico</label>
                                          <input type="number" v-model="item.part.price" class="input" />
                                          <div class="buttons ml-3">
                                              
                                              
                                              <button class="button is-hidden-tablet">
                                                  <span class="icon">
                                                  <i class="fas fa-pencil-alt"></i>
                                                  </span>
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                      </div>       
        </div>
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="Agregar un comentario..."></textarea>
          </p>
        </div>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="control">
                    <button type="submit" class="button is-success"
                      @click="updateBasket"
                    >
                      Update
                    </button>
                </p>
                <div class="field copy-link-control has-addons">       
                  <div class="control is-expanded">
                          <input type="text" class="input  is-rounded" id="code" ref="clone"
                            v-model="currentUrl" v-on:focus="$event.target.select()"
                          />
                  </div>
                  <div class="control">
                      <a class="button is-success is-rounded" @click="copyLink">
                        <i class="fas fa-copy"></i>&nbsp; Copiar link
                      </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <label class="checkbox">
                  
                  <p class="control ">
                    <button class="button is-light is-right mr-2"
                      @click="deleteBasket">
                      <i class="fas fa-trash"></i>
                    </button>
                  </p>
                </label>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </form>

    <p>{{ message }}</p>
  </div>
  <div class="box" v-else>
    <br />
    <p>La canasta esta vacia</p>
  </div>
   </div>
</template>

<script>
import BasketDataService from "../../services/BasketDataService";

export default {
  name: "edit-basket",
  data() {
    return {
      currentBasket: null,
      currentUrl: location.toString() + '/public/',
      message: ''
    };
  },
  methods: {
    copyLink() {
      this.$refs.clone.focus();
      console.log(this.$refs.clone);
      document.execCommand('copy');
    },
    getBasket(id) {
      BasketDataService.get(id)
        .then(response => {
          this.currentBasket = response.data.data;
          this.currentUrl = this.currentUrl + this.currentBasket.uid;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
          
        });
    },
    updateBasket() {
      let self = this;
      event.preventDefault();

      BasketDataService.update(this.currentBasket.id, this.currentBasket)
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
    
    deleteBasket() {
      let self = this;
      BasketDataService.delete(this.currentBasket.id)
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
    this.getBasket(this.$route.params.id);
    
  }
};
</script>

<style>


</style>