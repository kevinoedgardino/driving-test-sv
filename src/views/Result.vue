<script>
    export default {
        data() {
            return {
                result: {
                    questions: 0,
                    corrects: 0,
                    maxScore: 0
                },
            }
        },
        props: {
            testName: {
                type: String,
                required: true
            }
        },
        methods: {
            getFromLocalStorage(variableName) {
                if (localStorage.getItem(variableName)) {
                    const score = JSON.parse(localStorage.getItem(variableName))
                    this.result.questions += score.questions
                    this.result.corrects += score.corrects
                    if (score.corrects <= score.maxScore) {
                        this.result.maxScore += score.maxScore
                    }
                    if (score.corrects > score.maxScore) {
                        this.result.maxScore += score.corrects
                        localStorage.setItem(variableName, JSON.stringify(this.result))
                    }
                }
            },
            useLocalStorage() {
                if (this.testName === 'teorico') {
                    this.getFromLocalStorage("theoreticalScore")
                }
                else if (this.testName === 'teorico-2') {
                    this.getFromLocalStorage("theoretical2Score")
                }
                else if (this.testName === 'psicologico') {
                    this.getFromLocalStorage("psychologicalScore")
                }
                else {
                    window.location.href = '/resultado/'
                } 
            }
        },
        mounted() {
            document.title = "Resultados"
            this.useLocalStorage()
        }
    }
</script>

<template>
    <div class="d-flex justify-content-center m-5">
        <div class="flex-column">
            <h2 class="h2 text-center fs-1">¡Resultado!</h2>
            <div class="correct-count d-flex">
                <div>
                    <p>Tu puntaje:</p>
                    <span>{{ result.corrects }}</span><span class="shaded">/{{ result.questions }}</span>
                </div>
                <div>
                    <p>Puntaje Max:</p>
                    <span>{{ result.maxScore }}</span>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <router-link class="retry d-flex justify-content-center m-3" :to="`/${testName}`">
                    <span>Reintentar <i class="material-symbols-outlined">refresh</i></span>
                </router-link>
                <router-link class="homelink d-flex justify-content-center m-3" to="/">
                    <span>Ir al inicio <i class="material-symbols-outlined">home</i></span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .correct-count {    
        font-family: 'Lexend', arial;
    }
    .correct-count div {
        background: var(--bg-color-secondary);
        margin: 2rem;
        padding: 2rem;
        border-radius: 10px;
    }
    .correct-count p {
        font-size: 30px;
        text-decoration: underline;
    }
    .correct-count span {
        font-size: 1.5em;
    }
    .shaded {
        color: #c6c6c6;
        font-size: 1.1em !important;
    }
    .retry {
        max-width: 200px;
        height: 60px;
        background: #797979;
        text-decoration: none;
        text-align: center;
        border-radius: 50px;
    }
    .homelink {
        max-width: 200px;
        height: 60px;
        background: #2f57f7;
        text-decoration: none;
        text-align: center;
        border-radius: 50px;
    }
    .retry span, .homelink span {
        padding: 20px;
        display: flex;
        align-items: center;
        color: #fff;
    }
    @media (max-width: 550px) {
        .correct-count {    
            font-family: 'Lexend', arial;
        }
        .correct-count div {
            width: 12rem;
            background: var(--bg-color-secondary);
            margin: 0.3rem;
            padding: 2rem;
            border-radius: 10px;
        }
        .correct-count p {
            font-size: 20px;
            text-decoration: underline;
        }
        .correct-count span {
            font-size: 1.5em;
        }
    }
    @media (max-width: 400px) {
        .correct-count div {
            margin: 0.1rem;
        }
    }
</style>

