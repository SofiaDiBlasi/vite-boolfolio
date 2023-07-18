<script>
    export default {
        name: "ProjectCard",
        props: {
            name: String,
            description: String,
            type: String,
            technologies: Array,
            link : String
        },
        data(){
            return{
            }
        }
    }
</script>

<template>
    <div class="card">
        <h4>{{ name}}</h4>
        <h5>Categoria: {{ type }}</h5>
        <h5>Tecnologie usate:
            <span v-for="technology in technologies" v-bind:key="technology"> 
                {{ technology.name }}
            </span>
        </h5>
        <p>{{ description}}</p>
        <p>{{ link}}</p>
    </div>
</template>

<style>
.card {
    background: pink;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.25rem;
}
</style>