<script setup>
    import Question from "../components/Question.vue"
    import questions from '../Questions/theoretical.json'
</script>

<script>
    export default {
        data() {
            return {
                amountQuestions: 0
            }
        },
        methods: {
            getQuantityQuestions(amount) {
                this.amountQuestions = amount
            }
        },
        mounted() {
            document.title = "Examen Teórico"
        }
    }
</script>

<template>
    <div class="d-flex justify-content-center s container-box">
        <div class="d-block">
            <h1 class="h1 m-4 mt-3 p-2 fs-1 text-center title-t">Examen Teórico</h1>  
            <h2 class="h2 fs-5 text-center subtitle-t">Selecciona la respuesta correcta ✅</h2>
            <h3 class="h2 fs-5 text-center amount">{{ amountQuestions }} Preguntas</h3>
            <router-link class="homelink" to="/driving-test-sv"><i class="material-symbols-outlined">west</i> Volver al inicio</router-link>
        </div>
    </div>
    <div class="d-block m-2">
        <div class="d-flex justify-content-center">
            <Question :qst="questions" testType="teorico" @getQntQuestions="getQuantityQuestions($event)"></Question>
        </div>
    </div>
</template>

<style scoped>
    .container-box {
        width: 100%;
    }
    .title-t {
        text-transform: uppercase;
    }
    .subtitle-t {
        font-family: 'Varela Round', arial;
        font-weight: lighter;
    }
    .amount {
        width: 200px;
        margin: 2.5rem auto 0px auto;
        padding: 2px;
        font-family: 'Varela Round', arial;
        font-weight: lighter;
        background: var(--bg-color-secondary);
        border-radius: 20px;
        border: 1px solid #fff;
    }
    .homelink {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: #fff;
    }
    .homelink i {
        margin-right: 5px;
    }
</style>
