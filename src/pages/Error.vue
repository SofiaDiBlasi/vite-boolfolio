<script>
    export default{
        name :"Error",
        data(){
            return {
               
            }
        }
    }
</script>

<template>
    <section>
        <h1>Error !!!! {{ $route.params.code }}</h1>
        <p>Oh no ! Sembra sia successo qualcosa...</p>
    </section>
</template>