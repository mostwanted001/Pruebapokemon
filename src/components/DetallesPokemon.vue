<template >
    {{show}}
    <div class="detalle">
          <div class="detallepokemoncard" >
            <div class="fondopokemon">
                <img class="fondoAzul" src="@/assets/imagenes/fondopokemon.png" alt="">
                <img class="botoncerrar" @click="mostrarPokemon()" src="@/assets/imagenes/cerrar.png" alt="">
                <img class="pokemonimagen" :src="pokemonImg"/>
            </div>
            <div class="property">
                <div class="left">Name:</div>
                <div class="right">{{pokemon.name}}</div>
                <div class="pokeDetail__divider"></div>
            </div>
            <div class="property">
                <div class="left ">Weight:</div>
                <div class="right">{{pokemon.weight}}</div>
               <div class="pokeDetail__divider"></div>
                
            </div>
          <div class="property">
                <div class="left">Height:</div>
                <div class="right">{{pokemon.height}}</div>
                <div class="pokeDetail__divider"></div>
          </div> 
          <div class="property">
                <div class="left">Types:</div>
                <div class="right">{{pokemonType}}</div>
                <div class="pokeDetail__divider"></div>

          </div>

          <div class="containerButton">
    <button  type="button" class="buttonCopiar" @click="copy(clipboard)">Share to my friends</button>
        <span v-if="copied">Copiado al portapapeles!</span>
        <div class="buttonfavoritos">
            <img alt="Vue logo" class="elipsebutton" src="@/assets/imagenes/ellipse23.png"/>
            <img alt="Vue logo" class="estrellabutton" src="@/assets/imagenes/estrella.png"/>
        </div>
</div>
        </div>  
    </div>
</template>

<script>
import axios from 'axios'
import { useClipboard } from '@vueuse/core';
import { computed } from '@vue/runtime-core';
export default {
props: [
    'pokemons',
    'showDetail',
    'mostrarPokemon',
    'detallePokemon',
    

],
    data: () => {
      return {
        pokemon: {},
        apiUrl:('https://pokeapi.co/api/v2/pokemon/'),
        pokemonImg: '',
        pokemonType:'',
        
      }      
            
    },

    mounted(){
        this.getPokemon()
    },
    methods:{

        mostrarPokemon(){
            this.$parent.showDetail = false
        },
        getPokemon(){
        
      axios
      .get(this.apiUrl+this.detallePokemon.name)
      .then(response => {
          console.log(response)
          this.pokemon = response.data
          this.pokemonImg = response.data.sprites.other.dream_world.front_default
          this.pokemonType = response.data.types[0].type.name
      })  
      .catch( e=> console.log(e))
        },

    },

    setup(props, { emit }){
        const { copy, copied } = useClipboard();

        const clipboard = computed(
      () =>
        `${pokemon.name}`
    );
    
    return {
      clipboard,
    };
    
    
    }
}
</script>

<style>
@import '@/css/detalles.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
</style>