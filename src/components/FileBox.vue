 
 <template>
  <div :id="id" >
    <form @submit.prevent="onUpload">
          <div class="form-group">
              <input type="file" name="imagesArray" multiple @change="onChange">
          </div>
          <div class="form-group">
              <button class="btn btn-success">Store</button>
          </div>
      </form>
      <ul>
        <li v-for="file in fileList" :key="file.id">
          <span>{{file.name}}</span> -
          <span class="icon has-text-success" ><i class="fa" :class="filetypes.getIcon(file.extension) " ></i></span>
         
        </li>
      </ul>
  </div>
</template>

<script>

//eslint-disable-next-line no-unused-vars
import filetypes from "../enums/file-types" 
import FileDataService from "../services/FileDataService";
//eslint-disable-next-line no-unused-vars 
import { format, formatDistance, formatRelative, subDays } from 'date-fns'



export default {
 
  props: ["id", "entityName","entityId"],
  name: 'FileBox',
  data: () => ({
   
      fileList : [],
      file :{
        id: null,
        text: "",
      },
      format,
      formatDistance,
      imagesArray: null,
      filetypes
  }),
  setup(){
   //this.moment = moment;
    //console.log(props)
   
  },
  mounted(){
    console.log("mounted");
    this.loadFiles();
  },
  methods: {
    onChange (event) {
          this.imagesArray = event.target.files
        },
    onUpload() {
          const formData = new FormData();

          for (const i of Object.keys(this.imagesArray)) {
            formData.append('imagesArray', this.imagesArray[i])
          }

          FileDataService.create(this.entityName, this.entityId,formData)
          .then(response => {
            
              
              this.file.text = "";
              this.fileList.push(response.data.data);
              
            
          })
          .catch(e=> {
            console.log(e);
            alert(e.response.data.error.description);
          });

          /*axios.post('http://localhost:8888/api/multi-images-upload', formData, {
          }).then((res) => {
            console.log(res)
          })*/
        },  
     
      loadFiles(){

        FileDataService.getAll(this.entityName, this.entityId)
        .then(response => {
          this.fileList = response.data.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });


      },
      postFile() {
        var data = {
        
          text: this.file.text,
          entity_id:this.entityId,
          entity_name:this.entityName
        };

       
    
      FileDataService.create(data)
      .then(response => {
         
          
          this.file.text = "";
          this.fileList.push(response.data.data);
          
         
      })
      .catch(e=> {
        console.log(e);
        alert(e.response.data.error.description);
      })


      }

  }
}
</script>