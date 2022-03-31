<template>
<div class="box">
  <div class="level ">
    <div class="level-left">
        <h1 class="title is-4 mb-2 "><router-link :to="{ name: 'customers-list'}"  ><span class="has-text-primary ">Clientes</span></router-link> / Edici&oacute;n</h1>
            

        </div>        
  </div>

  <div  v-if="currentCustomer" >
    
    <form class="">
      <div class="field">
        <label class="label" for="code">Codigo</label>
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

    

       <div class="field is-grouped">
          <p class="control">
              <button type="submit" class="button is-success"
                @click="updateLocation"
              >
                Guardar cambios
              </button>
          </p>
          <p class="control ">
              <button class="button is-light is-right mr-2"
                @click="deleteLocation">
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

export default {
  name: "edit-customer",
  data() {
    return {
      currentCustomer: null,
      message: ''
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
          
          this.message = 'El cliente se actualizo correctamente!';
          self.$router.push({name:'customers-list'});
         
        })
        .catch(e => {
          console.log(e);
           alert(e.response.data.error.description);
        });
    },
    
    deleteCustomer() {
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
  },
  mounted() {
    this.message = '';
    this.getCustomer(this.$route.params.id);
    
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>