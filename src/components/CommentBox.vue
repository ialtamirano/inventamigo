 
 <template>
  <div :id="id" >
    


    <article class="media" v-for="commentItem in commentList" :key="commentItem.id">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/48x48.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              
                <strong>{{commentItem.full_name}}</strong> <small> {{ formatDistance(Date.parse(commentItem.created),new Date())  }} </small>
                <br>
                {{commentItem.text}}

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
            <button class="delete" @click="deleteComment(commentItem)"></button>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            
          </figure>
          <div class="media-content">
            <div class="field is-grouped">
              <p class="control is-expanded">
                <textarea class="textarea" placeholder="Add a comment..." v-model="comment.text" rows="1"></textarea>
              </p>
              <p class="control">
                <button class="button" @click="postComment" >Enviar</button>
              </p>
            </div>
            <div class="field">
              
            </div>
          </div>
        </article>
  </div>
</template>

<script>
import CommentDataService from "../services/CommentDataService";
//eslint-disable-next-line no-unused-vars 
import { format, formatDistance, formatRelative, subDays } from 'date-fns'



export default {
 
  props: ["id", "entityName","entityId"],
  name: 'CommentBox',
  data: () => ({
      searchQuery :"",
      commentList : [],
      comment :{
        id: null,
        text: "",
      },
      format,
      formatDistance
  }),
  setup(){

  },
  mounted(){
    this.loadComments();
  },
  methods: {
      
      loadComments(){

        CommentDataService.getAll(this.entityName, this.entityId)
        .then(response => {
          this.commentList = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });


      },
      postComment() {

        console.log(this.comment);


        var data = {
          text: this.comment.text,
          entity_id:this.entityId,
          entity_name:this.entityName
        };

       
    
      CommentDataService.create(data)
      .then(response => {
         
          
          this.comment = {
            id: null,
            text: "",
          };
          
          this.commentList.push(response.data.data);
          
         
      })
      .catch(e=> {
        console.log(e);
        alert(e.response.data.error.description);
      })


      },
      deleteComment(comment){


        if(confirm("Realmente desea eliminar el registro?")){

            CommentDataService.delete(comment.id)
              .then(response => {
                this.commentList.splice(this.commentList.findIndex(v => v.id === comment.id), 1);


                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });  
        }


      }

  }
}
</script>