
<template>
  <div class="home">
    <Favoritos />
  </div>
</template>

<script>
// @ is an alias to /src
import Favoritos from '@/components/Favoritos.vue'


export default {
  name: 'FavoView',
  components: {
    Favoritos
  }
}
</script>