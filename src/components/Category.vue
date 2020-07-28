<template>
  <div class="hello">
    <div class="row">
      <div class="col s12 m6">
        <div class="card teal darken-1">
          <div class="card-content white-text">
            <span class="card-title">Restorants de {{ nombre_categoria }}</span>
            <div class="collection">
              <a href="#!" class="collection-item">Niu Sushi</a>
              <a href="#!" class="collection-item active">Sushi Tosos</a>
              <a href="#!" class="collection-item">Meraki</a>
              <a href="#!" class="collection-item">Alva</a>
            </div>
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
  name: 'Category',
  props: {
    nombre_categoria: String
  }
}
</script>
