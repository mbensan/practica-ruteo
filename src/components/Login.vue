<template>
  <div class="hello">
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Ingreso de Usuario</span>
            <form action="">
              <div class="row">
                <div class="input-field col s12">
                  <input id="username" type="text" class="validate" v-model="username">
                  <label for="username">Nombre de Usuario</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate" v-model="password">
                  <label for="password">Contraseña</label>
                </div>
              </div>
            </form>
          </div>
          <div class="card-action">
            <a href="#">Olvidé mi contraseña</a>
            <a href="#" @click="loguear">Enviar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const usuario = {
  username: 'Leo',
  password: 'manzapera123'
}

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loguear() {
      if (this.username == usuario.username && this.password == usuario.password) {
        // el login es exitoso
        this.username = '';
        this.password  = '';
        // acá redirigimos al usuario a otra ruta
        this.$router.push('/');
      } else {
        alert('Usuario no encoontrado con contraseña incorrecta');
      }
    }
  }
}
</script>
