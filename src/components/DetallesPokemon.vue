<template>
    <div class="detalle" v-if="show">
          <div v-if="pokemon" class="detallepokemoncard" >
            <div class="fondopokemon">
                <img class="fondoAzul" src="@/assets/imagenes/fondopokemon.png" alt="">
                <img class="botoncerrar" @click="cerrarModal()" src="@/assets/imagenes/cerrar.png" alt="">
            </div>
            
            
            <div class="property">
                <div class="left destaq">Name:</div>
                <div class="right"></div>
            </div>

            <div class="property">
                <div class="left destaq">Weight:</div>
            </div>
          <div class="property">
                <div class="left destaq">Height:</div>
          </div> 
          <div class="property">
                <div class="left destaq">Types:</div>
          </div>

          <div class="containerButton">
    <button  type="button" @click="$router.push('about')" class="buttonCopiar">Share to my friends</button>
</div>
        </div>  
    </div>
</template>

<script>
import axios from 'axios'
export default {
props: [
    'pokemons',

],
    data: () => {
      return {
        show: true,
        pokemon: {},
        apiUrl:('https://pokeapi.co/api/v2/pokemon/${name}'),
        
      }      
            
    },

    mounted(){
        
    },
    methods:{
        cerrarModal(){
            this.show = false
        },

        getPokemon(){
      axios
      .get(this.apiUrl)
      .then(response => {
          this.pokemon = response.data.results
      })  
      .catch( e=> console.log(e))
    },

    

    }
}
</script>

<style>
@import '@/assets/detalles.css';
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;700&display=swap');
</style>