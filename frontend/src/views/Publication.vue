<template> 
<div class="container">
    <h1>Crear Publicación</h1> 
    <form> 
        <div>
            <label for="name">Nombre</label> 
            <input type="text" id="name" v-model="newPublication.name">
        </div>
        <div>
            <label for="desc">Descripción</label> 
            <input type="text" id="desc" v-model="newPublication.description"> 
        </div>  
        <div>
            <label for="req">Requerimientos</label> 
            <input type="text" id="req" v-model="newPublication.requires"> 
        </div> 
        <div>
            <label for="location">Ubicación</label> 
            <input type="text" id="location" v-model="newPublication.ubication"> 
        </div>
        <div>
            <label for="salary">Salario (CLP)</label> 
            <input type="text" id="salary" v-model="newPublication.salary"> 
        </div>
        <div>
            <label for="fin">Fecha de Finalización (dd/mm/yyyy)</label> 
            <input type="text" id="fin" v-model="newPublication.fin_date"> 
        </div>
            <label for="select">Seleccione su proyecto</label>
            <select id="select" v-model="selected">
                <option disabled value="">Seleccione..</option>
                <option>Prjct1</option>
                <option>Prjct2</option>
            </select>
            <span>Selected: {{ selected }}</span> 
        <div>
            <button type="button" @click="send">Crear</button> 
        </div> 
        <div class="info">
            <h2>Objeto</h2> 
            <code>{{newPublication}}</code> 
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
            newPublication:{ 
            } 
        } 
    },
    methods:{ 
        send:async function(){ 
            this.message = '';
            if (this.newPublication.name == ''){ 
                this.message = 'Debes ingresar un nombre' 
                return false 
            }
            try { 
                var result = await this.$http.post('/api/publications', this.newPublication);
                let publication = result.data; 
                this.message = 'Se creó una nueva publicación con id: ${publication.data._id}';
                this.newPublication = {}; 
            } catch (error) {
                console.log('error', error) 
                this.message = 'Ocurrió un error' 
            } 
        } 
    } 
}
</script>