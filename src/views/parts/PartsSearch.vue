<template>


        <h1 class="title is-4 mb-2">Busqueda</h1> 



        
            
            <!-- Search bar start -->
            <div class="field has-addons">
            <p class="control">
                <span class="select">
                <select v-model="currentPart.category_id">
                    <option selected = "selected">Categorias</option>
                    <option v-for="category in categories" :key="category.id">{{category.name}}</option>
                    
                </select>
                </span>
            </p>
            <p class="control is-expanded">
                <input class="input" type="text" placeholder="Buscar articulos"  v-model="currentPart.name" v-on:keyup.enter="searchParts">
            </p>
            <p class="control">
                <a class="button is-warning" @click="searchParts">
                <span class=""><i class="fas fa-search"></i>  Buscar</span>
                </a>
            </p>
            </div>

          <a href="#" class="button is-floating is-link">
                <i class="fas fa-shopping-basket"></i>
            </a>
            
    
            <div class="list has-visible-pointer-controls">
            <div class="list-item" v-for="part in parts" :key="part.id">
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
                    <button class="button is-link ">
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

                      
        
        
    
</template>
<script>

import PartDataService from "../../services/PartDataService"
import CategoryDataService from "../../services/CategoryDataService"


export default {
  name:"parts-list",
  data: () =>({
      parts : [],
      categories: [],
      currentPart:{},
      currentIndex: -1,
      name : ""

  }),
  mounted() {
       this. retrieveCategories();
       this.retrieveParts();
    
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
        PartDataService.search(this.currentPart.name)
        .then( response => {
            this.parts = response.data.data;
        })
        .catch(e => {
            console.log(e.response);
            alert(e.response.data.error.description);
        })
      },
      refreshList(){
          this.retrieveParts();
          this.currentPart = null;
          this.currentIndex = -1;
      },
      setActivePart(part, index){
          this.currentPart = part;
          this.currentIndex = part? index : -1;
      },

      create : function(){},
      delete : function()
      {
          
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
