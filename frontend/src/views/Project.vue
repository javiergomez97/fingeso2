<template> 
<div class="container">
    <h1>Crear Proyecto</h1>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                v-model= "newProject.name"
                id="name"
                label="Nombre del Proyecto"
                required
                ></v-text-field>

                <v-text-field
                v-model= "newProject.area"
                label="Área del Proyecto"
                id="area" 
                required
                ></v-text-field>

                <v-text-field
                v-model= "newProject.description"
                id="desc"
                label="Descripción del Proyecto"
                required
                ></v-text-field>
            <div>
                <v-btn rounded color="primary" dark @click="send">Crear</v-btn> 
            </div>
            <div class="info">
                <p class="message"> 
                    {{message}} 
                </p> 
            </div> 
            </v-form> 
</div> 
</template>

<script>

export default { 
    data(){ 
        return{ 
            message:'', 
            newProject:{ 
            } 
        } 
    },
    methods:{ 
        send:async function(){ 
            this.message = '';
            this.newProject.owner = 'usuarioLogueado';
            if (this.newProject.name == ''){ 
                this.message = 'Debes ingresar un nombre' 
                return false 
            }
            try { 
                var result = await this.$http.post('/api/projects',
                this.newProject);
                let project = result.data;
                this.message = `Se creó un nuevo proyecto con id:
                ${project.data._id}`;
                this.newProject = {}; 
            } catch (error) {
                console.log('error', error) 
                this.message = 'Ocurrió un error' 
            } 
        } 
    } 
}
</script>