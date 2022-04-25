 
 <template>
  <div :id="id" >
    <article class="media" v-for="commentItem in commentList" :key="commentItem.id">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{commentItem.createdby}}</strong>
                <br>
                {{commentItem.text}}
                <br>
                
              </p>
            </div>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" placeholder="Add a comment..." v-model="comment.text"></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button" @click="postComment" >Post comment</button>
              </p>
            </div>
          </div>
        </article>
  </div>
</template>

<script>
import CommentDataService from "../services/CommentDataService";
//eslint-disable-next-line no-unused-vars 
import moment from 'moment';



export default {
 
  props: ["id", "entityName","entityId"],
  name: 'CommentBox',
  data: () => ({
      searchQuery :"",
      commentList : [],
      comment :{
        id: null,
        text: "",
      }
  }),
  setup(){
   //this.moment = moment;
    //console.log(props)
   
  },
  mounted(){
    console.log("mounted");
    this.loadComments();
  },
  methods: {
      search(){
            this.emitter.emit("searchbar-search", this.searchQuery);
            this.searchQuery = "";
      },
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
        var data = {
        
          text: this.comment.text,
          entity_id:this.entityId,
          entity_name:this.entityName
        };

       
    
      CommentDataService.create(data)
      .then(response => {
         
          
          this.comment.text = "";
          this.commentList.push(response.data.data);
          
         
      })
      .catch(e=> {
        console.log(e);
        alert(e.response.data.error.description);
      })


      }

  }
}
</script>