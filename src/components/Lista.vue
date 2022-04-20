
<template>
  <div v-if="loading" class="cargando">
    <Loader />
  </div>
  <Busqueda :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl"/>
  <div class="contenedorLista">
    <ul>
      <li class="estiloLista" v-for="(pokemons, index) in pokemon" :key="index">
        <div class="listaPokemons">
          <p @click="mostrarPokemon(pokemons)" class="nombres">{{pokemons.name}}</p>
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
        <button type="button" @click="$router.push('/favoritos')" class="buttonFavorites">Favorites</button>
    </div>

  </div>

  <DetallesPokemon v-if="showDetail" @cerrarDetalles="cerrarDetalles" :showDetail="showDetail" :mostrarPokemon="mostrarPokemon" :detallePokemon="detallePokemon"/>
  
</template>

<script>
import axios from 'axios'
import DetallesPokemon from './DetallesPokemon.vue'
import Busqueda from './Busqueda.vue'
import Loader from './Loader.vue';
 
export default {
  data() {
    return{
       pokemon:null,
       showDetail: false,
       apiUrl: 'https://pokeapi.co/api/v2/pokemon',
       pokemonUrl:"",
       pokemonName:'',
       detallePokemon:[],
       loading: false
    }
  },
  mounted: async function() {
      this.getPokemon();
  },
   components: {
    DetallesPokemon,
    Busqueda,
    Loader,
}, 
  methods:{
   
   ocultarLoading(){
    setTimeout(() => {
       this.loading = false
          
     }, 9000);
   },
   
   getPokemon(){
      this.loading = true
      axios
      .get(this.apiUrl)
      .then(response => {
         this.pokemon = response.data.results
          this.detallePokemon = response.data.results
          this.ocultarLoading()
         
      })  
      .catch((e) => {
        this.loading = false
      }) 
      
    },

    mostrarPokemon(pokemons){
        this.showDetail = true
        this.detallePokemon = pokemons
    },

    cerrarDetalles(){
      this.pokemonUrl = url;
      this.showDetail = false;
    
    },

    setPokemonUrl(url) {
      this.showDetail = true;
      this.pokemonUrl = "";
    },

  },
 
}
</script>

<style>

@import '@/css/lista.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
</style>
