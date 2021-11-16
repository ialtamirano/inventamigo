<template>
   <div class="level ">
    <div class="level-left ">
      <router-link :to="{ name: 'inbox-list'}"  class="button is-primary is-rounded is-outlined">
          <span class="icon">
          <i class="fas fa-chevron-left"></i>
        </span>
        <span>Back</span>
          
      </router-link>
    </div> 
    <div class="level-item has-text-centered">
        <h1 class="title is-4 mb-2">{{ currentInbox.subject }}</h1>
    </div>       
  </div>
  <div  id="messages" data-example>
    <div class="list has-hoverable-list-items has-overflow-ellipsis">
      <div class="list-item">
        <div class="list-item-image">
          <figure class="image is-48x48">
            <img class="is-rounded" src="https://lorempixel.com/200/200/people/" alt="">
          </figure>
        </div>

        <div class="list-item-content">
          <div class="list-item-title is-flex is-justify-content-space-between">
            <span>Eileen Alejandra</span>
            <span class="has-text-weight-normal has-text-grey">3m</span>
          </div>
          <div class="list-item-description">
            to: Ivan Altamirano
          </div>
        </div>

        <div class="list-item-controls ">
          
          <div class="buttons">
           <button class="button">
              <span class="icon is-small">
                <i class="fas fa-ellipsis-h" ></i>
              </span>
            </button>
            
            <button class="button">
              <span class="icon">
                <i class="fas fa-trash"></i>
              </span>
            </button>
            
            <button class="button">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
            </button>
            
            <button class="button">
              <span class="icon">
                <i class="fas fa-clock"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container is-max-desktop">
       <br>
              {{currentInbox.body}}
      
    </div>
  </div>
    
    
   
</template>
<script>
import InboxDataService from "../../services/InboxDataService";

export default {
  name: "edit-location",
  data() {
    return {
      currentInbox:  { subject :""},
      message: ''
    };
  },
  methods: {
    getInbox(id) {
      InboxDataService.get(id)
        .then(response => {
          this.currentInbox = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateInbox() {
      InboxDataService.update(this.currentInbox.id, this.currentInbox)
        .then(response => {
          console.log(response.data);
          this.message = 'The inbox was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteInbox() {
      InboxDataService.delete(this.currentInbox.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "inbox-list" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getInbox(this.$route.params.id);  
  }

}

</script>
