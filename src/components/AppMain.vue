<script>
    import axios from "axios";

    export default{
        name :"AppMain",
        data(){
            return {
                chiave:"valore",
                apiUrl: "http://localhost:8000/api/",
                loading: false,
                loadingError: false,
                projects:[],
            }
        }
    ,
    methods : {
        getProjects() {
            this.loading = true;
            axios.get(this.apiUrl + "projects").then((response) => {
            this.projects = response.data.results;
            console.log(this.projects)
            this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
            });
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <h2>Progetti</h2>
        <h4 v-if="loading">Caricamento in corso</h4>
        <h4 v-if="loadingError">{{ loadingError }}</h4>

        <div class="card" v-for="project in projects" v-bind:key="project">
            <h4>{{ project.name}}</h4>
            <p>{{ project.description}}</p>
            <p>{{ project.link}}</p>
        </div>
    </main>
</template>

<style scoped>
.card {
    background: pink;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.25rem;
}
</style>