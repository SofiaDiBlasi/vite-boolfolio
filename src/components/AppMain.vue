<script>
    import axios from "axios";

    export default{
        name :"AppMain",
        data(){
            return {
                chiave:"valore"
            }
        }
    ,
    mounted() {
        axios.get("http://localhost:8000/api/projects").then( (response) => {
            console.log(response.data);
        });
    }
}
</script>

<template>
    <main>
        <h2>Componente Main</h2>
    </main>
</template>