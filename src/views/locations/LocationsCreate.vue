<template>
 
      <form class="box">
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith">
          </div>
        </div>
        <div class="field">
          <label class="label">Locacion</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
          </div>
        </div>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-primary">Guardar</button>
          </p>
          <p class="control">
            <button @click="$router.push('/locaciones')"   class="button is-light">Cancelar</button>
          </p>
        </div>
</form>
 
</template>
<script>


export default {
  components: {
 
  }
}
</script>
