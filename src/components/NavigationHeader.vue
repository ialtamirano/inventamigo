<template>
        <nav class="navbar is-white ">
 <div class="container">
        <div class="navbar-item">
                <div class="control  has-icons-left ">
                    <input class="input " type="text" placeholder="Buscar...">
                    <span class="icon  is-left">
                    <i class="fa fa-search"></i>
                    </span>                 
                </div>
        </div>  
        <div class="navbar-item bd-navbar-item bd-navbar-item-base has-dropdown is-hoverable navbar-start--centered">
                    <a class="navbar-item" href="/">
                        <img src="../assets/img/inventamigo_logo_snake.png" >
                        <span class="icon has-text-sponsor">
                        <i class="fas fa-caret-down"></i>
                        </span>
                    </a>        
                    <div class="navbar-dropdown bd-navbar-dropdown is-boxed">
                        <a class="navbar-item" data-route="" href="/">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-extensions">
                                    <i class="fas fa-plug"></i>
                                </span>
                                <span>
                                    <strong>Bulma extensions.</strong>
                                </span>
                                </div>
                                Side projects to enhance Bulma
                            </div>
                        </a>
                        
                        <hr class="navbar-divider ">
                        
                        
                        
                        
                        <a class="navbar-item" data-route="" href="/">
                            <div>
                                <div class="icon-text">
                                <span class="icon has-text-bleeding">
                                    <i class="fas fa-bookmark"></i>
                                </span>
                                <span>
                                    <strong>The official Bulma book</strong>
                                </span>
                                </div>
                                A step-by-step guide that teaches you how to build a web interface from scratch using Bulma
                            </div>
                        </a>
                        
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
                        <a class="navbar-item" data-route="" href="/locaciones">
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
                        </a>
                        
                        
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

