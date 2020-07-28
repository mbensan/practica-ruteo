<template>
  <div>
    <div class="row">
      <div class="s12 m9">
        <router-link :to="{path: `/${restoran}`}" class="waves-effect waves-light btn-small">Acerca de</router-link>
        <router-link :to="{path: `/${restoran}/reviews`}" class="waves-effect waves-light btn-small">Revisiones</router-link>
        <router-link :to="{path: `/${restoran}/images`}" class="waves-effect waves-light btn-small">Fotos</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Restoran',
  props: {
    restoran: String
  }
}
</script>
