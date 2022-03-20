<template >  
 <div class="box">
   
    <div  id="messages" data-example>
    <h1 class="title is-4 mb-2">Inbox</h1>
    
    <div class="list has-hoverable-list-items has-overflow-ellipsis">
      <div class="list-item is-clickable"  v-for="inboxItem in inbox" :key="inboxItem.id" @click="goToInboxItem(inboxItem)" >
        
        <div class="list-item-image">
          <figure class="image inbox-image is-48x48">
            <img class="is-rounded" :src="'https://randomuser.me/api/portraits/women/'+inboxItem.id+'.jpg'" alt="">
          </figure>
        </div>

        <div class="list-item-content">
          <div class="list-item-title is-flex is-justify-content-space-between">
            <span>{{inboxItem.subject}}</span>
            <span class="has-text-weight-normal has-text-grey">
           
            <span> {{ inboxItem.created_on }}</span>
            </span>
          </div>
          <div class="list-item-description">
              {{inboxItem.created_by_name}} |   {{inboxItem.body.slice(0, 400) }}
          </div>
        </div>

        <div class="list-item-controls is-hidden-mobile">
          <div class="buttons">
            <button class="button">
              <span class="icon">
                <i class="fas fa-archive"></i>
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
  </div>
    <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">439k</p>
                    <p class="subtitle">Usuarios</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">59k</p>
                    <p class="subtitle">Productos</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">3.4k</p>
                    <p class="subtitle">Ordenes abiertas</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">19</p>
                    <p class="subtitle">Atrasados</p>
                </article>
            </div>
        </div>
    </section>
   </div>
</template>
<script>



import InboxDataService from "../../services/InboxDataService"
//import moment from 'moment'
//import { TimeAgo } from "vue2-timeago";
//import "vue2-timeago/dist/vue2-timeago.css";


export default {
  name:"inbox-list",
  components : {
    
  },

  data: () =>({
      inbox : [],
      currentInbox:{},
      currentIndex: -1,
      name : ""

  }),
  
  mounted() {
      
       this.retrieveInboxs();
    
  },
  methods: {
      goToInboxItem(inbox){
        this.$router.push('/inbox/' + inbox.id);
      },
      
      retrieveInboxs(){
        InboxDataService.getAll()
        .then( response => {
          
            this.inbox = response.data.data;

        })
        .catch(e => {
            console.log(e.response);
            alert(e.response.data.error.description);
        })
      },
      refreshList(){
          this.retrieveInboxs();
          this.currentInbox = null;
          this.currentIndex = -1;
      },
      setActiveInbox(inbox, index){
          this.currentInbox = inbox;
          this.currentIndex = inbox? index : -1;
      },

      create : function(){},
      delete : function()
      {
          
      }
  }
}
</script>


