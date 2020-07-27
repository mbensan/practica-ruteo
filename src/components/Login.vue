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
                  <input id="name" type="text" class="validate">
                  <label for="password">Nombre de Usuario</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input type="password" class="validate">
                  <label for="password">Contraseña</label>
                </div>
              </div>
            </form>
          </div>
          <div class="card-action">
            <a href="#">Olvidé mi contraseña</a>
            <a href="#">Enviar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
