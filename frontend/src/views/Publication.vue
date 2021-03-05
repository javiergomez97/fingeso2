<template> 
<div class="container">
    <h1>Crear Publicación</h1> 

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                id="name"
                v-model="newPublication.name"
                label="Nombre Publicación"
                required
                ></v-text-field>

                <v-text-field
                id="desc"
                v-model= "newPublication.description"
                label="Descripción Publicación"
                required
                ></v-text-field>

                <v-text-field
                id="req"
                v-model= "newPublication.requires"
                label="Requisitos"
                required
                ></v-text-field>

                <v-text-field
                id="location"
                v-model= "newPublication.ubication"
                label="Ubicación"
                required
                ></v-text-field>

                <v-text-field
                id="salary"
                v-model= "newPublication.salary"
                label="Salario"
                required
                ></v-text-field>

                <v-text-field
                type= "date"
                id="fin"
                v-model= "newPublication.fin_date"
                label="Fecha de Finalización Postulación"
                required
                ></v-text-field>

                <v-select
                id="select"
                v-model="select"
                :items= "items"
                :rules="[v => !!v || 'Item is required']"
                label="Proyecto"
                required
                ></v-select>

                <span>Selected: {{ selected }}</span> 

            <div>
                <v-btn rounded color="primary" dark @click="send">Crear</v-btn> 
            </div>
            <div class="info">
            <h2>Objeto</h2> 
            <code>{{newPublication}}</code> 
            <p class="message"> 
                {{message}} 
            </p> 
        </div>
            </v-form> 
   
</div> 
</template>

<script>

export default { 
    data: () => ({
        valid: true,
        message:'', 
        newPublication:{ 
        }, 
        
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
    }),
   
    methods:{ 
        send:async function(){ 
            this.message = '';
            this.newPublication.owner = 'usuarioLogueado';
            if (this.newPublication.name == ''){ 
                this.message = 'Debes ingresar un nombre' 
                return false 
            }
            try { 
                var result = await this.$http.post('/api/publications',
                this.newPublication);
                let publication = result.data;
                this.message = `Se creó una nueva publicación con id:
                ${publication.data._id}`;
                this.newPublication = {}; 
            } catch (error) {
                console.log('error', error) 
                this.message = 'Ocurrió un error' 
            } 
        } 
    } 
}


</script>