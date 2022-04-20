<template>
  <div class="home">
    <ListaVacia />
  </div>
</template>

<script>
// @ is an alias to /src
import ListaVacia from '@/components/ListaVacia.vue'

export default {
  name: 'ListavaciaView',
  components: {
    ListaVacia
  }
}
</script>

<style>
 .home{
   background-color: #f9f9f9;;
 }
</style>
