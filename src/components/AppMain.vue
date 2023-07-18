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
                projectsCurrentPage: 0,
                projectTotalPages: 0
            }
        }
    ,
    methods : {
        getProjects() {
            this.loading = true;
            axios.get(this.apiUrl + "projects").then((response) => {
            this.projects = response.data.results.data;
            this.projectsCurrentPage = response.data.results.current_page;
            this.projectTotalPages = response.data.results.last_page;
            this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
            });
        },
        nextPage() {
            
            if (this.projectsCurrentPage < this.projectTotalPages) {         ;

                let config = {
                    params: {
                        page: (this.projectsCurrentPage+1)
                    }
                };
                this.loading= true;
                axios.get(this.apiUrl + "projects", config).then((response) => {
                this.projects = response.data.results.data;
                this.projectsCurrentPage = response.data.results.current_page;
                console.log(this.projects)
                this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.loadingError = err.message;
                });

            } 
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

        <h2>Sei alla pagina {{ projectsCurrentPage }} di {{ projectTotalPages }}</h2>

        <div class="card" v-for="project in projects" v-bind:key="project">
            <h4>{{ project.name}}</h4>
            <h5>Categoria: {{ project.type.name }}</h5>
            <h5>Tecnologie usate:
                <span v-for="technology in project.technologies" v-bind:key="technology"> 
                    {{ technology.name }}
                </span>
            </h5>
            <p>{{ project.description}}</p>
            <p>{{ project.link}}</p>
        </div>

        <a @click="nextPage" class="pageButton">Vai alla pagina successiva</a>
    </main>
</template>

<style scoped>
.card {
    background: pink;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.25rem;
}

.pageButton {
    padding: 0.5rem;
    border-color: pink;
    background: palegoldenrod;
    color: white;
    border-radius: 50px;
    margin: 1rem;
    cursor: pointer;
}
</style>