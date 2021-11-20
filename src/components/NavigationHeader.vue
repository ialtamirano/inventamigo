<template>
        <nav class="navbar is-whiteS ">
 <div class="container">

        <div class="navbar-item bd-navbar-item bd-navbar-item-base has-dropdown is-hoverable navbar-start--centered">
                    <router-link class="navbar-item" :to="'/'">
                        <img src="../assets/img/inventamigo_logo_snake.png" >
                        <span class="icon has-text-sponsor">
                        <i class="fas fa-caret-down"></i>
                        </span>
                    </router-link>        
                    <div class="navbar-dropdown bd-navbar-dropdown is-boxed">
                        <router-link class="navbar-item" data-route="" :to="'/parts'">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-extensions">
                                    <i class="fas fa-tags"></i>
                                </span>
                                <span>
                                    <strong>Mi Catalogo</strong>
                                </span>
                                </div>
                                Busqueda de articulos, catalogo, inventario
                            </div>
                        </router-link>
                        
                        <hr class="navbar-divider ">
                        
                        
                        
                        
                        <router-link class="navbar-item" data-route="" :to="'/customers'">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-bleeding">
                                    <i class="fas fa-bookmark"></i>
                                </span>
                                <span>
                                    <strong>Clientes</strong>
                                </span>
                                </div>
                                Agrega nuevos clientes, direccione, informacion de contacto...
                            </div>
                        </router-link>
                        
                            <hr class="navbar-divider ">
                        
                        
                        
                        
                        <a class="navbar-item" data-route="" href="/">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-rss">
                                    <i class="fas fa-rss"></i>
                                </span>
                                <span>
                                    <strong>Blog</strong>
                                </span>
                                </div>
                                Stay updated with new features
                            </div>
                        </a>
                        
                            <hr class="navbar-divider ">
                        
                        
                        
                        
                        <a class="navbar-item" data-route="" href="/">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-success">
                                    <i class="fas fa-rocket"></i>
                                </span>
                                <span>
                                    <strong>Bulma start</strong>
                                </span>
                                </div>
                                A tiny npm package to get started
                            </div>
                        </a>
                        
                            <hr class="navbar-divider ">
                        
                        
                        
                        
                        <a class="navbar-item" data-route="" href="/">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-warning">
                                    <i class="fas fa-certificate"></i>
                                </span>
                                <span>
                                    <strong>Made with Bulma</strong>
                                </span>
                                </div>
                                The official community badge
                            </div>
                        </a>
                        
                            <hr class="navbar-divider ">
                        <router-link class="navbar-item"  :to="{ name: 'locations-list'}" >
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-bootstrap">
                                    <i class="fas fa-exchange-alt"></i>
                                </span>
                                <span>
                                    <strong>Locaciones</strong>
                                </span>
                                </div>
                                See how Bulma is an alternative to Bootstrap
                            </div>
                        </router-link>
                        
                        
                    </div>
        </div>
        
        <div class="navbar-item navbar-end" id="navMenu">
                    <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Ivan</a>
                        <div class="navbar-dropdown"><a class="navbar-item">Dashboard</a><a class="navbar-item">Profile</a><a class="navbar-item">Settings</a>
                        <hr class="navbar-divider">
                        <div class="navbar-item">Logout</div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
        </nav>
  
</template>
<script>


export default {
  name: 'NavigationHeader'
}
</script>

