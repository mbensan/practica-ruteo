<template>
  <div class="card  purple darken-3">
    <div class="card-content white-text">
      <span class="card-title">Imágenes de {{$route.params.restoran}}</span>
      <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"></a>
      <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
      <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
      <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
      <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>
    </div>
    </div>

  </div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'Images',
  mounted() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }
}
</script>
