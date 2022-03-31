<template>
<div class="box">
 <div class="level ">
        <div class="level-left">
           <h1 class="title is-4 mb-2 "><router-link :to="{ name: 'parts-list'}" class="" ><span class="has-text-primary ">Clientes</span></router-link> / Nuevo</h1>
    
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

      <form class="">
        <div class="field">
          <label class="label">Codigo</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g LOC 01" v-model="customer.code" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Recepci&oacute;n de materiales" v-model="customer.name" required>
          </div>
        </div>
        <div class="field">
          <label class="label">Descripcion</label>
          <div class="control">
            <textarea class="input" type="text" placeholder="Descripcion" v-model="customer.description"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-primary" @click="saveCustomer">Guardar </button>
          </p>
      
        </div>
</form>
</div> 
</template>
<script>

import CustomerDataService from "../../services/CustomerDataService"


export default {
  name:"add-customer",
  data() {
    return {
      customer : {
        id:null,
        name:"",
        description:"",
        deleted:false,
      },
      submitted: false
    }
  },
  methods: {
    saveCustomer(){

      var data = {
        code: this.customer.code,
        name : this.customer.name,
        description: this.customer.description,
        deleted: this.customer.deleted
      };

      let self = this;
      event.preventDefault();
      CustomerDataService.create(data)
      .then(response => {
          this.customer.id = response.data.data.id;
          console.log(response.data);
          this.submitted = false;
          self.$router.push({ name: "customers-list", params: {} }).catch(console.log);
         
      })
      .catch(e=> {
        console.log(e);
        alert(e.response.data.error.description);
      })
    },
    newCustomer(){
      this.submitted = false;
      this.customer = {};
    }
  }
}
</script>
