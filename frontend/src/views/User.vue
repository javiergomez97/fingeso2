<template> 
<div class="container">
    <h1>Crear Usuario</h1> 
    <form> 
        <div>
            <label for="name">Nombre</label> 
            <input type="text" id="name" v-model="newUser.name">
        </div>
        <div>
            <label for="lastname">Apellido</label> 
            <input type="text" id="lastname" v-model="newUser.last_name">
        </div> 
        <div>
            <label for="username">Nombre de Usuario</label> 
            <input type="text" id="username" v-model="newUser.username">
        </div>  
        <div>
            <label for="email">Email</label> 
            <input type="email" id="email" v-model="newUser.email"> 
        </div> 
        <div>
            <label for="phone">Phone</label> 
            <input type="number" id="phone" v-model="newUser.phone"> 
        </div>
            <label for="select">Seleccione su rol</label>
            <select id="rol" v-model="newUser.rol">
                <option disabled value="">Seleccione..</option>
                <option value="Cliente">Cliente</option>
                <option value="Especialista">Especialista</option>
            </select>
            <span>Selected: {{ selected }}</span> 
        <div>
            <label for="pass">Contraseña</label> 
            <input type="password" id="pass" v-model="newUser.password"> 
        </div>
        <div>
            <button type="button" @click="send">Crear</button> 
        </div> 
        <div class="info">
            <h2>Objeto</h2> 
            <code>{{newUser}}</code> 
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
            newUser:{ 
            } 
        } 
    },
    methods:{ 
        send:async function(){ 
            this.message = '';
            if (this.newUser.name == ''){ 
                this.message = 'Debes ingresar un nombre' 
                return false 
            }
            try { 
                var result = await this.$http.post('/api/users', this.newUser);
                let user = result.data; 
                this.message = `Se creó un nuevo contacto con id:
                ${user.data._id}`;
                this.newUser = {}; 
            } catch (error) {
                console.log('error', error) 
                this.message = 'Ocurrió un error' 
            } 
        } 
    } 
}
</script>