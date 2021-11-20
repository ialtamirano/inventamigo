<template>
    <div class="level ">
        <div class="level-left ">
        <h1 class="title is-centered">Clientes</h1> 
        </div>
        <div class="level-right">
            <router-link :to="{ name: 'customers-create'}"  class="button is-link is-rounded is-outlined">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span> 
            <span>Agregar </span></router-link>
            
        </div>
    </div>
    
    <div class="">
        <table class="table is-hoverable is-fullwidth ">
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                        <td width="5%"></td>
                        <td><span class="is-size-5"> <router-link :to="'/clientes/'+customer.id">  {{customer.name}}</router-link></span>  </td>
                        
                        <td>
                            <router-link :to="{ name: 'customers-edit', params: { id: customer.id }}"   class="badge badge-warning"><span class="icon is-edit"><i class="fas fa-edit"></i></span>Edit</router-link>
                        </td>
                </tr>
            </tbody>
        </table>
                        
    </div>
   
</template>
<script>

import CustomerDataService from "../../services/CustomerDataService"


export default {
  name:"customers-list",
  data: () =>({
      customers : [],
      currentCustomer:{},
      currentIndex: -1,
      name : ""

  }),
  mounted() {
      
       this.retrieveCustomers();
    
  },
  methods: {
      retrieveCustomers(){
        CustomerDataService.getAll()
        .then( response => {
            this.customers = response.data.data;
        })
        .catch(e => {
            console.log(e.response);
            alert(e.response.data.error.description);
        })
      },
      refreshList(){
          this.retrieveLocations();
          this.currentCustomer = null;
          this.currentIndex = -1;
      },
      setActiveLocation(customer, index){
          this.currentCustomer = customer;
          this.currentIndex = customer? index : -1;
      },

      create : function(){},
      delete : function()
      {
          
      }
  }
}
</script>
