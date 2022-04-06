<template>

  
  <router-view/>

<div class="contenedorImagen">
<img alt="Vue logo" class="circuloRojo" src="@/assets/imagenes/circurloRojo.png"/>
<img alt="Vue logo" class="imagenPikachu" src="@/assets/imagenes/pikachu.png"/>


<div class="contenedorTitulo">
  <h1 class="titulo" >Welcome to Pokédex</h1>  
</div>

<div class="contenedorSub" >
    <p class="subTitulo">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
    </p>
    <p></p>
</div>

<div class="containerButton">
    <button to="/about" type="button" @click="$router.push('lista')" class="buttonIniciar">Get started</button>
</div>



</div>



</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import '@/assets/home.css';
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;700&display=swap');
</style>