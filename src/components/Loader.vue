<template>
    <div class="prueba">{{msg}}</div>
</template>

<script>
export default {
    data(){
        return{
            msg: 'esta cargando',
            activarloader: true
        }
    },
    mounted: function () {
        self.activarloader 
        
    }
}
</script>

<style >
.prueba{
color: red
}
</style>