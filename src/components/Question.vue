<script>
    export default {
        data() {
            return {
                result: {
                    questions: 0,
                    corrects: 0,
                    maxScore: 0
                }
            }
        },
        props: {
            // Getting the questions
            qst: {
                type: Array,
                required: true
            },
            testType: {
                type: String,
                required: true
            }
        },
        methods: {
            passQuantity() {
                this.$emit('getQntQuestions', this.qst.length)
            },
            getOptionValues(id) {
                let question = this.qst.filter(question => question.id === id)
                let optionValues

                question.forEach(item => {
                    optionValues = Object.values(item.options)
                })

                return optionValues
            },
            disableButtons(id) {
                let values = this.getOptionValues(id)
                for (let i = 0; i <= values.length - 1; i++) {
                    let formattedValue = values[i].replace(/\s/g , '-').replaceAll('.','-').replaceAll(',','-').replaceAll('$','-').replaceAll('%','-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    document.querySelector(`.uwu${id}-${formattedValue}`).className += " disabled"
                }
            },
            getClass(id, isCorrect) {
                let question = this.qst.filter(question => question.id === id)
                let correct
                if (isCorrect) {
                    question.forEach(item => {
                        correct = item.options.correct
                    });
                    return correct = correct.replace(/\s/g , '-').replaceAll('.','-').replaceAll(',','-').replaceAll('$','-').replaceAll('%','-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                }
                else {
                    let incorrects = Object.keys(question[0].options)
                                            .filter((key) => key.includes('wrong'))
                                            .reduce((cur, key) => { return Object.assign(cur, { [key]: question[0].options[key] })}, {})
                    return incorrects
                }
            },
            showResult(id, isCorrect, value) {
                let classCorrect = this.getClass(id, true)
                if (isCorrect) {
                    document.querySelector(`.uwu${id}-${classCorrect}`).className += " correct"
                }
                else { 
                    let formatted = value.replace(/\s/g , '-').replaceAll('.','-').replaceAll(',','-').replaceAll('$','-').replaceAll('%','-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    document.querySelector(`.uwu${id}-${formatted}`).className += " incorrect"
                    document.querySelector(`.uwu${id}-${classCorrect}`).className += " correct"
                }
            },
            check(id, option, value) {
                if (option === "correct") {
                    this.disableButtons(id)
                    this.result.corrects += 1
                    this.showResult(id, true)
                }
                else {
                    this.disableButtons(id)
                    this.showResult(id, false, value)
                } 
            },
            saveOnLocalStorage() {  
                if (this.testType === 'teorico') localStorage.setItem("theoreticalScore", JSON.stringify(this.result))
                if (this.testType === 'teorico-2') localStorage.setItem("theoretical2Score", JSON.stringify(this.result))
                if (this.testType === 'psicologico') localStorage.setItem("psychologicalScore", JSON.stringify(this.result))
            },
            getMaxScore() {
                if (this.testType === 'teorico') {
                    if (localStorage.getItem("theoreticalScore")) {
                        const score = JSON.parse(localStorage.getItem("theoreticalScore"))
                        this.result.maxScore = score.maxScore
                    }
                }
                if (this.testType === 'teorico-2') {
                    if (localStorage.getItem("theoretical2Score")) {
                        const score = JSON.parse(localStorage.getItem("theoretical2Score"))
                        this.result.maxScore = score.maxScore
                    }
                }
                if (this.testType === 'psicologico') {
                    if (localStorage.getItem("psychologicalScore")) {
                        const score = JSON.parse(localStorage.getItem("psychologicalScore"))
                        this.result.maxScore = score.maxScore
                    }
                }
                
            }
        },
        mounted() {
            this.passQuantity()
            this.getMaxScore()
            this.result.questions += this.qst.length
        }
    }
</script>

<template>
<div class="container w-75">
    <section class="mb-3" v-for="question in qst" :key="question.id">
        <p v-if="!question.image" class="question d-flex m-auto mb-4">{{ question.id }}. {{ question.title }}</p>
        <p v-else class="question-sign m-auto mb-4">
            <span>{{ question.id }}. {{ question.title }}</span>
            <img :src="`/signs/${question.image}`" class="sign">
        </p>
        <div class="options">
            <div v-for="(value, key) in question.options" :key="key">
                <div :class="`option uwu${question.id}-${value.replace(/\s/g , '-').replaceAll('.','-').replaceAll(',','-').replaceAll('$','-').replaceAll('%','-').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`" @click.once="check(question.id, key, value)">
                    <button :id="`uwu${question.id}-${value.replace(/\s/g , '-').replaceAll('.','-').replaceAll(',','-').replaceAll('$','-').replaceAll('%','-').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`">{{ value }}</button>
                </div>  
            </div>
        </div>
        <hr class="mt-5 mb-5" /> 
    </section>
    <section class="mb-3">
        <router-link class="resultslink d-flex justify-content-center m-auto mb-5" @click="saveOnLocalStorage" :to="`/resultado/${testType}`">
            <span>Ver resultados<i class="material-symbols-outlined">sports_score</i></span>
        </router-link>
    </section>
</div>
</template>

<style scoped>
    .container {
        width: 400px;
        margin-top: 2.5em;
    }
    .question {
        font-family: 'Lexend', arial;
        font-weight: bolder;
        font-size: 1.4em;
        padding: 10px;
        border-bottom: 4px solid rgb(203, 203, 203);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-color: var(--bg-color-secondary);
        text-align: center;
        overflow: hidden;
        display: inline-block;
        justify-content: center;
    }
    .question-sign {
        font-family: 'Lexend', arial;
        font-weight: bolder;
        font-size: 1.4em;
        padding: 10px;
        border-bottom: 4px solid rgb(203, 203, 203);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-color: var(--bg-color-secondary);
        text-align: center;
        overflow: hidden;
        justify-content: center;
    }
    .sign {
        width: 208px;
        height: 100px;
        display: block;
        margin: auto;
    }
    .options {
        font-family: 'Lexend', arial;
        font-weight: 500;
        font-size: 1.1em;
        display: block;
        margin-top: 5px;
    }
    .option {
        border: 2px solid rgb(149, 149, 149);
        border-radius: 15px;
        background: #0d214d;
        text-align: center;
        padding: 10px 10px;
        margin: 13px 5px 23px;
        cursor: pointer;
        transition: 200ms ease;
    }
    .option:hover {
        background: #113278d5;
    }
    .correct {
        background: #1eb100;
        border: 2px solid #81ff68;
        transform: translateY(-8px);
        box-shadow:
            0 1px 1px rgba(0,0,0,0.15),
            8px 11px 0 -3px #157702;
    }
    .correct:hover {
        background: #1eb100;
    }
    .disabled {
        pointer-events: none;
    }
    .incorrect {
        background: #b10000;
        border: 2px solid #ff6868;
        transform: translateY(-8px);
        box-shadow:
            0 1px 1px rgba(0,0,0,0.15),
            8px 11px 0 -3px #770202;
    }
    .incorrect:hover {
        background: #b10000;
    }
    .option button {
        background: transparent;
        border: none;
        color: #fff;
    }
    .resultslink {
        max-width: 200px;
        height: 60px;
        background: #1ba300;
        text-decoration: none;
        text-align: center;
        border-radius: 50px;
        margin-bottom: 100px !important;
    }
    .resultslink:hover {
        background: #1fb900;
    }
    .resultslink span {
        display: flex;
        align-items: center;
        color: #fff;
    }
</style>