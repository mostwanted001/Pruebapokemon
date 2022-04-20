<template>
  <Busqueda :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl"/>
  <div class="contenedorLista" >
    <ul>
      <li class="estiloLista">
        <div class="listaPokemons">
          <p></p>
          <div>
            <img alt="Vue logo" class="elipse" src="@/assets/imagenes/ellipse23.png"/>
            <img alt="Vue logo" class="estrella" src="@/assets/imagenes/estrella.png"/>
          </div>
        </div>
      </li>
    </ul>
    <div class="contenedorButton">
        <img alt="Vue logo" class="icobtnLista" src="@/assets/imagenes/lista.png"/>   
        <button type="button" @click="$router.push('/lista')" class="buttonLista">All</button>
        <img alt="Vue logo" class="icobtnestrella" src="@/assets/imagenes/estrellablanca.png"/>
        <button type="button" @click="$router.push('/favorites')" class="buttonFavorites">Favorites</button>
    </div>

  </div>

<DetallesPokemon v-if="showDetail" @cerrarDetalles="cerrarDetalles"/>
  
</template>

<script>
import axios from 'axios'
import DetallesPokemon from './DetallesPokemon.vue'
import Busqueda from './Busqueda.vue'

export default {
  data() {
    return{
       pokemon:null,
       showDetail: false,
       apiUrl: 'https://pokeapi.co/api/v2/pokemon',
       pokemonUrl:""
    }
  },
  mounted(){
      console.log('hola que tal')
      this.getPokemon();
  },
  
   components: {
     DetallesPokemon,
     Busqueda
  },
  
  methods:{
    getPokemon(){
      axios
      .get(this.apiUrl)
      .then(response => {
          this.pokemon = response.data.results
      })  
      .catch( e=> console.log(e))
    },

    mostrarPokemon(){
        this.showDetail = true
    },

    cerrarDetalles(){
      this.pokemonUrl = url;
      this.showDetail = false;
    
    },

    setPokemonUrl(url) {
      this.showDetail = true;
      this.pokemonUrl = "";
    },

  }
 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@import '@/css/lista.css';

</style>
