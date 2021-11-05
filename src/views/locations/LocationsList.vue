<template>
    <div class="level ">
        <div class="level-left ">
        <h1 class="title is-centered"><i class="fas fa-location-arrow"></i> Locaciones</h1> 
        </div>
        <div class="level-right">
            <router-link :to="{ name: 'locations-create'}"  class="button is-link is-rounded">+ Agregar </router-link>
            
        </div>
    </div>
     <router-view></router-view>
    <div class="card events-card">
        <table class="table is-hoverable is-fullwidth ">
            <tbody>
                    <tr>
                        <td width="5%"></td>
                        <td><span class="is-size-5"> <router-link to="/locaciones/1">  Locaciones 1</router-link></span>  </td>
                        <td class="level-right"><button class="button  is-white" href="#"> <i class="fas fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td width="5%"><i class="fa fa-bell-o"></i></td>
                        <td>Lorum ipsum dolem aire</td>
                        <td class="level-right"><a class=" is-primary" href="#"><i class="fas fa-trash"></i></a></td>
                    </tr>
                    <tr>
                        <td width="5%"><i class="fa fa-bell-o"></i></td>
                        <td>Lorum ipsum dolem aire</td>
                        <td class="level-right"><a class=" is-primary" href="#"><i class="fas fa-trash"></i></a></td>
                    </tr>
                    <tr>
                        <td width="5%"><i class="fa fa-bell-o"></i></td>
                        <td>Lorum ipsum dolem aire</td>
                        <td class="level-right"><a class=" is-primary" href="#"><i class="fas fa-trash"></i></a></td>
                    </tr>
                    <tr>
                        <td width="5%"><i class="fa fa-bell-o"></i></td>
                        <td>Lorum ipsum dolem aire</td>
                        <td class="level-right"><a class=" is-primary" href="#"><i class="fas fa-trash"></i></a></td>
                    </tr>
            </tbody>
        </table>
                        
    </div>
   
</template>
<script>



export default {
  components: {
   
  }
}
</script>
