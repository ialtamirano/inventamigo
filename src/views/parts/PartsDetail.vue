<template>
  <div class="box">
    <div class="level">
      <div class="level-left">
        <h1 class="title is-4 mb-2">
          <router-link :to="{ name: 'parts-list' }" class=""
            ><span class="has-text-primary">Numeros de parte</span></router-link
          >
          / Edici&oacute;n
        </h1>
      </div>
      <div class="level-right">
        <button class="button is-primary" @click="editFields">
          <span class="icon">
            <i class="fas fa-tools"> </i>
          </span>
          <span> Personalizar </span>
        </button>
      </div>
    </div>

    <div v-if="currentPart">
      <h4>Datos</h4>
      <form>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label" for="code">Numero de parte</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-narrow has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="code"
                  placeholder="Numero"
                  v-model="currentPart.code"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-list-ol"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  type="text"
                  class="input"
                  id="name"
                  placeholder="Nombre del numero de parte"
                  v-model="currentPart.name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-tag"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label" for="description">Descripci&oacute;n</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input
                  type="text"
                  class="input"
                  id="description"
                  v-model="currentPart.description"
                />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Precio</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  type="number"
                  class="input"
                  id="price"
                  placeholder="Precio"
                  v-model="currentPart.price"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-dollar-sign"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  type="number"
                  class="input"
                  id="price"
                  placeholder="Costo"
                  v-model="currentPart.cost_price"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-dollar-sign"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label"> Etiquetas</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  type="number"
                  class="input"
                  id="tags"
                  v-model="currentPart.tags"
                />
              </p>
            </div>
          </div>
        </div>
        <h4>Fotos:</h4>
        <FileBox
          id="PartFiles"
          entityName="part"
          boxType="multiple"
          acceptFiles=".jpg,.png"
          :entityId="currentPart.id"
          :includePreview="true"
          
        />
        <div class="field is-grouped">
          <p class="control">
            <button type="submit" class="button is-success" @click="updatePart">
              Guardar cambios
            </button>
          </p>
          <p class="control">
            <button class="button is-light is-right mr-2" @click="deletePart">
              <i class="fas fa-trash"></i>
            </button>
          </p>
        </div>
      </form>

      <p>{{ message }}</p>
    </div>

    <div class="box" v-else>
      <br />
      <p>Please click on a Part...</p>
    </div>
  </div>
</template>

<script>
import PartDataService from "../../services/PartDataService";

//eslint-disable-next-line no-unused-vars
import FileBox from "@/components/FileBox.vue";

export default {
  components: {
  
  },
  name: "edit-part",
  data() {
    return {
      currentPart: null,
      message: "",
      inputs: [
        {
          id: 1,
          title: { label: "My journey with Vue", placeholder: "xxxxxx" },
        },
        { id: 2, title: { label: "Blogging with Vue", value: "aasdadsd" } },
        { id: 3, title: { label: "Why Vue is so fun" } },
      ],
    };
  },
  methods: {
    getPart(id) {
      PartDataService.get(id)
        .then((response) => {
          this.currentPart = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePart() {
      let self = this;
      event.preventDefault();

      PartDataService.update(this.currentPart.id, this.currentPart)
        .then((response) => {
          console.log(response.data);

          this.message = "The part was updated successfully!";
          self.$router.push({ name: "parts-list" });
        })
        .catch((e) => {
          console.log(e);
          alert(e.response.data.error.description);
        });
    },

    deletePart() {
      let result = confirm("Esta seguro de eliminar este numero de parte?");
      event.preventDefault();
      if (result) {
        let self = this;
        PartDataService.delete(this.currentPart.id)
          .then((response) => {
            console.log(response.data);
            self.$router.go(-1);
          })
          .catch((e) => {
            console.log(e);
            alert(e.response.data.error.description);
          });
      } else {
        return;
      }
    },
  },
  mounted() {
    this.message = "";
    this.getPart(this.$route.params.id);
  
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>