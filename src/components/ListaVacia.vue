<template>
   <Busqueda :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl"/>
  <div class="pokeListEmpty">
    <div class="pokeList">Uh-oh!</div>
    <div class="pokeListEmptParrafo"
      >You look lost on your journey!</div
    >
    <div>
        <button class="buttonVolver" @click="$router.push('/')">Go back home</button>
    </div>
  </div>
</template>

<script>
import Busqueda from './Busqueda.vue'


export default {
  data() {
    return{
    }
  },
  mounted(){
  },
  
   components: {
     Busqueda
  },

 
}

</script>

<style>
@import '@/css/listaVacia.css';
</style>