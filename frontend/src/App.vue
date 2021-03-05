<template>
  <div id="app">
    <v-card id="lateral">
      <v-toolbar dark tabs flat color="indigo">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Symbiose Projects Managment</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="tabs" align-with-title>
            <v-tab href="http://localhost:8080"> Home </v-tab>
            <v-tab href="http://localhost:8080/getprjct"> Proyectos </v-tab>
            <v-tab href="http://localhost:8080/publication/postulants"> Postulaciones </v-tab>
            <v-tab href="http://localhost:8080/newproject"> Nuevo Proyecto </v-tab>
            <v-tab href="http://localhost:8080/newpublication"> Nueva Publicación </v-tab>
            <v-tabs-slider color="pink"></v-tabs-slider>
          </v-tabs>
        </template>
      </v-toolbar>
    </v-card>
    <div></div>
    <div>
      <router-view />
    </div>
    <div id="nav">
    </div>
  </div>
</template>


<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script> <!--
  export default {
    data: () => ({
      fab: false,
      hidden: false,
      tabs: null,
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { color: 'success', icon: 'mdi-share-variant' }
          case 'two': return { color: 'red', icon: 'mdi-pencil' }
          case 'three': return { color: 'green', icon: 'mdi-chevron-up' }
          default: return {}
        }
      },
    },
  }
  
<v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>

</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: bottom;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>
