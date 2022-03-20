<template>

 <div class="box">      
        <h1 class="title is-4 mb-2">Busqueda</h1> 

            <!-- Start Search bar -->
            <div class="field has-addons">
                <p class="control">
                    <span class="select">
                    <select v-model="currentPartSearch.category_id">
                        <option disabled value="">Todas las categorias</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                        
                    </select>
                    </span>
                </p>
               
            </div>
            <!--End Search Bar-->
            <a href="#" class="button is-floating is-link" v-if="currentBasket.ownBasketitem.length > 0" @click="createBasket">
                <i class="fas fa-shopping-basket"></i> {{currentBasket.ownBasketitem.length}}
            </a>

            <div class="list has-visible-pointer-controls">
                <div class="list-item" v-for="part in parts" :key="part.id">
                    <div class="list-item-image">
                        <figure class="image is-64x64">
                            <!--<img v-bind:src="part.image_url" >-->
                            <img src="https://picsum.photos/64">
                        </figure>
                    </div>
                    
                    <div class="list-item-content">
                        <div class="list-item-title">{{part.name}}
                        </div>
                        <div class="list-item-description">
                            {{part.description.slice(0, 200) }}  
                            <div class="tags"> 
                                <span class="tag is-link">Inventario:5</span> 
                                <span class="tag is-danger">Agotado</span> 
                                <span class="tag is-success">Mas vendido</span>
                            </div>
                        </div>
                    </div>
                
                    <div class="list-item-controls">
                        <div class="is-flex is-align-items-center">
                            <span>${{part.price}}</span>     
                            <div class="buttons ml-3">
                                <button class="button is-link " @click="addToBasket(part)" >
                                    <span class="icon">
                                    <i class="fas fa-shopping-basket"></i>
                                    </span>
                                    <span>Incluir</span>
                                </button>
                                
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

            <div class="modal is-active" v-if="showBasketModal"  @close="showBasketModal = false">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Modal title</p>
                      
                    </header>
                    <section class="modal-card-body">
                        <div class="list has-visible-pointer-controls">
                            <div class="list-item" v-for="part in currentBasket.s" :key="part.id">
                                <div class="list-item-image">
                                    <figure class="image is-64x64">
                                        <img v-bind:src="part.image_url" >
                                    </figure>
                                </div>
                                
                                <div class="list-item-content">
                                    <div class="list-item-title">{{part.name}}
                                    </div>
                                    <div class="list-item-description">
                                        {{part.description.slice(0, 200) }}  
                                        <div class="tags"> 
                                            <span class="tag is-link">Inventario:5</span> 
                                            <span class="tag is-danger">Agotado</span> 
                                            <span class="tag is-success">Mas vendido</span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="list-item-controls">
                                    <div class="is-flex is-align-items-center">
                                        <span>${{part.price}}</span>     
                                        <div class="buttons ml-3">
                                            <button class="button is-link " @click="addToBasket(part)" >
                                                <span class="icon">
                                                <i class="fas fa-shopping-basket"></i>
                                                </span>
                                                <span>Incluir</span>
                                            </button>
                                            
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
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                            </figure>
                            </div>
                            <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                <a class="level-item" aria-label="retweet">
                                    <span class="icon is-small">
                                        <i class="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                    </a>
                                    <a class="level-item" aria-label="like">
                                    <span class="icon is-small">
                                        <i class="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                        </section>
                <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button"  @click="closeModal">Close</button>
                </footer>
                </div>
                <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
                
            </div>
 </div>
</template>
<script>

import PartDataService from "../../services/PartDataService"
import BasketDataService from "../../services/BasketDataService"
import CategoryDataService from "../../services/CategoryDataService"

import { uid } from 'uid';


export default {
  name:"parts-list",

  data: () =>({
      parts : [],
      categories:[],
      
      currentBasket:{
          
          ownBasketitem : [],
      },
      currentPartSearch:{ category_id : ""},
      currentIndex: -1,
      showBasketModal: false,
      name : ""

  }),
  mounted() {
       this. retrieveCategories();
       this.retrieveParts();
       this.emitter.on("searchbar-search", searchQuery => {
          this.currentPartSearch.name = searchQuery;
          this.searchParts();
       });
        
  },
  methods: {
      retrieveCategories(){
          CategoryDataService.getAll()
        .then( response => {
            this.categories = response.data.data;
        })
        .catch(e => {
            console.log(e.response);
            alert(e.response.data.error.description);
        })
      },
      retrieveParts(){
        PartDataService.getAll()
        .then( response => {
            this.parts = response.data.data;
        })
        .catch(e => {
            console.log(e.response);
            alert(e.response.data.error.description);
        })
      },
      searchParts(){

        PartDataService.search(this.currentPartSearch)
        .then( response => {
            this.parts = response.data.data;
        })
        .catch(e => {
            console.log(e.response);
            alert(e.response.data.error.description);
        })
      },
      addToBasket(part){
          var item = {
              part_id : part.id,
              quantity : 1,
              price: part.price
              
          };

          this.currentBasket.ownBasketitem.push(item);
      },
      
      refreshList(){
          this.retrieveParts();
          this.currentPartSearch = null;
          this.currentIndex = -1;
      },
      setActivePart(part, index){
          this.currentPartSearch = part;
          this.currentIndex = part? index : -1;
      },
      createBasket(){
           

            this.currentBasket.uid = uid();
            this.currentBasket.published = false;

            let self = this;
            event.preventDefault();

            BasketDataService.create(this.currentBasket)
            .then(response => {
                //this.currentBasket.id = response.data.data.id;
                console.log(response.data);
                //this.submitted = false;
                self.$router.push({ name: "basket-edit", params: { id: response.data.data.id} }).catch(console.log);
                
            })
            .catch(e=> {
                console.log(e);
                alert(e.response.data.error.description);
            })
      }
      ,
      showModal : function(){
          this.showBasketModal = true;
      },
      closeModal : function()
      {
          this.showBasketModal = false;
      }
  }
}
</script>
<style lang="scss">

.card-equal-height
.card-content {
  flex-grow:1;
}
.img-responsive {
    display: block;
    height: auto;
}

</style>
