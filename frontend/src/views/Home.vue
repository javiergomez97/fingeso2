<template>
  <div class="home">
    <img alt="Symbiose logo" src="../assets/symbiose-logo-72.png">
    <HelloWorld msg="Symbiose Projects Managment"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Default Title',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome Webapp'
    },
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
