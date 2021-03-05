<template>
  <div id="app">
  <v-main>
    <h1>Proyectos Publicados</h1>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Area</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prjct in project" :key="prjct.id">
          <td>{{ prjct.name }}</td>
          <td>{{ prjct.description }}</td>
          <td>{{ prjct.area }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <router-link to="/">
      
    </router-link>
  </v-main>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import axios from "axios";
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)
export default{
  name: "GetProjects",
  data() {
    return {
      project: undefined,
    };
  },
  mounted() {
    Vue.axios.get("http://localhost:8081/api/projects")
      .then((response) => {
        console.log(response.data);
        this.project = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};/*
new Vue({
    el: '#ap',
    data: {
      Project: []
    },
    mounted: function() {
      axios
        .get("http://localhost:8081/api/projects")
        .then(function (response) {
          this.Project = response['data'];
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  })*/
</script>