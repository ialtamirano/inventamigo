<template>
    <!-- Start Search bar -->
    <div class="field has-addons">
        <p class="control is-expanded">
            <input class="input" type="text" placeholder="Buscar"  v-model="searchQuery" v-on:keyup.enter="search">
        </p>
        <p class="control">
            <a class="button is-warning" @click="search">
            <span class=""><i class="fas fa-search"></i>  Buscar</span>
            </a>
        </p>
    </div>
    <!--End Search Bar-->
</template>
<script>

export default {
  name: 'SearchBar',
  data: () => ({
      searchQuery :""
  }),
  methods: {
      search(){
            this.emitter.emit("searchbar-search", this.searchQuery);
            this.searchQuery = "";
      }
  }
}
</script>
