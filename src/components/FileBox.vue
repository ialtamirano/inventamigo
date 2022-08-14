 
 <template>
  <div :id="id" >
    <form @submit.prevent="onUpload" class="form">
       <div class="field is-centered" v-if="boxType === 'single'" >
        <div class="form-group single-file-area" @dragover="dragover" @dragleave="dragleave" @drop="drop">
        
            <input  type="file" name="filesArray"  @change="onChange">
            
            <div class="file-chooser">
             
              <div class="default" >Iniciales</div>
            </div>
            <span  v-if="filesArray.length > 0"  >
                {{filesArray[0].name}}
             </span>
           
        </div>  
         <div class="form-group">
              <button class="button is-primary"><span class="icon"><i class="fa fa-upload"></i></span><span> Subir una foto</span></button>
          </div>
      </div>

      <div class="field" v-if="boxType === 'multiple'" >
        <div class="form-group file-area" @dragover="dragover" @dragleave="dragleave" @drop="drop">
        
            <input  type="file" name="filesArray" multiple @change="onChange">
            
            <div class="file-chooser">
             
              <div class="default" >Para agregar archivos, arrastre &oacute; haga clic para seleccionar desde su computadora!</div>
            </div>
             <span  v-for="item in filesArray" :key="item.id" >
                {{item.name}}
             </span>
        </div>  
      </div>
      
      <div class="field"  v-if="boxType === 'multiple'">
          <div class="form-group">
              <button class="button is-primary"><span class="icon"><i class="fa fa-upload"></i></span><span> Subir</span></button>
          </div>
      </div>
    </form>
      

      <article class="media" v-for="file in fileList" :key="file.id">
          <div class="media-content">
            <div class="content">
                <span class="icon">
                <i class="fa" :class="filetypes.getIcon(file.extension)" ></i>
            </span>               
               <a @click.prevent="downloadFile(file)" >{{file.name}}</a>
               <br>
                 <small>{{file.full_name}}</small> - <small>{{ formatDistance(Date.parse(file.created),new Date())  }}</small>
            </div>
           
          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article>
  </div>
</template>

<script>

//eslint-disable-next-line no-unused-vars
import filetypes from "../enums/file-types" 
import http from "../http-common";
import FileDataService from "../services/FileDataService";
//eslint-disable-next-line no-unused-vars 
import { format, formatDistance, formatRelative, subDays } from 'date-fns'



export default {
 
  props: ["id", "entityName","entityId","boxType"],
  name: 'FileBox',
  data: () => ({

      fileList : [],
      file :{
        id: null,
        text: "",
      },
      format,
      formatDistance,
      filesArray: [],
      filetypes,
      http,

  }),
  setup(){
 
   
   
  },
  mounted(){
    console.log("mounted");
    console.log(this.props);
    this.loadFiles();
    
  },
  methods: {
    onChange (event) {
          this.filesArray = [...event.target.files];
          //this.filesArray =  this.$refs.file.files

    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop(event) {
      event.preventDefault();
      
      this.filesArray = [...event.dataTransfer.files];
     
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    onUpload() {
          const formData = new FormData();

          for (const i of Object.keys(this.filesArray)) {
            formData.append('filesArray', this.filesArray[i])
          }

          FileDataService.create(this.entityName, this.entityId,formData)
          .then(response => {
            
              
              this.file.text = "";
            
              this.fileList.push(...response.data.data);
              this.filesArray = null;
              
            
          })
          .catch(e=> {
            console.log(e);
            alert(e.response.data.error.description);
          });


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


      },
      downloadFile(file){
        
     


        FileDataService.view(file.id)
        .then(response => {
          


          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
              var fileLink = document.createElement('a');
            
              fileLink.href = fileURL;
              fileLink.setAttribute('download', file.name);
              document.body.appendChild(fileLink);
            
              fileLink.click();
            
          
        })
        .catch(e=> {
          console.log(e);
          alert(e.response.data.error.description);
        })


      }

  }
}
</script>
<style lang="scss">
  /* ===================== FILE INPUT ===================== */
.file-area {
  width: 100%;
  position: relative;
  
  input[type=file] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }
  
  .file-chooser {
    width: 100%;
    padding: 30px;
    background: rgba(255,255,255,0.2);
    border: 2px dotted rgba(255, 255, 255, 0.885);
    text-align: center;
    border-radius: 4px;
    transition: background 0.3s ease-in-out;
    
    .success {
      display: none;
    }
  }
  
  &:hover .file-chooser {
    background: rgba(255,255,255,0.1);
  }
  
  input[type=file]:focus + .file-chooser {
    outline: 2px solid rgba(228, 228, 228, 0.5);
    outline: -webkit-focus-ring-color auto 5px;
  }
  
  input[type=file]:valid + .file-chooser {
    border-color: rgba(113, 114, 113, 0.939);
    .success {
      display: inline-block;
    }
    .default {
      /*display: none;*/
    }
  }
}


.single-file-area {
  width: 100%;
  position: relative;
  
  input[type=file] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }
  
  .file-chooser {
    width: 100%;
    padding: 30px;
    background: rgba(255,255,255,0.2);
    border: 2px dotted rgba(255, 255, 255, 0.885);
    text-align: center;
    border-radius: 50px;
    transition: background 0.3s ease-in-out;
    
    .success {
      display: none;
    }
  }
  
  &:hover .file-chooser {
    background: rgba(255,255,255,0.1);
  }
  
  input[type=file]:focus + .file-chooser {
    outline: 2px solid rgba(228, 228, 228, 0.5);
    outline: -webkit-focus-ring-color auto 5px;
  }
  
  input[type=file]:valid + .file-chooser {
    border-color: rgba(113, 114, 113, 0.939);
    .success {
      display: inline-block;
    }
    .default {
      /*display: none;*/
    }
  }
}
</style>