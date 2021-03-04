<template> 
<div class="container">
    <h1>Crear Proyecto</h1> 
    <form> 
        <div>
            <label for="name">Nombre del Proyecto</label> 
            <input type="text" id="name" v-model="newProject.name">
        </div>
        <div>
            <label for="area">Area del Proyecto</label> 
            <input type="text" id="area" v-model="newProject.area">
        </div>  
        <div>
            <label for="desc">Descripción del Proyecto</label> 
            <input type="text" id="desc" v-model="newProject.description"> 
        </div> 
        <div>
            <button type="button" @click="send">Crear</button> 
        </div> 
        <div class="info">
            <h2>Objeto</h2> 
            <code>{{newProject}}</code> 
            <p class="message"> 
                {{message}} 
            </p> 
        </div>
    </form> 
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
            if (this.newProject.name == ''){ 
                this.message = 'Debes ingresar un nombre' 
                return false 
            }
            try { 
                var result = await this.$http.post('/api/projects', this.newProject);
                let project = result.data; 
                this.message = 'Se creó un nuevo proyecto con id: ${proyect.data._id}';
                this.newProject = {}; 
            } catch (error) {
                console.log('error', error) 
                this.message = 'Ocurrió un error' 
            } 
        } 
    } 
}
</script>