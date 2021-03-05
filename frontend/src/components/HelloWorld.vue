<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <img alt="Symbiose logo" src="../assets/symbiose-logo-72.png">
    <p>
      El lugar donde podrás encontrar y crear proyectos a tu medida.
    </p>
    <h3>Proyectos.</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">Buscar Proyectos</a></li>
      <li><a href="http://localhost:8082/projects" target="_blank" rel="noopener">Crear Proyecto</a></li>
    </ul>
    <h3>Publicaciones.</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Buscar Publicaciones</a></li>
      <li><a href="http://localhost:8082/publications" target="_blank" rel="noopener">Crear Publicación</a></li>
      
    </ul>
    <h3></h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
