<template>
    <div :id="id">
      <form  class="form">
   
          <!--Single File Start-->
          <div v-if="boxType === 'single'">
            <div
              class="picture-file-area"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="drop"
            >
              <input type="file" name="filesArray" @change="onChange" v-if="mode === 'edit'" />
  
              <div class="file-chooser">
                <div class="default">
                  <div v-if="fileList.length > 0">
                  <figure class="image is-96x96" v-for="file in fileList.slice(0,1)" :key="file.id">
                    
                    <img :id="'filePreview' + file.id"  class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" />
                    {{ fetchFile(file) }}
                  </figure>
                </div>
                <div v-else>
                  <figure class="image is-96x96" >
                    
                    <img  class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" />
                    
                  </figure>
                </div>

                </div>
              </div>
              
            </div>
            
          </div>
          
      
      </form>
      
    </div>
  </template>
  
  <script>
  //eslint-disable-next-line no-unused-vars
  import filetypes from "../enums/file-types";
  import http from "../http-common";
  import FileDataService from "../services/FileDataService";
  //eslint-disable-next-line no-unused-vars
  import { format, formatDistance, formatRelative, subDays } from "date-fns";
  
  export default {
    props: [
      "id",
      "entityName",
      "entityId",
      "boxType",
      "acceptFiles",
      "includePreview",
      "mode"
    ],
    name: "PictureBox",
    data: () => ({
      fileList: [],
      file: {
        id: null,
        text: "",
      },
      format,
      formatDistance,
      filesArray: [],
      filetypes,
      http,
    }),
    setup() {},
    mounted() {      
      this.loadFiles();
    },
    methods: {
      onChange(event) {
        this.filesArray = [...event.target.files];

        this.onUpload();
      },
      dragover(event) {
        event.preventDefault();
        // Add some visual fluff to show the user can drop its files
        if (!event.currentTarget.classList.contains("bg-green-300")) {
          event.currentTarget.classList.remove("bg-gray-100");
          event.currentTarget.classList.add("bg-green-300");
        }
      },
      dragleave(event) {
        // Clean up
        event.currentTarget.classList.add("bg-gray-100");
        event.currentTarget.classList.remove("bg-green-300");
      },
      drop(event) {
        event.preventDefault();
  
        this.filesArray = [...event.dataTransfer.files];
  
        event.currentTarget.classList.add("bg-gray-100");
        event.currentTarget.classList.remove("bg-green-300");
      },
      onUpload() {
        const formData = new FormData();
  
        for (const i of Object.keys(this.filesArray)) {
          formData.append("filesArray", this.filesArray[i]);
        }
        
        if(this.fileList.length > 0){

          FileDataService.update(this.entityName, this.entityId,this.fileList[0].id, formData)
          .then((response) => {
            this.file.text = "";
            this.fileList = null;
            this.fileList.push(...response.data.data);
            this.filesArray = null;
          })
          .catch((e) => {
            console.log(e);
            alert(e.response.data.error.description);
          });
        }else{
        FileDataService.create(this.entityName, this.entityId, formData)
          .then((response) => {
            this.file.text = "";
  
            this.fileList.push(...response.data.data);
            this.filesArray = null;
          })
          .catch((e) => {
            console.log(e);
            alert(e.response.data.error.description);
          });
        }
      },
  
      loadFiles() {
        FileDataService.getAll(this.entityName, this.entityId)
          .then((response) => {
            this.fileList = response.data.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      postFile() {
        var data = {
          text: this.file.text,
          entity_id: this.entityId,
          entity_name: this.entityName,
        };
  
        FileDataService.create(data)
          .then((response) => {
            this.file.text = "";
            this.fileList.push(response.data.data);
          })
          .catch((e) => {
            console.log(e);
            alert(e.response.data.error.description);
          });
      },
      downloadFile(file) {
        FileDataService.view(file.id)
          .then((response) => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement("a");
  
            fileLink.href = fileURL;
            fileLink.setAttribute("download", file.name);
            document.body.appendChild(fileLink);
  
            fileLink.click();
          })
          .catch((e) => {
            console.log(e);
            alert(e.response.data.error.description);
          });
      },
      fetchFile(file) {
        if(file.id){

        
        FileDataService.view(file.id)
          
          .then((response) => {
            let fileUrl = window.URL.createObjectURL(new Blob([response.data]));
            let img = document.getElementById("filePreview" + file.id);
            img.src = fileUrl;
          })
          .catch((e) => {
            console.log(e);
            alert(e.response.data.error.description);
          });
        }
      },
    },
  };
  </script>
  <style lang="scss">
  /* ===================== FILE INPUT ===================== */
 
  .picture-file-area {
    width: 100%;
    position: relative;
  
    /*input[type="file"] {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      cursor: pointer;
    }*/
  
    .file-chooser {
      width: 100%;
     
      background: rgba(255, 255, 255, 0.2);
      
      transition: background 0.3s ease-in-out;
  
      .success {
        display: none;
      }
    }
  
    &:hover .file-chooser {
      background: rgba(255, 255, 255, 0.1);
    }
  
    input[type="file"]:focus + .file-chooser {
      outline: 2px solid rgba(228, 228, 228, 0.5);
      outline: -webkit-focus-ring-color auto 5px;
    }
  
    input[type="file"]:valid + .file-chooser {
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