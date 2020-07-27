<template>
  <div class="hello">
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img src="https://www.comomegusta.cl/wp-content/uploads/2019/10/comomegusta.cl-restaurant-do%C3%B1a-paula-1.png">
            <span class="card-title">Restoranes</span>
          </div>
          <div class="card-content">
            <p>Acá podrás ver los mejores restoranes de la ciudad.</p>
          </div>
          <div class="card-action">
            <a href="#">Enlace</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
