<template>
<div class="box">
     <h1 class="title is-4 mb-2 "> Numeros de parte</h1>
    <div class="level ">
        <div class="level-left ">
            <router-link :to="{ name: 'parts-create'}"  class="button is-link is-rounded is-outlined">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span> 
            <span>Agregar </span></router-link>
        </div>
        <div class="level-right">
           
            
        </div>
    </div>
    
    <div class="">
        <table class="table is-hoverable is-fullwidth ">
            <tbody>
                <tr v-for="part in parts" :key="part.id">
                        <td width="5%">
                            <PictureBox
                                id="PartFiles"
                                entityName="part"
                                boxType="single"
                                includePreview="true"
                                :entityId="part.id"
                            />
                        </td>
                        <td><span class="is-size-5"> <router-link :to="'/parts/'+part.id">  {{part.name}}</router-link></span>  </td>
                        
                        <td>
                            <router-link :to="{ name: 'parts-edit', params: { id: part.id }}"   class="badge badge-warning"><span class="icon is-edit"><i class="fas fa-edit"></i></span>Edit</router-link>
                        </td>
                </tr>
            </tbody>
        </table>
                        
    </div>
</div>
</template>
<script>

import PartDataService from "../../services/PartDataService"
//eslint-disable-next-line no-unused-vars
import PictureBox from "@/components/PictureBox.vue";

export default {
  name:"parts-list",
  data: () =>({
      parts : [],
      currentPart:{},
      currentIndex: -1,
      name : ""

  }),
  mounted() {
      
       this.retrieveParts();
    
  },
  methods: {
      retrieveParts(){
        PartDataService.getAll()
        .then( response => {
            console.log(response.data.data);
            this.parts = response.data.data;
            
        })
        .catch(e => {
            console.log(e);
            alert(e.response.data.description);
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
