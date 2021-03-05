<template> 

<div class="container">
    <div>
       <h1>Postulantes a Publicación</h1>
    </div>
        
    <div>
        <v-simple-table id="table" class="center">
                <thead>
                    <tr>
                        <th>Nombre Postulante</th>
                        <th>Nombre Publicación</th>
                        <th>Fecha Postulación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="postulant in Postulation" :key="postulant.id">
                        <td> {{ postulant.id_postulant }} </td>
                        <td> {{ postulant.id_publication }} </td>
                        <td> {{ postulant.create_date }} </td>
                    </tr>
                </tbody>
            </v-simple-table> 
    </div>
    

    

</div>


</template>


<script>

import Vue from 'vue';
import axios from "axios";
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)
export default{ 
   name: "postulant",
   data()  {
        return {
            Postulation: undefined,
        };
        
    },
    mounted() {
        Vue.axios.get('http://localhost:8081/api/publication/postulants')
        .then((response) => {
            console.log(response.data);
            this.Postulation = response.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
}
</script>

<style>

</style>