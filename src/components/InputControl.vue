<template>
    <!-- Start Input Control -->
    <div class="field has-addons">
        <p class="control is-expanded">
            <input class="input" type="text" placeholder="Buscar"  v-model="inputValue" v-on:keyup.enter="search">
        </p>
        <p class="control">
            <a class="button is-warning" @click="search">
            <span class=""><i class="fas fa-search"></i>  Buscar</span>
            </a>
        </p>
    </div>
    <!--End Input Control-->
</template>
<script>

export default {
  name: 'InputControl',
  data: () => ({
      inputValue :""
  }),
  methods: {
      search(){
           
      }
  }
}
</script>
