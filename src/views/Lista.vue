<template>
  <div class="home">
    <Lista />
  </div>
</template>

<script>
// @ is an alias to /src
import Lista from '@/components/Lista.vue'

export default {
  name: 'ListaView',
  components: {
    Lista
  }
}
</script>

<style>
 .home{
   background-color: #f9f9f9;;
 }
</style>
