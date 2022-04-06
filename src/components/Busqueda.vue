<template>
  <div class="searchbar">
    <form @submit.prevent="setPokemonUrl">
      <img alt="Vue logo" class="iconoSearch" @click="setPokemonUrl" src="@/assets/imagenes/icosearch.png"/>
      <input type="text" placeholder="Search" v-model="searchvalue">
    </form>
  </div>
</template>

<script>
  export default {
    props: [
      'apiUrl'
    ],
    data: () => {
      return {
        searchvalue: '',
      }
    },
    methods: {
      setPokemonUrl(url) {
        if(this.searchvalue !== '')
          this.$emit('setPokemonUrl', this.apiUrl + this.searchvalue);
      }
    }
  }
</script>

<style scoped>
    @import '@/assets/busqueda.css';
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;700&display=swap');
</style>